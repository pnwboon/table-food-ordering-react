// src/utils/discordWebhook.js
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import { categories } from '../data/menuData'; // <-- ตรวจสอบให้แน่ใจว่ามีบรรทัดนี้อยู่!

// ** นี่คือบรรทัดที่แทนที่แล้ว **
const WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1392716507191971901/3VEzgmUbR4zxx5jncAfQS9g3XsXlyNXF7tqukEPhZVpMQnTJS42kHOr3cOMAjTBdSnar'; // <--- ใส่ URL จริงของคุณตรงนี้

const hook = new Webhook(WEBHOOK_URL);

// ฟังก์ชันสำหรับส่งคำสั่งซื้อไปยัง Discord
export const sendOrderToDiscord = async (selectedTable, cartItems, orderNumber) => {
  if (!WEBHOOK_URL) {
    console.warn('Discord Webhook URL is not configured. Order will not be sent to Discord.');
    return;
  }

  const categorizedItems = cartItems.reduce((acc, item) => {
    const category = item.category || 'อื่นๆ'; 
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const embed = new MessageBuilder()
    .setTitle(`:clipboard: คำสั่งซื้อใหม่ โต๊ะที่ ${selectedTable} (เลขที่: #${orderNumber})`)
    .setColor('#0099ff')
    .setDescription(`**รายละเอียดคำสั่งซื้อ:**`);

  // <<-- แก้ไขส่วนการวนลูปตรงนี้ -->>
  // วนลูปตามลำดับของ categories ที่เรากำหนดไว้
  categories.forEach(categoryName => {
    // ตรวจสอบว่ามีสินค้าในหมวดหมู่นั้นๆ ในตะกร้าหรือไม่
    if (categorizedItems[categoryName] && categorizedItems[categoryName].length > 0) {
      const itemsInCategory = categorizedItems[categoryName];
      const itemsText = itemsInCategory.map(item =>
        `- ${item.name} x ${item.quantity} ${item.notes ? `(${item.notes})` : ''}`
      ).join('\n');

      embed.addField(`:blue_circle: ${categoryName}`, itemsText, false); 
    }
  });


  // ... (ส่วนท้ายโค้ดเดิม) ...
  embed.addField('ราคารวม', `${totalPrice.toLocaleString()} ฿`, true)
    .addField('จำนวนรายการทั้งหมด', `${cartItems.reduce((total, item) => total + item.quantity, 0)} ชิ้น`, true)
    .addField('จำนวนสินค้าไม่ซ้ำ', `${cartItems.length} รายการ`, true)
    .setTimestamp(); 

  try {
    await hook.send(embed);
    console.log(`Order #${orderNumber} for Table ${selectedTable} sent to Discord successfully.`);
  } catch (error) {
    console.error(`Failed to send order #${orderNumber} to Discord:`, error);
  }
};

// ฟังก์ชันสำหรับส่งข้อความแจ้งเตือนเมื่อเลือกโต๊ะ (Optional) - ไม่ได้แก้ไขส่วนนี้
export const sendTableSelectionToDiscord = async (tableNumber) => {
    if (!WEBHOOK_URL) {
        console.warn('Discord Webhook URL is not configured. Table selection will not be sent to Discord.');
        return;
    }

    const embed = new MessageBuilder()
      .setTitle(`:chair: โต๊ะที่ ${tableNumber} ได้ถูกเลือกแล้ว`)
      .setColor('#FFFF00') // สีเหลือง
      .setTimestamp(); 
    
    try {
        await hook.send(embed);
        console.log(`Table ${tableNumber} selection sent to Discord successfully.`);
    } catch (error) {
        console.error(`Failed to send table selection to Discord:`, error);
    }
};