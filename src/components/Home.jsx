import BarChart from './BarChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import React, { useRef, useEffect } from "react";
import { DataTable } from "simple-datatables";
import Table from './Table';

const Home = () => {
    return(
      <>
        <main>
          <header className="page-header page-header-dark pb-10"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../mainImg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 47%",
            }}>
            <div className="container-xl px-4 ">
              <div className="page-header-content pt-4">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto mt-4">
                    <h1 className="page-header-title">
                      <div className="page-header-icon">
                        <i data-feather="activity" />
                      </div>
                      홈화면
                    </h1>
                    <div className="page-header-subtitle">
                      현재 뜨고있는 뉴스기사🔥
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ---------파란배경----------*/}
          <div className="container-xl px-4 mt-n10">
            <div className="row">
              <div className="col-xl-4 mb-4">
                {/* 뉴스카드 1*/}
                <a className="card lift h-100" href="#!">
                  <div className="card-body d-flex justify-content-center flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="me-3">
                      
                        <h5>뉴스기사 1</h5>
                        <div className="text-muted small">
                        뉴스기사
                        </div>
                      </div>
                      <img
                        src="https://img.asiatoday.co.kr/file/2025y/01m/13d/2025011301001009800061571.jpg"
                        alt="..."
                        style={{ width: "9rem", height : "7rem", borderRadius : "5px" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 mb-4">
                {/* 뉴스카드 2*/}
                <a className="card lift h-100" href="#!">
                  <div className="card-body d-flex justify-content-center flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="me-3">
                      
                        <h5>뉴스기사 2</h5>
                        <div className="text-muted small">
                        뉴스기사 2
                        </div>
                      </div>
                      <img
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F008%2F2023%2F04%2F12%2F0004874089_001_20230601202101003.jpg&type=sc960_832"
                        alt="..."
                        style={{ width: "9rem", height : "7rem", borderRadius : "5px" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 mb-4">
                {/* 뉴스카드 3*/}
                <a className="card lift h-100" href="#!">
                  <div className="card-body d-flex justify-content-center flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="me-3">
                        
                        <h5>뉴스기사 3</h5>
                        <div className="text-muted small">
                        뉴스기사 3
                        </div>
                      </div>
                      <img
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2017%2F12%2F05%2FNISI20171205_0000077284_web_20171205113336997.jpg&type=sc960_832"
                        alt="..."
                        style={{ width: "9rem", height : "7rem", borderRadius : "5px" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
              <div className="row">
                <div className="col-xxl-7 col-lg-7 col-md-12">
                  {/* Tabbed dashboard card example */}
                  <div className="card mb-4">
                    <div className="card-header border-bottom">
                      <ul
                        className="nav nav-tabs card-header-tabs"
                        id="dashboardNav"
                        role="tablist"
                      >
                        <li className="nav-item me-1">
                          <a
                            className="nav-link active"
                            id="overview-pill"
                            href="#overview"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="overview"
                            aria-selected="true"
                          >
                            수온 예측
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="activities-pill"
                            href="#activities"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="activities"
                            aria-selected="false"
                          >
                            과거 수온
                          </a>
                        </li>
                      </ul>
                    </div>
                  <div className="card-body">
                    <div className="tab-content" id="dashboardNavContent">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview-pill"
                      >
                      <div className="chart-area mb-4 mb-lg-0">
                        <AreaChart />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade chart-area mb-4 mb-lg-0 "
                      id="activities"
                      role="tabpanel"
                      aria-labelledby="activities-pill"
                    >
                     <BarChart/>{/* 여기에 과거수온 차트 넣으면 됨 */}
                    </div>
                  </div>
                </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-12">
              <div className="card mb-4">
                <div className="card-header">오늘의 날씨 🌤️</div>
                  <div className="card-body">
                    <div className="chart-pie mb-4">
                      <PieChart/>
                    </div>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                      <div className="me-3">
                        <i className="fas fa-circle fa-sm me-1 text-blue" />
                        데이터1
                      </div>
                      <div className="fw-500 text-dark">55%</div>
                    </div>
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                      <div className="me-3">
                        <i className="fas fa-circle fa-sm me-1 text-purple" />
                        데이터2
                      </div>
                      <div className="fw-500 text-dark">15%</div>
                    </div>
                    <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                      <div className="me-3">
                        <i className="fas fa-circle fa-sm me-1 text-green" />
                        데이터3
                      </div>
                      <div className="fw-500 text-dark">30%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------실시간 표층수온 표-----------*/}
            
    <div className='col-xxl-12'>
   <div className="card mb-4">
  <div className="card-header">Personnel Management</div>
  <div className="card-body">
    <Table/>
  </div>
</div>
</div>
            </div>
          </div>
        </main>


    </>
    );
}
export default Home;