// src/App.jsx
import React, { useState } from 'react';
import TableSelectionPage from './pages/TableSelectionPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderSuccessDialog from './components/OrderSuccessDialog'; // <<-- เพิ่มบรรทัดนี้
import { sendOrderToDiscord, sendTableSelectionToDiscord } from './utils/discordWebhook'; // <<-- เพิ่มบรรทัดนี้

function App() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('tableSelection'); // 'tableSelection', 'menu', 'cart'
  const [isOrderSuccessDialogOpen, setIsOrderSuccessDialogOpen] = useState(false); // <<-- เพิ่ม state ใหม่
  const [lastOrderNumber, setLastOrderNumber] = useState(null); // <<-- เพิ่ม state ใหม่

  // <<-- เพิ่มฟังก์ชัน generateOrderNumber ใหม่
  // สร้างหมายเลขคำสั่งซื้อแบบง่ายๆ (ใน Production ควรมาจาก Backend/DB)
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp.toString().slice(-6)}-${random}`;
  };

  const handleTableSelect = (tableNumber) => {
    console.log('App: handleTableSelect called. Selected Table:', tableNumber);
    setSelectedTable(tableNumber);
    setCurrentPage('menu'); // เมื่อเลือกโต๊ะแล้ว ไปยังหน้าเมนู
    // <<-- (Optional) ส่งแจ้งเตือนเมื่อเลือกโต๊ะ
    sendTableSelectionToDiscord(tableNumber);
  };

  const handleAddToCart = (item, quantity, notes) => {
    console.log('App: --- handleAddToCart Start ---');
    console.log(`App: Adding: ${item.name}, Incoming Quantity from MenuPage: ${quantity}, Notes: "${notes}"`);

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.notes === notes
      );

      if (existingItemIndex > -1) {
        // ถ้ามีรายการนี้อยู่แล้ว ให้อัปเดตจำนวน
        const updatedItems = [...prevItems];
        const currentQuantity = updatedItems[existingItemIndex].quantity;
        const newQuantity = currentQuantity + quantity;
        updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: newQuantity,
        };
        console.log(`App: Item "${item.name}" (Notes: "${notes}") already in cart. Current quantity in cart: ${currentQuantity}. Adding: ${quantity}. New quantity will be: ${newQuantity}`);
        return updatedItems;
      } else {
        // เพิ่มรายการใหม่
        console.log(`App: New item "${item.name}" (Notes: "${notes}") added to cart with quantity: ${quantity}`);
        return [...prevItems, { ...item, quantity, notes }];
      }
    });
    // ใช้ setTimeout เพื่อให้แน่ใจว่า state อัปเดตก่อน console.log (useState เป็น asynchronous)
    // หรืออีกวิธีคือ log prevItems ก่อน return
    // console.log('App: Current Cart Items (after handleAddToCart - async update):', JSON.parse(JSON.stringify(cartItems))); // This will show old state
    console.log('App: --- handleAddToCart End ---');
  };

  const handleUpdateCartItemQuantity = (itemId, notes, newQuantity) => {
    console.log(`App: handleUpdateCartItemQuantity called for Item ID: ${itemId}, Notes: "${notes}", New Quantity: ${newQuantity}`);
    setCartItems(prevItems => {
      const updatedCart = prevItems.map(item => {
        if (item.id === itemId && item.notes === notes) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0); // ลบรายการที่จำนวนเป็น 0
      console.log('App: Cart after update quantity:', JSON.parse(JSON.stringify(updatedCart)));
      return updatedCart;
    });
  };

  const handleRemoveItemFromCart = (itemId, notes) => {
    console.log(`App: handleRemoveItemFromCart called for Item ID: ${itemId}, Notes: "${notes}"`);
    setCartItems(prevItems => {
        const filteredCart = prevItems.filter(item => !(item.id === itemId && item.notes === notes));
        console.log('App: Cart after remove item:', JSON.parse(JSON.stringify(filteredCart)));
        return filteredCart;
    });
  };

  const handleConfirmOrder = async () => { // <<-- เปลี่ยนเป็น async
    console.log('App: --- handleConfirmOrder Start ---');
    console.log('App: Order Confirmed for Table:', selectedTable);
    console.log('App: Cart Items at confirmation:', JSON.parse(JSON.stringify(cartItems)));
    
    // <<-- เพิ่มการตรวจสอบตะกร้าว่าง
    if (cartItems.length === 0) {
        alert('กรุณาเพิ่มสินค้าในตะกร้าก่อนยืนยันคำสั่งซื้อ');
        console.log('App: Cart is empty, order not confirmed.');
        return;
    }

    const orderNumber = generateOrderNumber(); // <<-- สร้างหมายเลขคำสั่งซื้อ
    setLastOrderNumber(orderNumber); // <<-- เก็บหมายเลขไว้แสดงใน dialog

    // <<-- ส่ง Discord Webhook
    await sendOrderToDiscord(selectedTable, cartItems, orderNumber);

    // หลังจากส่งคำสั่งซื้อสำเร็จ (สมมติว่าสำเร็จเสมอ ณ ตอนนี้)
    setCartItems([]); // <<-- ล้างตะกร้า
    setSelectedTable(null); // <<-- ล้างโต๊ะที่เลือก

    // <<-- เปิด Dialog สำเร็จแทนการเปลี่ยนหน้าทันที
    setIsOrderSuccessDialogOpen(true); 
    
    console.log('App: --- handleConfirmOrder End ---');
  };

  // <<-- เพิ่มฟังก์ชันสำหรับปิด Dialog สำเร็จ
  const handleCloseOrderSuccessDialog = () => {
    setIsOrderSuccessDialogOpen(false);
    setCurrentPage('tableSelection'); // กลับไปหน้าเลือกโต๊ะเมื่อปิด Dialog สำเร็จ
  };

  return (
    <div>
      {currentPage === 'tableSelection' && (
        <TableSelectionPage onSelectTable={handleTableSelect} />
      )}

      {currentPage === 'menu' && selectedTable && (
        <MenuPage
          selectedTable={selectedTable}
          onAddToCart={handleAddToCart}
          onViewCart={() => {
              console.log('App: Navigating to Cart Page. Current Cart Items:', JSON.parse(JSON.stringify(cartItems)));
              setCurrentPage('cart');
          }}
          cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />
      )}

      {currentPage === 'cart' && selectedTable && (
        <CartPage
          selectedTable={selectedTable}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartItemQuantity}
          onRemoveItem={handleRemoveItemFromCart}
          onConfirmOrder={handleConfirmOrder}
          onBackToMenu={() => {
              console.log('App: Navigating back to Menu Page.');
              setCurrentPage('menu');
          }}
        />
      )}

      {/* <<-- เพิ่ม Order Success Dialog ตรงนี้ -->> */}
      <OrderSuccessDialog
        open={isOrderSuccessDialogOpen}
        onClose={handleCloseOrderSuccessDialog}
        orderNumber={lastOrderNumber}
        tableNumber={selectedTable} // ส่ง tableNumber ไปยัง dialog เพื่อแสดง
      />
    </div>
  );
}

export default App;