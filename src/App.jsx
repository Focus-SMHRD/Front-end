import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import FindPage from './pages/FindPage';
import FishfarmPage from './pages/FishfarmPage';
import AccountPage from './pages/AccountPage';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';

// CSS는 최상단에 로딩
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// JS 파일 순서 조정 및 중복 제거
import '@fortawesome/fontawesome-free/js/all.min.js';


function App() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<RegisterPage />} />
                <Route path="/find" element={<FindPage />}/>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/fishfarm" element={<FishfarmPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;