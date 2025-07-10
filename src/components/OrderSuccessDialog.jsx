// src/components/OrderSuccessDialog.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

function OrderSuccessDialog({ open, onClose, orderNumber, tableNumber }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="order-success-dialog-title"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 2, sm: 3 },
          m: { xs: 1, sm: 3 },
          textAlign: 'center',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 4 }}>
        <Box sx={{ color: 'success.main', mb: 2 }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
        </Box>
        <DialogTitle id="order-success-dialog-title" sx={{ p: 0, pb: 1 }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            คำสั่งซื้อสำเร็จ!
          </Typography>
        </DialogTitle>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          คำสั่งซื้อของคุณได้รับการยืนยันเรียบร้อยแล้ว
        </Typography>
        {orderNumber && (
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
            หมายเลขคำสั่งซื้อ: **#{orderNumber}**
          </Typography>
        )}
        {tableNumber && (
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            สำหรับโต๊ะ: **{tableNumber}**
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          พนักงานจะดำเนินการตามคำสั่งซื้อของคุณในไม่ช้า
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ py: 1.5, fontSize: '1.1rem' }}
        >
          ตกลง
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderSuccessDialog;