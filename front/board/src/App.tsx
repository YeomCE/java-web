import "./App.css";
import { Route, Routes } from 'react-router-dom'
import LoginView from "./views/AuthenticationView";
import NavigationBar from "./views/NavigationBar";
import AuthenticationView from "./views/AuthenticationView";


//% Router 설계
//? 1. "main" path 작성 - "/"
//? 2. "auth" path 작성 - "/auth"
//? 3. "myPage" path 작성 - "/mypage"
//? 4. "boardSearch" path 작성 - "/board/search/:content"
//? 5. "boardDetail" path 작성 - "/board/detail/:boardNumber"
//? 6. "boardWrite" path 작성 - "/board/write"
//? 7. "boardUpdate" path 작성 - "/board/update/:boardNumber"

function App() {
    return (
        //# 최상위 태그는 하나만 올 수 있기 때문에 무의미한 빈 태그로 감싸준다.
        <> 
            <NavigationBar />
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/auth" element={(<AuthenticationView />)} />
                <Route path="/mypage" element={<></>} />
                <Route path="/boaer"> //# /board(중복) router 아래의 router
                    <Route path="/write" element={<></>} />
                    <Route path="/search/:content" element={<></>} />
                    <Route path="/detail/:boardNumber" element={<></>} />
                    <Route path="/update/:boardNumber" element={<></>} />
                </Route>
            </Routes>
            <LoginView />
        </>
    );


}

export default App;