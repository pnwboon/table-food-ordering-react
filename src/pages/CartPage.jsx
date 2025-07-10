// src/pages/CartPage.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ButtonGroup,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartPage({ selectedTable, cartItems, onUpdateQuantity, onRemoveItem, onConfirmOrder, onBackToMenu }) {

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (item, type) => {
    // ตรงนี้คือจุดที่ต้องส่ง notes ไปด้วย
    if (type === 'add') {
      onUpdateQuantity(item.id, item.notes, item.quantity + 1);
    } else if (type === 'remove') {
      if (item.quantity - 1 <= 0) {
        onRemoveItem(item.id, item.notes); // ถ้าเหลือ 0 หรือน้อยกว่า ให้ลบออกจากตะกร้า
      } else {
        onUpdateQuantity(item.id, item.notes, item.quantity - 1);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={onBackToMenu} startIcon={<ArrowBackIcon />}>
            กลับสู่เมนู
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            ตะกร้าสินค้า (โต๊ะที่ {selectedTable})
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          รายการอาหารในตะกร้า
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mt: 3 }}>
            ยังไม่มีรายการอาหารในตะกร้า
          </Typography>
        ) : (
          <Box sx={{ mt: 3 }}>
            <List>
              {cartItems.map((item) => (
                <ListItem
                  key={`${item.id}-${item.notes}`} // ใช้ id และ notes เป็น key เพื่อให้ React แยก item ที่ id ซ้ำกันแต่ notes ต่างกันได้
                  sx={{
                    borderBottom: '1px solid #eee',
                    py: 1,
                    alignItems: 'flex-start',
                  }}
                >
                  <ListItemText
                    primary={
                      <>
                        <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 1 }}>
                          ({item.englishName})
                        </Typography>
                      </>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }} component="span">
                          ราคา: {item.price} ฿/จาน
                        </Typography>
                        {item.notes && (
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }} component="span">
                            หมายเหตุ: {item.notes}
                          </Typography>
                        )}
                      </>
                    }
                  />
                  <ListItemSecondaryAction sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {(item.price * item.quantity).toFixed(2)} ฿
                    </Typography>
                    <ButtonGroup variant="outlined" size="small" aria-label="quantity control">
                      <IconButton onClick={() => handleQuantityChange(item, 'remove')}>
                        <RemoveIcon />
                      </IconButton>
                      <Button disableRipple>{item.quantity}</Button>
                      <IconButton onClick={() => handleQuantityChange(item, 'add')}>
                        <AddIcon />
                      </IconButton>
                    </ButtonGroup>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5" align="right" sx={{ mt: 3, fontWeight: 'bold' }}>
              รวมทั้งหมด: {totalAmount.toFixed(2)} ฿
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 4, py: 1.5, fontSize: '1.1rem' }}
              onClick={onConfirmOrder}
            >
              ยืนยันคำสั่งซื้อ
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default CartPage;