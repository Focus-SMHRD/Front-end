import React, {useState} from 'react'
import Sidebar from './Sidebar'
import data from "../data"
const Fishfarm = () => {
//양식장 이름 저장한 값을 왼쪽 사이드바에 표시해야되는 기능 개발해야함.
const [input, setInput] = useState(''); //내가 입력한 값
const [data2, setData2] = useState(data)
  return (
    <>
    <Sidebar/>
      <main>
        <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
          <div className="container-xl px-4 fish_header">
            <div className="page-header-content">
              <div className="row align-items-center justify-content-between pt-3">
                <div className="col-auto mb-3">
                  <h1 className="page-header-title">
                    <div className="page-header-icon">
                      <i data-feather="user" />
                    </div>
                    양식장 추가
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main page content*/}
        <div className="container-xl px-4 mt-4">
          {/* Account page navigation*/}
          {/* <nav className="nav nav-borders">
            <a className="nav-link active ms-0" href="account-profile.html">
              새 양식장 추가
            </a>
          </nav>

        <hr className="mt-0 mb-4" /> */}
          <div className="row one">
            
            <div className="col-xl-12 two" >
              {/* Account details card*/}
              <div className="card mb-4 three">
                <div className="card-header">양식장 추가 / 센서 등록</div>
                <div className="card-body">
                  <form>
                    {/* Form Group (username)*/}
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputUsername">
                        양식장 이름
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        placeholder="양식장 이름을 입력해주세요."
                        onChange={(e)=>{setInput(e.target.value); console.log(input);}}
                      />
                    </div>
                    {/* Form Row        */}
                    {/* Form Group (location)*/}
                    <div className='mb-3'>
                      <div className="col-md-12">
                        <label className="small mb-1" htmlFor="inputLocation">
                          양식장 장소
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          placeholder="양식장 장소를 입력해주세요."
                        />
                      </div>
                    </div>
                    <div className='mb-3'>
                      {/* Form Group (organization name)*/}
                      <div className="col-md-12">
                        <label className="small mb-1" htmlFor="inputOrgName">
                          센서이름
                        </label>
                        <input
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          placeholder="센서 이름을 입력해주세요."
                        />
                      </div>
                     </div>
                    
                    {/* Form Row*/}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (phone number)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">
                          센서 설치장소
                        </label>
                        <input
                          className="form-control"
                          id="inputPhone"
                          type="tel"
                          placeholder="설치장소를 입력해주세요"
                        />
                      </div>
                      {/* Form Group (birthday)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">
                          모델명
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="text"
                          name="birthday"
                          placeholder="모델명을 입력해주세요"
                        />
                      </div>
                      
                    </div>
                    {/* Form Group (email address)*/}
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                      사용자 이메일
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    {/* Save changes button*/}
                    <button className="btn btn-primary px-5" type="button"
                    onClick={()=>{setData2([...data2, input]); console.log(data2);}}>
                     추가하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</>

  )
}

export default Fishfarm