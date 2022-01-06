import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  function handlePhoneInput(e) {
    setPhone(e.target.value);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }

  const isActivateBtn = id.includes('@') && pw.length > 5;

  function requestSignUp() {
    setId('');
    setPw('');
    setPhone('');
    setName('');

    fetch('https://2681-61-102-158-250.ngrok.io/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        phone_number: phone,
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => alert('결과: ', result));
  }

  return (
    <div className="loginWrap">
      <div className="loginInside">
        <div className="loginTitle">WE해요</div>
        <div className="loginForm">
          <input
            className="inputBox"
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleNameInput}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="이메일"
            value={id}
            onChange={handleIdInput}
          />
          <input
            className="inputBox"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            value={pw}
          />

          <div className="searchBoxWrap">
            <span>
              <Link to="/login">로그인 하기</Link>
            </span>
            <span className="searchBox">
              <Link to="/">아이디 찾기</Link>|<Link to="/">비밀번호 찾기</Link>
            </span>
          </div>
          <button
            className={isActivateBtn ? 'btnOn' : 'btnOff'}
            onClick={requestSignUp}
            disabled={!isActivateBtn}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
