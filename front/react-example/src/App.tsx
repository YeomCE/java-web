import { useState } from 'react'
import KakaoSignIn from './views/KakaoSignIn';
import NaverSignIn from './views/NaverSignIn'
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import Es6TypeScript from './views/Es6TypeScript';
import JsxTsx from './views/JsxTsx';
import { VIEW } from './enums';
import Hook from './views/Hook';



export default function App() {
  const [view, setView] = useState<string>("");
  return (
    <div>
      <MenuAppBar setView={setView} />
      <div>
        {/* {view === 'naverSignIn' && (<NaverSignIn />)} */}
        {/*
              //# 삼항 비교 연산자
              //? 조건에 따라 참일 때의 결과값과 거짓일 때의 결과값을 지정하여 해당하는 경우의 값을 반환
              //? 조건 ? 참일 때의 결과값 : 거짓일 때의 결과값
            */}
        {/* lf (조건) {} else{} */}
        {/* {view === "NaverSignIn" ? (<NaverSignIn />) : (<KakaoSignIn />)} */}

        {/*
              //^ <></> : 아무 의미 없는 빈 태그
            */}
            {view}
        { view === VIEW.NAVER ? (<NaverSignIn />) : 
          view === VIEW.KAKAO ? (<KakaoSignIn />) : 
          view === VIEW.TYPESCRIPT ? (<Es6TypeScript />) : 
          view === VIEW.JSXTSX ? (<JsxTsx />) : 
          view === VIEW.HOOK ? (<Hook />) : 
          view === VIEW.MUI ? (<></>) : (<></>)}
      </div>
    </div>
  );
}
