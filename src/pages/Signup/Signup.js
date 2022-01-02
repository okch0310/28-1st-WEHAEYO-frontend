import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  //useState 추가

  function handleIdInput(e) {
    setId(e.target.value);
    btnActivate();
  }
  function handlePwInput(e) {
    setPw(e.target.value);
    btnActivate();
  }

  function handlePhoneInput(e) {
    setPhone(e.target.value);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function btnActivate() {
    return id.includes('@') && pw.length > 1 ? setBtn(true) : setBtn(false);
  }

  function requestSignUp() {
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
      .then(result => console.log('결과: ', result));
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
            onChange={e => handleNameInput(e)}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="전화번호 (ex:010-1234-5678)"
            onChange={e => handlePhoneInput(e)}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="이메일"
            onChange={e => handleIdInput(e)}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="비밀번호"
            onChange={e => handlePwInput(e)}
          />

          <div className="searchBoxWrap">
            <span>
              <Link to="/login">로그인 하기</Link>
            </span>
            <span className="searchBox">
              <Link to="/">아이디 찾기</Link>|<Link to="/">비밀번호 찾기</Link>
            </span>
          </div>
          <button className={btn ? 'btnOn' : 'btnOff'} onClick={requestSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
