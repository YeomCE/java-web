import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//# React를 사용하는 이유!
//# React는 Facebook(현 meta)에서 개발한 Javascript 웹 라이브러리
//? HTML은 화면에 보여지는 특정한 값이 단 하나만 변경되도라도 페이지 전체를 다시 렌더링 해야하지만
//? React는 화면을 컴포넌트 단위로 분리하여 관리하기 때문에 특정한 값이 바뀌면
//? 해당 값을 포함하고 있는 컴포넌트만 다시 렌더링 하여
//? 화면이 지속적으로 렌더링 되는 것을 방지할 수 있고
//? 필요한 부분만 렌더링하여 사용자 경험(UX)을 증진시킬 수 있다.

//^ 컴포넌트가 리랜더링되는 기준은 State와 Props!

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
