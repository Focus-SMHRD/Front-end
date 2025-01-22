import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Table from './Table';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({news}) => {
    const [pastData, setPastData] = useState([]);
    const [liveData, setLiveData] = useState([]);
    const [tableOp, setTableOp] = useState([]);
    const [tableTh, setTableTh] = useState([]);
    const [dataset, setDataset] = useState([]);
    const [scales, setScales] = useState({});
    const [label, setLabel] = useState([]);
    const [threeDataset, setThreeDataset] = useState([]);
    const [threeScales, setThreeScales] = useState({});
    const [threeLabel, setThreeLabel] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    // 과거 데이터 가져오기
    useEffect(() => {
        const loadPastData = async () => {
            try {
                const data = await getPastData();  // 외부 API 호출
                setPastData(data);
                setDataset(
                  [
                    {
                      label: "평균온도(°C)",
                      data: data.map((item) => item.avg_temp),
                      borderColor: "rgba(75, 192, 192, 1)",
                      backgroundColor: "rgba(75, 192, 192, 0.2)",
                      fill: 'start',
                    },
                    {
                      label: "최고온도(°C)",
                      data: data.map((item) => item.high_temp),
                      borderColor: "rgba(255, 99, 132, 1)",
                      backgroundColor: "rgba(255, 99, 132, 0.2)",
                      fill: 'start',
                    },
                    {
                      label: "최저온도(°C)",
                      data: data.map((item) => item.low_temp),
                      borderColor: "rgba(54, 162, 235, 1)",
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                      fill: 'start',
                    },
                  ]
                );
                setScales(
                  {
                    x: {
                      title: {
                        display: true,
                        text: "연도",
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "온도 (°C)",
                      },
                    },
                  }
                );
                setLabel(
                  ["2022년", "2023년", "2024년"]
                );
                console.log('가져온 과거 데이터:', data);  // 올바른 위치
            } catch (err) {
                console.log(err.message);
            } 
        };
        loadPastData();
    }, []);

    // 최근 3일 데이터 가져오기
    useEffect(() => {
      const loadThreeData = async () => {
          try {
              const data = await getThreeData();  // 외부 API 호출
              setThreeDataset(
                [
                  {
                    label: "평균온도(°C)",
                    backgroundColor: "rgba(0, 188, 212, 0.7)",
                    borderColor: "rgba(0, 188, 212, 1)",
                    borderWidth: 1,
                    data: data.map((item) => item.avg_temp),
                  },
                  {
                    label: "최고온도(°C)",
                    backgroundColor: "rgba(244, 67, 54, 0.7)",
                    borderColor: "rgba(244, 67, 54, 1)",
                    borderWidth: 1,
                    data: data.map((item) => item.high_temp),
                  },
                  {
                    label: "최저온도(°C)",
                    backgroundColor: "rgba(33, 150, 243, 0.7)",
                    borderColor: "rgba(33, 150, 243, 1)",
                    borderWidth: 1,
                    data: data.map((item) => item.low_temp),
                  },
                ]
              );
              setThreeScales(
                {
                  x: {
                    grid: { display: false, drawBorder: false },
                    ticks: { maxTicksLimit: 6 }, // 8일치 데이터 표시
                  },
                  y: {
                    ticks: {
                      min: 6,
                      max: 10,
                      maxTicksLimit: 5,
                      callback: function (value) {
                        return `${value}°C`;
                      },
                    },
                    grid: {
                      color: "rgb(234, 236, 244)",
                      zeroLineColor: "rgb(234, 236, 244)",
                      drawBorder: false,
                      borderDash: [2],
                      zeroLineBorderDash: [2],
                    },
                  },
                }
              );
              setThreeLabel(
                data.map((item) => item.observed_at)
              );
              console.log('가져온 3일 데이터:', data);  // 올바른 위치
          } catch (err) {
              console.log(err.message);
          } 
      };
      loadThreeData();
  }, []);

    // 날씨 데이터 가져오기
    useEffect(() => {
      const loadWeatherData = async () => {
          try {
              const data = await getWeather();  // 외부 API 호출
              console.log('가져온 날씨 데이터:', data);  // 올바른 위치
              setWeatherData(data);
          } catch (err) {
              console.log(err.message);
          } 
      };
      loadWeatherData();
  }, []);

      // 실시간 데이터 가져오기
      useEffect(() => {
        const loadLiveData = async () => {
            try {
                const data = await getLiveData();  // 외부 API 호출
                console.log('가져온 라이브브 데이터:', data);  // 올바른 위치
                setLiveData(data);
                setTableOp([
                  "완도 가교"
                ]);
                setTableTh([
                  "순번", "관측소명", "관측일시", "표층수온", "상태"
                ]);
            } catch (err) {
                console.log(err.message);
            } 
        };
        loadLiveData();
    }, []);

    return(
      <>
        <main>
          <header className="page-header page-header-dark pb-10"
            style={{
              backgroundImage: "linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(72, 187, 250, 0.2)),url('../mainImg.jpg')",
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
                      스마트 김양식
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
              {Array.isArray(news) && news.length > 0 ? (
                news.map((newsItem) => (
                  <div className="col-xl-4 mb-4" key={newsItem.news_idx}>
                  {/* 뉴스카드 */}
                  <a className="card lift h-100" href={newsItem.news_url}>
                    <div className="card-body d-flex justify-content-center flex-column">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="me-3">
                        
                          <h5>{newsItem.news_title}</h5>
                          <div className="text-muted small">
                              {newsItem.news_content}
                          </div>
                        </div>
                        <img
                          src={newsItem.news_file}
                          alt="..."
                          style={{ width: "9rem", height : "7rem", borderRadius : "5px" }}
                        />
                      </div>
                    </div>
                  </a>
                  </div>
              ))):(<p>데이터가 없습니다.</p>)}
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
                            오늘 기준 과거 온도
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
                            온도 변화 추이(예측 포함)
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
                        <AreaChart dataset = {dataset} scales = {scales} label = {label}/>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade chart-area mb-4 mb-lg-0 "
                      id="activities"
                      role="tabpanel"
                      aria-labelledby="activities-pill"
                    >
                     <BarChart dataset = {threeDataset} scales = {threeScales} label = {threeLabel}/>{/* 여기에 과거수온 차트 넣으면 됨 */}
                    </div>
                  </div>
                </div>
                  <div className="card-footer small text-muted">업데이트 일시: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-12">
              <div className="card mb-4">
                <div className="card-header">오늘의 날씨 🌤️</div>
                  <div className="card-body">
                      {weatherData.map((item, index) => (
                        <div key={index}>
                          <div className="weather-container">
                              <div className='weather-left'>
                                <img src={item.wh_icon} alt="날씨 아이콘" className='weather-icon'/>
                              </div>

                              <div className='weather-right'>
                              <p className="weather-summary">현재온도 <span className="temp-cur">{item.wh_curTp}°</span></p>
                                <p className="weather-summary">어제보다 <span className="temp-diff">{item.wh_difTp}°</span> ↑ / 맑음</p>
                                <p className="weather-details">
                                  <span>체감 <b>{item.wh_flTp}°</b></span> · 
                                  <span>습도 <b>{item.wh_humid}%</b></span> · 
                                  <span>서풍 <b>{item.wh_wdSp}m/s</b></span>
                                </p>
                                <small className="update-time">업데이트 시간: {formatDate(item.created_at)}</small>
                              </div>
                          </div>
                        </div>
                  ))}
                </div>
                <div className="card-footer small text-muted">날씨 정보는 매 1분마다 업데이트 됩니다.</div>
              </div>
            </div>

            {/* ---------실시간 표층수온 표-----------*/}
            
    <div className='col-xxl-12'>
   <div className="card mb-4">
  <div className="card-header">관측소 별 실시간 수온</div>
  <div className="card-body">
    <Table data = {liveData} option = {tableOp} th = {tableTh}/>
  </div>
</div>
</div>
            </div>
          </div>
        </main>


    </>
    );
}

const getPastData = async () => {
  try {
    const response = await axios.get("/focus/api/past/today");
    return response.data;  // 과거 데이터 반환
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw new Error('과거거 데이터를 불러오는 중 오류가 발생했습니다.');
  }
};

const getThreeData = async () => {
  try {
    const response = await axios.get("/focus/api/past/three");
    return response.data;  // 과거 데이터 반환
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw new Error('최근3일 데이터를 불러오는 중 오류가 발생했습니다.');
  }
};

const getWeather = async () => {
  try {
    const response = await axios.get("/focus/api/weather/get");
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw new Error('날씨 데이터를 불러오는 중 오류가 발생했습니다.');
  }
};

const getLiveData = async () => {
  try {
    const response = await axios.get("/focus/api/live/get");
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw new Error('실시간간 데이터를 불러오는 중 오류가 발생했습니다.');
  }
};

const formatDate = (dateString) => {
  // 문자열을 Date 객체로 변환
  const date = new Date(dateString);

  // Intl.DateTimeFormat을 사용하여 형식 변경
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,  // 12시간제 (오전/오후)
  }).format(date);
};
export default Home;