import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  function requestLogin() {
    fetch('https://2681-61-102-158-250.ngrok.io/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('token', result.token);
      });
  }

  const isActivateBtn = id.includes('@') && pw.length >= 5;

  return (
    <div className="loginWrap">
      <div className="loginInside">
        <div className="loginTitle">WE해요</div>
        <div className="loginForm">
          <input
            className="inputBox"
            type="text"
            placeholder="이메일"
            onChange={handleIdInput}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <div className="inqueryBox">
            <span>
              <Link to="/signup">회원가입하기</Link>
            </span>
            <span className="inquery">
              <Link to="/">아이디 찾기</Link>|<Link to="/">비밀번호 찾기</Link>
            </span>
          </div>
          <button
            disabled={!isActivateBtn}
            className={isActivateBtn ? 'btnOn' : 'btnOff'}
            onClick={requestLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
