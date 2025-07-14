// src/pages/MenuPage.jsx
import React, { useState, useEffect } from 'react';
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
  ImageList,
  ImageListItem
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

// **กำหนดความกว้างของ Card ที่คุณต้องการ (เป็น Pixel)**
const FIXED_CARD_WIDTH = 150; // ตัวอย่าง: กำหนดให้ Card กว้าง 200px
// หรืออาจจะลอง 220, 250 แล้วแต่ความเหมาะสมกับดีไซน์และเนื้อหาของคุณ

function MenuPage({ selectedTable, onAddToCart, onViewCart, cartItemCount }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemNotes, setItemNotes] = useState('');

  useEffect(() => {
    console.log('MenuPage: Component Mounted/Updated. Cart item count:', cartItemCount);
  }, [cartItemCount]);

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleOpenDetail = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setItemQuantity(1);
    setItemNotes('');
    setOpenDetailDialog(true);
  };

  const handleCloseDetail = () => {
    setOpenDetailDialog(false);
    setSelectedMenuItem(null);
    setItemQuantity(1);
    setItemNotes('');
  };

  const handleQuantityChange = (type) => {
    if (type === 'add') {
      setItemQuantity((prev) => prev + 1);
    } else if (type === 'remove' && itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };

  const handleAddItemToCart = () => {
    if (selectedMenuItem) {
      onAddToCart(selectedMenuItem, itemQuantity, itemNotes);
      handleCloseDetail();
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
                // *** เริ่มการแก้ไขเพื่อ Fixed Width ***
                justifyContent="center" // จัด Card ให้อยู่กึ่งกลางในแถว
                // *** สิ้นสุดการแก้ไข ***
              >
                {itemsToDisplay.map((item) => (
                  <Grid
                    key={item.id}
                    // *** เริ่มการแก้ไขเพื่อ Fixed Width ***
                    // ลบ xs, sm, md, lg ออกไป เนื่องจากเราจะกำหนด width ที่ Card โดยตรง
                    // xs={6}
                    // sm={4}
                    // md={3}
                    // lg={2.4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'stretch',
                      flexBasis: 'auto', // สำคัญ: ป้องกันไม่ให้ Grid item ขยายตัวเมื่อแถวไม่เต็ม
                      flexGrow: 0,       // สำคัญ: ป้องกันไม่ให้ Grid item ขยายตัวเมื่อแถวไม่เต็ม
                      // *** สิ้นสุดการแก้ไข ***
                    }}
                  >
                    <Card
                      sx={{
                        // *** เริ่มการแก้ไขเพื่อ Fixed Width ***
                        width: FIXED_CARD_WIDTH, // กำหนดความกว้างของ Card เป็นค่าคงที่
                        minWidth: FIXED_CARD_WIDTH, // ให้แน่ใจว่าไม่เล็กกว่าที่กำหนด
                        maxWidth: FIXED_CARD_WIDTH, // ให้แน่ใจว่าไม่ใหญ่กว่าที่กำหนด
                        // *** สิ้นสุดการแก้ไข ***
                        minHeight: 250, // ความสูงยังคงใช้ minHeight เพื่อความยืดหยุ่น
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        borderRadius: { xs: 2, sm: 3 },
                        boxShadow: { xs: 1, sm: 3 },
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
                          width: '100%', // ให้รูปภาพขยายเต็มความกว้างของ Card ที่ Fixed
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
                <Typography variant="subtitle1" component="div" color="text.secondary" sx={{ mb: 1 }}>
                  {selectedMenuItem.englishName}
                </Typography>
                <Typography variant="h5" component="div" color="primary">
                  {selectedMenuItem.price} ฿
                </Typography>
              </DialogTitle>
              <DialogContent dividers sx={{ px: 2, py: 1 }}>
                {selectedMenuItem.image && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 1,
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