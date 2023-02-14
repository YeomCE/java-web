import { useState } from 'react'
import KakaoSignIn from './views/KakaoSignIn';
import NaverSignIn from './views/NaverSignIn'
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import Es6TypeScript from './views/Es6TypeScript';
import JsxTsx from './views/JsxTsx';
import { VIEW } from './enums';
import Hook from './views/Hook';
import Mui from './views/Mui';
import RouterView from './views/RouterView';

import { Route, Routes } from 'react-router-dom'
import Typography from '@mui/material/Typography';


export default function App() {
  const [view, setView] = useState<string>("");
  return (
    <div>
      <MenuAppBar />
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
            {/* {view} */}
            <Routes>
              <Route path={VIEW.NAVER} element={(<NaverSignIn />)}></Route>
              <Route path={VIEW.KAKAO} element={(<KakaoSignIn />)}></Route>
              <Route path={VIEW.TYPESCRIPT} element={(<Es6TypeScript />)}></Route>
              <Route path={VIEW.JSXTSX} element={(<JsxTsx />)}></Route>
              <Route path={VIEW.HOOK} element={(<Hook />)}></Route>
              <Route path={VIEW.MUI} element={(<Mui />)}></Route>
              <Route path={"router/:pathValue"} element={(<RouterView />)}></Route>
              {/* <Route path={VIEW.ROUTER} element={(<RouterView />)}></Route> */}
              <Route path="*" element = {(<Typography variant = "h3">404</Typography>)}></Route>
            </Routes>
        {/* { view === VIEW.NAVER ? (<NaverSignIn />) : 
          view === VIEW.KAKAO ? (<KakaoSignIn />) : 
          view === VIEW.TYPESCRIPT ? (<Es6TypeScript />) : 
          view === VIEW.JSXTSX ? (<JsxTsx />) : 
          view === VIEW.HOOK ? (<Hook />) : 
          view === VIEW.MUI ? (<Mui />) : 
          view === VIEW.ROUTER ? (<RouterView />) : (<></>)} */}
      </div>
    </div>
  );
}
