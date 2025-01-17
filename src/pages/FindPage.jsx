import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function FindPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [cookies, , removeCookie] = useCookies(['email', 'password']);

    const [formData, setFormData] = useState({
        email: ''
    });

    const [errors, setErrors] = useState({
        emailError: ''
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // ✅ 실시간으로 값이 바뀔때
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormData((prev) => {
            const updatedFormData = { ...prev, [name]: value ?? ''};
    
            // 이메일 검사
            if (name === 'email') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    emailError: value.trim() === '' 
                        ? '이메일을 입력해주세요.'
                        : validateEmail(value) 
                            ? '' 
                            : '유효한 이메일을 입력해주세요.'
                }));
            }
            return updatedFormData;
        });
    };
    // ✅ 폼태그 제출시
    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;

        // 🔥 모든 필드 검사
        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === '') {
                valid = false;
            }
        });

        if (valid) {
            console.log('FIDN입력 정보:', formData);
            setLoading(true); // 로딩 시작
            try {
                const response = await axios.post('/focus/api/mail/send', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                console.log('서버 응답:', response.data);
                if (response.data === true) {
                    console.log('메일 전송 성공');
                    alert("임시 비밀번호 발급 완료!");
                    navigate('/login');
                    if (cookies.email) {
                        removeCookie('email', { path: '/' });
                        removeCookie('password', { path: '/' });
                    }
                } else {
                    console.log('로그인 실패');
                }
            } catch (error) {
                console.error('서버 오류:', error);
            } finally {
                setLoading(false); // 로딩 종료
            }
        } else {
            alert('모든 필드는 필수 입니다.');
        }
    };

    return (
        <div id="layoutAuthentication">
            {loading &&(
            <div className="loading-back"><Spinner className="loading-ui" animation="border" variant="primary" /></div>
            )}
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container-xl px-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                {/* Basic forgot password form */}
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header justify-content-center">
                                        <h3 className="fw-light my-4">비밀번호 재설정하기</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">
                                            이메일 주소를 입력하면 비밀번호를 재설정할 수 있는 링크를 보내드립니다.
                                        </div>
                                        {/* Forgot password form */}
                                        <form onSubmit={handleSubmit} id='findForm'>
                                            {/* Form Group (email address) */}
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">
                                                    이메일
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputEmailAddress"
                                                    type="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter email address"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                <span style={{ color: 'red' }}>{errors.emailError}</span>
                                            </div>
                                            {/* Form Group (submit options) */}
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="#" onClick={()=>{navigate('/login')}}>
                                                    로그인으로 돌아가기
                                                </a>
                                                <a className="btn btn-primary" href="#" 
                                                     onClick={(event) => {
                                                        event.preventDefault();
                                                        document.getElementById('findForm').requestSubmit();
                                                    }}
                                                >
                                                    비밀번호 초기화
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small">
                                            <a href="#" onClick={()=>{navigate('/join')}}>계정이 없으신가요?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="footer-admin mt-auto footer-dark">
                    <div className="container-xl px-4">
                        <div className="row">
                            <div className="col-md-6 small">
                                Copyright © SMHRD Team Focus 2025
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default FindPage;