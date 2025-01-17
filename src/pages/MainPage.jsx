import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../components/Home";
function MainPage() {
    return (
        <div className="nav-fixed">
            <TopNav></TopNav>
            <div id="layoutSidenav">
                <Sidebar></Sidebar>
                <div id="layoutSidenav_content">
                    <Home></Home>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
export default MainPage;