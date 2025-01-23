import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Fishfarm from '../components/Fishfarm'

const FishfarmPage = () => {
  return (
    <div className="nav-fixed">
      <TopNav></TopNav>
        <div id="layoutSidenav">
          <Sidebar></Sidebar>
            <div id="layoutSidenav_content">
              <Fishfarm></Fishfarm>
              <Footer></Footer>
            </div>
        </div>
    </div>
  )
}

export default FishfarmPage;