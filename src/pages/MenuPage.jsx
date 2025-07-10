// src/pages/MenuPage.jsx
import React, { useState, useEffect } from 'react'; // ต้อง import useEffect ด้วย
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Box,
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  ImageList, // ไม่ได้ใช้ในโค้ดที่คุณให้มา แต่ยังคงไว้
  ImageListItem // ไม่ได้ใช้ในโค้ดที่คุณให้มา แต่ยังคงไว้
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

import { menuData, categories } from '../data/menuData';

// ฟังก์ชันช่วยตัดข้อความ
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

function MenuPage({ selectedTable, onAddToCart, onViewCart, cartItemCount }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemNotes, setItemNotes] = useState('');

  // Debugging: Log initial state and prop changes
  useEffect(() => {
      console.log('MenuPage: Component Mounted/Updated.');
      console.log('MenuPage: Current cartItemCount prop:', cartItemCount);
  }, [cartItemCount]);


  const handleTabChange = (event, newValue) => {
    console.log('MenuPage: Tab changed to:', categories[newValue - 1] || 'ทั้งหมด');
    setSelectedCategory(newValue);
  };

  const handleOpenDetail = (menuItem) => {
    console.log('MenuPage: --- handleOpenDetail Start ---');
    console.log('MenuPage: Selected menu item for detail:', menuItem.name);
    setSelectedMenuItem(menuItem);
    setItemQuantity(1); // Reset quantity to 1
    setItemNotes('');
    setOpenDetailDialog(true);
    console.log('MenuPage: Dialog quantity reset to 1, notes reset.');
    console.log('MenuPage: --- handleOpenDetail End ---');
  };

  const handleCloseDetail = () => {
    console.log('MenuPage: Closing detail dialog.');
    setOpenDetailDialog(false);
    setSelectedMenuItem(null);
    setItemQuantity(1); // เพิ่มการ reset quantity เมื่อปิด dialog เพื่อความแน่ใจ
    setItemNotes(''); // เพิ่มการ reset notes เมื่อปิด dialog เพื่อความแน่ใจ
  };

  const handleQuantityChange = (type) => {
    console.log(`MenuPage: handleQuantityChange called, type: ${type}, current itemQuantity: ${itemQuantity}`);
    if (type === 'add') {
      setItemQuantity((prev) => prev + 1);
      console.log('MenuPage: Quantity increased to', itemQuantity + 1);
    } else if (type === 'remove' && itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
      console.log('MenuPage: Quantity decreased to', itemQuantity - 1);
    } else if (type === 'remove' && itemQuantity === 1) {
      console.log('MenuPage: Cannot decrease quantity below 1.');
    }
  };

  const handleAddItemToCart = () => {
    if (selectedMenuItem) {
      console.log('MenuPage: --- handleAddItemToCart Start ---');
      console.log(`MenuPage: Calling onAddToCart for: ${selectedMenuItem.name}, Quantity: ${itemQuantity}, Notes: "${itemNotes}"`);
      onAddToCart(selectedMenuItem, itemQuantity, itemNotes);
      handleCloseDetail(); // ปิด Dialog หลังเพิ่มลงตะกร้า
      console.log('MenuPage: --- handleAddItemToCart End ---');
    }
  };

  const categoriesToRender = selectedCategory === 0
    ? categories
    : [categories[selectedCategory - 1]];

  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden', position: 'relative' }}>
      <AppBar position="static">
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            เมนูอาหาร (โต๊ะที่ {selectedTable})
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          mt: { xs: 1, sm: 2 },
          mb: { xs: 2, sm: 4 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: { xs: 1, sm: 2 } }}>
          <Tabs
            value={selectedCategory}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable food categories tabs"
            sx={{
              minHeight: { xs: 36, sm: 48 },
              '& .MuiTab-root': {
                minHeight: { xs: 36, sm: 48 },
                fontSize: { xs: '0.85rem', sm: '1rem' },
              },
            }}
          >
            <Tab label="ทั้งหมด" />
            {categories.map((category, index) => (
              <Tab key={category} label={category} />
            ))}
          </Tabs>
        </Box>

        {categoriesToRender.map((categoryName, catIndex) => {
          const itemsToDisplay = menuData.filter(item => item.category === categoryName);

          if (itemsToDisplay.length === 0) {
            return null;
          }

            return (
            <Box key={categoryName} sx={{ mb: 4 }}>
              <Typography
              variant="h5"
              component="div"
              sx={{
                mt: { xs: 2, sm: 3 },
                mb: { xs: 1, sm: 2 },
                fontWeight: 'bold',
                color: 'text.primary',
                textAlign: 'center',
                width: '100%',
              }}
              >
              {categoryName}
              <Divider sx={{ mt: 1 }} />
              </Typography>

              <Grid
              container
              spacing={2}
              justifyContent="center"
              maxWidth="330px"
              margin="0 auto"
              >
              {itemsToDisplay.map((item) => (
                <Grid
                key={item.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
                >
                <Card
                  sx={{
                  width: 150,
                  height: 215,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderRadius: { xs: 2, sm: 3 },
                  boxShadow: { xs: 1, sm: 3 },
                  minWidth: 150,
                  maxWidth: 150,
                  }}
                  onClick={() => handleOpenDetail(item)}
                >
                  <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    objectFit: 'cover',
                    height: 100,
                    width: '100%',
                    borderTopLeftRadius: { xs: 8, sm: 12 },
                    borderTopRightRadius: { xs: 8, sm: 12 },
                  }}
                  />
                  <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    p: 1.5,
                    minWidth: 0,
                    height: 'calc(215px - 100px - 12px)',
                  }}
                  >
                  <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}>
                    {/* **ชื่อภาษาไทย** */}
                    <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      lineHeight: '1.2em',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      mb: 0.5,
                    }}
                    >
                    {truncateText(item.name, 20)}
                    </Typography>
                    {/* **ชื่อภาษาอังกฤษ** */}
                    <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.95rem' },
                      lineHeight: '1.2em',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    >
                    {truncateText(item.englishName, 20)}
                    </Typography>
                  </Box>
                  {/* **ราคาจะอยู่ด้านล่างเสมอด้วย mt: 'auto'** */}
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                    mt: 'auto',
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    }}
                  >
                    {item.price} ฿
                  </Typography>
                  </CardContent>
                </Card>
                </Grid>
              ))}
              </Grid>
            </Box>
            );
        })}

        {/* Floating Cart Button and Dialog remain unchanged */}
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            zIndex: 1000,
          }}
        >
          <Badge badgeContent={cartItemCount} color="error">
            <IconButton
              color="primary"
              sx={{
                bgcolor: 'warning.main',
                '&:hover': {
                  bgcolor: 'warning.dark',
                },
                width: { xs: 56, sm: 64 },
                height: { xs: 56, sm: 64 },
                borderRadius: '50%',
                boxShadow: 6,
              }}
              onClick={onViewCart}
            >
              <ShoppingCartIcon sx={{ fontSize: { xs: 30, sm: 36 } }} />
            </IconButton>
          </Badge>
        </Box>

        <Dialog
          open={openDetailDialog}
          onClose={handleCloseDetail}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: { xs: 2, sm: 3 },
              m: { xs: 1, sm: 3 },
            },
          }}
        >
          {selectedMenuItem && (
            <>
              <DialogTitle sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    {selectedMenuItem.name}
                  </Typography>
                  <IconButton aria-label="close" onClick={handleCloseDetail}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                {/* แก้ไขตรงนี้: แยก Typography ของภาษาอังกฤษและราคาออกจากกัน */}
                <Typography variant="subtitle1" component="div" color="text.secondary" sx={{ mb: 1 }}>
                  {selectedMenuItem.englishName}
                </Typography>
                <Typography variant="h5" component="div" color="primary">
                  {selectedMenuItem.price} ฿
                </Typography>
              </DialogTitle>
              <DialogContent dividers sx={{ px: 2, py: 1 }}>
                {/* ส่วนที่เพิ่มสำหรับแสดงรูปภาพของเมนู */}
                {selectedMenuItem.image && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 1, // เพิ่ม zIndex
                      mb: 2,
                      maxHeight: '200px',
                      overflow: 'hidden',
                      borderRadius: 2,
                    }}
                  >
                    <img
                      src={selectedMenuItem.image}
                      alt={selectedMenuItem.name}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                )}
                {/* สิ้นสุดส่วนที่เพิ่มสำหรับแสดงรูปภาพเมนู */}

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {selectedMenuItem.description}
                </Typography>

                <TextField
                  label="หมายเหตุเพิ่มเติม (เช่น ไม่เอาผัก)"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
                  value={itemNotes}
                  onChange={(e) => setItemNotes(e.target.value)}
                  sx={{ mb: 2 }}
                />

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton onClick={() => handleQuantityChange('remove')}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ mx: 2 }}>
                    {itemQuantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange('add')}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button
                  onClick={handleAddItemToCart}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ py: 1.5, fontSize: '1.1rem' }}
                >
                  เพิ่มลงตะกร้า
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

export default MenuPage;