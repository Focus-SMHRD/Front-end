import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import 'simple-datatables/dist/style.css'; // 데이터테이블 CSS 파일 import

createRoot(document.getElementById('root')).render(
    <App />
)
