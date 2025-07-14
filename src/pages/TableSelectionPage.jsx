// src/pages/TableSelectionPage.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  AppBar,
  Toolbar,
} from '@mui/material';

function TableSelectionPage({ onSelectTable }) {
  const [selectedTableNumber, setSelectedTableNumber] = useState(null);

  // สร้าง array ของหมายเลขโต๊ะสมมติ (เช่น 1-12)
  const tableNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSelect = (tableNumber) => {
    setSelectedTableNumber(tableNumber);
  };

  const handleSubmit = () => {
    if (selectedTableNumber) {
      onSelectTable(selectedTableNumber);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            โปรแกรมจัดการรายการเมนูอาหาร
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          กรุณาเลือกหมายเลขโต๊ะของคุณ
        </Typography>
        {/* แก้ไข Grid container ให้มี columns และ Grid ลูกใช้เพียง xs สำหรับความกว้าง */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          {tableNumbers.map((tableNum) => (
            <Grid key={tableNum} sx={{ gridColumn: { xs: 'span 6', sm: 'span 4', md: 'span 3' } }}>
              <Button
                variant={selectedTableNumber === tableNum ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleSelect(tableNum)}
                sx={{ width: '100%', height: '80px', fontSize: '1.5rem' }}
              >
                {tableNum}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
            disabled={selectedTableNumber === null}
          >
            เข้าสู่เมนูอาหาร
          </Button>
          {selectedTableNumber && (
            <Typography variant="h6" sx={{ mt: 2 }}>
              คุณเลือกโต๊ะ: {selectedTableNumber}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default TableSelectionPage;