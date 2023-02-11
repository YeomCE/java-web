import "./App.css";
import LoginView from "./views/AuthenticationView";
import NavigationBar from "./views/NavigationBar";


function App() {
    return (
        //# 최상위 태그는 하나만 올 수 있기 때문에 무의미한 빈 태그로 감싸준다.
        <> 
            <NavigationBar />
            <LoginView />
        </>
    );


}

export default App;