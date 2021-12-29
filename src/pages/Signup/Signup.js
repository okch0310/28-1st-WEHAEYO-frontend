import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(false);
  //useState 추가

  function handleIdInput(e) {
    setId(e.target.value);
    btnActivate();
  }
  function handlePwInput(e) {
    setPw(e.target.value);
    btnActivate();
  }
  function btnActivate() {
    return id.includes('@') && pw.length > 1 ? setBtn(true) : setBtn(false);
  }
  /*
  function requestLogin() {
    fetch('http://10.58.3.111:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }), //나중에 받을 값
    }).then(response => response.json()); //우리가 자바스크립트가 읽을 수 있게 변경
    // .then(result => console.log('결과: ', result)); //result 실제 데이터가 객체 형식으로 출력
  }
*/
  /*
  function requestSignUp() {
    fetch('fdf', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        phone_number: phone,
        email: id,
        password: pw,
      }),
    }).then(response=>response.json());
      .then(result => console.log('결과: ', result));
  }
  */

  return (
    <div className="login_wrap">
      <div className="login_inside">
        <div className="login_title">WE해요</div>
        <div className="loginForm">
          <input
            className="inputBox"
            type="text"
            placeholder="이름"
            onChange={e => handleIdInput(e)}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="전화번호 (ex:010-1234-5678)"
            onChange={e => handleIdInput(e)}
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
          <button
            className={btn ? 'btnOn' : 'btnOff'}
            //onClick={requestLogin}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

//조건에 따라 로그인 버튼 색깔 바뀌게 해야지
//back이랑 연결되게 준비해야지
