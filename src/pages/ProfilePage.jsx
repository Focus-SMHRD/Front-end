import React from 'react'
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div className="nav-fixed">
      <TopNav></TopNav>
        <div id="layoutSidenav">
          <Sidebar></Sidebar>
            <div id="layoutSidenav_content">
              <Profile></Profile>
              <Footer></Footer>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage;