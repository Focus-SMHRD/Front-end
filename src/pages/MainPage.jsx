import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../components/Home";

import { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    
    const [newsTop3, setNewsTop3] = useState([]);
    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await top3News();  // 외부 API 호출
                setNewsTop3(data);
                console.log('가져온 뉴스 데이터:', data);  // 올바른 위치
            } catch (err) {
                console.log(err.message);
            } 
        };
        loadNews();
    }, []);

    const clickMain = () => {
        // if(isClick){
        //     setIsClick(false)
        // }
        // else{
        //     setIsClick(true)
        // }
        setIsClick(true)
        console.log(isClick)
    }
    return (
        <div className="nav-fixed">
            <TopNav isClick = {isClick} setIsClick = {setIsClick}></TopNav>
            <div id="layoutSidenav">
                <Sidebar></Sidebar>
                <div id="layoutSidenav_content" onClick={()=> {clickMain()}}>
                    <Home news = {newsTop3}></Home>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

const top3News = async () => {
    try {
      const response = await axios.get("/focus/api/news/top3");
      return response.data;  // 뉴스 데이터 반환
    } catch (error) {
      console.error('API 요청 실패:', error);
      throw new Error('뉴스 데이터를 불러오는 중 오류가 발생했습니다.');
    }
  };
export default MainPage;