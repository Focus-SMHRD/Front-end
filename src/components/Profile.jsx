import React from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
const navigate = useNavigate();
const gotoAccount = ()=>{
    navigate('/account')
}
const gotoProfile = ()=>{
    navigate('/profile')
}
  return (
             <>
               <Sidebar/>
                    <main>
                        <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                        <div className="container-xl px-4">
                            <div className="page-header-content">
                            <div className="row align-items-center justify-content-between pt-3">
                                <div className="col-auto mb-3">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                    <i data-feather="user" />
                                    </div>
                                    프로필 수정 / 계정 관리
                                </h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        </header>
                        {/* Main page content*/}
                        <div className="container-xl px-4 mt-4">
                        {/* Account page navigation*/}
                        <nav className="nav nav-borders">
                            <a className="nav-link active" onClick={gotoProfile}>
                            프로필
                            </a>
                            <a className="nav-link" onClick={gotoAccount}>
                            계정관리
                            </a>
                        </nav>
                        <hr className="mt-0 mb-4" />
                        <div className="row">
                            <div className="col-xl-4">
                            {/* Profile picture card*/}
                            <div className="card mb-4 mb-xl-0">
                                <div className="card-header">프로필</div>
                                <div className="card-body text-center">
                                {/* Profile picture image*/}
                                <img
                                    className="img-account-profile rounded-circle mb-2"
                                    src="assets/img/illustrations/profiles/profile-1.png"
                                    alt=""
                                />
                                {/* Profile picture help block*/}
                                <div className="small font-italic text-muted mb-4">
                                    JPG or PNG no larger than 5 MB
                                </div>
                                {/* Profile picture upload button*/}
                                <button className="btn btn-primary" type="button">
                                    프로필 수정하기
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-8">
                            {/* Account details card*/}
                            <div className="card mb-4">
                                <div className="card-header">프로필 수정</div>
                                <div className="card-body">
                                <form>
                                    {/* Form Row*/}
                                    <div className="row gx-3 mb-3">
                                    {/* Form Group (first name)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">
                                        성
                                        </label>
                                        <input
                                        className="form-control"
                                        id="inputFirstName"
                                        type="text"
                                        placeholder="성"
                                        />
                                    </div>
                                    {/* Form Group (last name)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLastName">
                                        이름
                                        </label>
                                        <input
                                        className="form-control"
                                        id="inputLastName"
                                        type="text"
                                        placeholder="이름"
                                        />
                                    </div>
                                    </div>
                                    {/* Form Row        */}
                                    
                                    {/* Form Group (email address)*/}
                                    <div className="row gx-2 mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">
                                        이메일
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            className="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-outline-primary w-100 py-3" type="button">
                                            확인
                                        </button>
                                    </div>
                                    </div>
                                    {/* Form Row*/}
                                    <div className="row gx-3 mb-3">
                                   
                                    {/* Form Group (birthday)*/}
                                    <div className="col-md-12">
                                        <label className="small mb-1" htmlFor="inputBirthday">
                                        비밀번호
                                        </label>
                                        <input
                                        className="form-control"
                                        id="inputBirthday"
                                        type="text"
                                        name="birthday"
                                        placeholder="비밀번호"
                                        />
                                    </div>
                                    </div>
                                    {/* Save changes button*/}
                                    <button className="btn btn-primary" type="button">
                                    저장하기
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

export default Profile