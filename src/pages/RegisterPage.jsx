import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Footer from "../components/Footer";

function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pw: '',
        pwCheck: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        pwCheckError: ''
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // ✅ 실시간으로 값이 바뀔때
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormData((prev) => {
            const updatedFormData = { ...prev, [name]: value };
    
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
    
            // 비밀번호 검사
            if (name === 'pw' || name === 'pwCheck') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    pwCheckError: updatedFormData.pw === updatedFormData.pwCheck
                        ? ''
                        : '비밀번호가 일치하지 않습니다.'
                }));
            }
    
            return updatedFormData;
        });
    };
    // ✅ 폼태그 제출시
    const handleSubmit = async(event) => {
        setLoading(true);
        event.preventDefault();
        let valid = true;
        let check = true;
        const newErrors = {};
    
         // 🔥 모든 필드 검사
         for (const key of Object.keys(formData)) {
            if (formData[key].trim() === '') {
                valid = false;
                check = false;
                alert('모든 필드는 필수 입니다.');
                setLoading(false);
                break;  // 🔥 빈 필드가 발견되면 반복 중단
            }
        }
    
        // 🔥 비밀번호 일치 검사
        if (formData.pw !== formData.pwCheck) {
            newErrors.pwCheckError = '비밀번호가 일치하지 않습니다.';
            valid = false;
            check = false;
            setLoading(false);
            alert('모든 입력 필드를 확인하세요!');
        }
    
        setErrors(newErrors);

        if(valid){
            try {
                const checkEmail = await axios.post('/focus/api/user/check', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                console.log('아이디 중복체크 서버 응답:', checkEmail.data);
                if (checkEmail.data === true) {
                    check = false;
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        emailError: '이미 사용중인 이메일입니다.'
                    }));
                    setLoading(false);
                }
            } catch (error) {
                console.error('서버 오류:', error);
                check = false;
                setLoading(false);
            }
        }
        if (check) {
            setLoading(true);
            console.log('회원가입 정보:', formData);
            // ✅ 서버로 데이터 전송 (POST 요청)
            try {
                const response = await axios.post('/focus/api/user/join', formData, {
                    headers: {
                    'Content-Type': 'application/json'
                    },withCredentials: true});
                console.log('서버 응답:', response.data);
                if( response.data === true){
                    alert('회원가입이 완료되었습니다!');
                    console.log('회원가입 성공');
                    navigate('/login');
                }
                else{
                    console.log('회원가입 실패');
                }

            } catch (error) {
                console.error('서버 오류:', error);
        }finally { 
            if(!loading){
                setLoading(false);
            }
        }
        }
    };
    return (
        <div id="layoutAuthentication">
            {loading &&(
            <div className="loading-back"><Spinner className="loading-ui" animation="border" variant="primary" /></div>
            )}
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container-xl px-4 custom_page">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5 custom_wrap">
                                    <div className="card-header justify-content-center custom_header">
                                        <h3 className="fw-light my-4">회원가입</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} id='joinForm'>
                                            <div className="row gx-3">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputFirstName">성</label>
                                                        <input
                                                            className="form-control"
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            id="inputFirstName"
                                                            type="text"
                                                            placeholder="Enter first name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputLastName">이름</label>
                                                        <input
                                                            className="form-control"
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            id="inputLastName"
                                                            type="text"
                                                            placeholder="Enter last name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-3">
                                                <div className="col-md-6 email_input">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">이메일</label>
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        id="inputEmailAddress"
                                                        type="email"
                                                        placeholder="Enter email address"
                                                    />
                                                </div>
                                                <span style={{ color: 'red' }}>{errors.emailError}</span>
                                            </div>
                                            <div className="row gx-3">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputPassword">비밀번호</label>
                                                        <input
                                                            className="form-control"
                                                            name="pw"
                                                            value={formData.pw}
                                                            onChange={handleChange}
                                                            id="inputPassword"
                                                            type="password"
                                                            placeholder="Enter password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputConfirmPassword">비밀번호 확인</label>
                                                        <input
                                                            className="form-control"
                                                            name="pwCheck"
                                                            value={formData.pwCheck}
                                                            onChange={handleChange}
                                                            id="inputConfirmPassword"
                                                            type="password"
                                                            placeholder="Confirm password"
                                                        />
                                                        <span style={{ color: 'red' }}>{errors.pwCheckError}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="btn btn-primary btn-block"
                                                href="#"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    document.getElementById('joinForm').requestSubmit();
                                                }}
                                            >
                                                계정 생성하기
                                            </a>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small">
                                            <a href="#" onClick={()=> navigate('/login')}>이미 계정이 있으신가요?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <Footer />
            </div>
        </div>
    );
}
export default RegisterPage;
