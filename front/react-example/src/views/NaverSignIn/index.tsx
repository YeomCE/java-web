//? 파일명이 index일 경우 해당 파일이 속해있는 폴더명으로 import가 가능하다.
import InputGroup from "src/components/InputGroup";
import BirthInputGroup from "src/components/BirthInputGroup";
import ButtonGroup from "src/components/ButtonGroup";
import "./style.css"

// java method 생성
// 접근제어자 기타제어자 반환타입 메서드명(파라미터) {}

//typescript method 생성
// 첫번째 방법 : funtion 메서드명(파라미터){}

// 두번째 방법 : 자바스트립트. 타입스크립트는 메서드를 변수로 인식
//                const 메서드명 = (파라미터) => {}

// 첫번째 방법 
//! React Component는 TypeScript가 기반
function NaverSignIn() {
    //! return은 하나의 태그만 올 수 있다.
    //? 확장자가 .jsx 이거나 .tsx일 때 함수형 컴포넌트의 return에서 ()로 html 태그를 사용할 수 있다.
    //? return의 ()안에서 typescript 문법을 사용하고 싶다면 {}안에 작성한다.

    /* https://nid.naver.com/user2/V2Join?token_sjoin=f6F5bkH54rXHCGe4&langSelect=ko_KR&termsService=on&termsPrivacy=on&termsLocation=Y */
    /* 레이아웃 구성 */
    return (
        <div>

            <div>
                {/* 로고 레이아웃 */}
                <div id="logo-container">
                    <a id="logo" href="https://naver.com">
                        NAVER
                    </a>
                </div>
                {/* 컨테이너 레이아웃 */}
                <div id="container">
                    {/*//^ 함수형 컴포넌트에 매개변수를 전달할 때는 */}
                    {/*//^ html 태그에서 속성 값을 지정하는 방식과 동일하게 사용한다. */}
                    {/* 아이디 레이아웃 */}
                    <InputGroup label="아이디" type="text" />

                    {/* 비밀번호 레이아웃 */}
                    <InputGroup label="비밀번호" type="password" />

                    {/* 비밀번호 확인 레이아웃 */}
                    <InputGroup label="비밀번호 확인" type="password" />

                    {/* 이름 레이아웃 */}
                    <InputGroup label="이름" type="text" />

                    {/* 생년월일 레이아웃 */}
                    <BirthInputGroup />

                    {/* 버튼 레이아웃 */}
                    <ButtonGroup />
                </div>
            </div>
        </div>


    );
}

const Description = () => {

    //^ {} 밑 공간은 typescript를 인식
    //^ () 밑 공간은 html 태그만 인식
    //^ return () 안에서 typescript를 사용하려면 {}로 해당 구문을 감싸야 한다.

    //^ {} 안에서 html 태그를 사용하려면 return ()의 괄호 안에 작성한다.
    return (
        
        <div></div>
    );
}

export default NaverSignIn;
