// src/main.jsx (หรือ src/main.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// สร้าง Theme ของคุณ
const theme = createTheme({
  // คุณสามารถกำหนดสี, typography, etc. ได้ที่นี่
  palette: {
    primary: {
      main: '#FFC107', // สีเหลือง
    },
    secondary: {
      main: '#212121', // สีดำ
    },
    background: {
      default: '#f5f5f5', // สีพื้นหลังอ่อนๆ
    },
  },
  components: {
    // เพิ่ม global styles สำหรับ html, body ที่นี่
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          overflow-x: hidden;
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* CssBaseline จะช่วย reset CSS และใช้ styleOverrides ที่เรากำหนด */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);