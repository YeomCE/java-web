import React from 'react'

//% JSX, TSX
//? JSX : Javascript 기반
//? TSX : Typescript 기반

//? TSX
//? - TypeScript XML
//^ XML : eXtensible Markup Language 확장가능한 마크업 언어
//? - React에서 Typescript로 HTML을 작성할 수 있도록 하는 파일

export default function JsxTsx() {

    const text = "JSX + TSX";

    const trueFlag = true;
    const falseFlag = false;

    const numberArray = [1, 2, 3, 4, 5];


    //% 1. tsx 파일에서 작성된 typescript 컴포넌트 함수는
    //% return의 ()안에 html 태그를 포함할 수 있다.
    //? typescript return에서 html을 표기하려면 ()로 묶어줘야 한다.
    //^ return의 () 안에는 최상의 부모 태그가 반드시 1개만 있어야 한다.
    //! 0개도 안됨!

    //? return () 안에서 Typescript를 사용하려면 {}로 묶어서 작성해야 한다.
    //^ {}를 써서 Typescript를 작성하고 싶다면 필수적으로 html 태그 안에 있어야 한다.

    //? return안의 {} 안에서 다시 html을 표기하려면 ()로 반환해야 한다.

    //% 2. return ()안에서는 제어문을 사용할 수 없다.
    //? if 문 / for 문을 사용할 수 없다.
    //? 변수와 연산자만 사용 가능하다.

    //? if문 대체 : 논리연산자 / 삼항연산자
    //? for 문 대체 : 배열 객체의 map 메서드 사용

    //% 3. return () 안에서는 html 주석이 사용되지 않는다.
    //? {}를 사용하여 Typescript 주석을 사용해야 한다.

    //% 4. TSX는 xml 기반으로 HTML을 표기하기 때문에 문법이 정확해야 한다.
    //? 모든 태그를 다 닫아줘야 하며 html 요소를 소문자로 작성해야 한다.
    //? html 속성이 대소문자를 구분한다.

    const TRUE_TEXT = "true";

    return (
        <div>
            {trueFlag && (<div>{TRUE_TEXT}</div>)}
            {falseFlag && (<div>false</div>)}
            {trueFlag || (<div>or True</div>)}
            {falseFlag || (<div>or False</div>)}
            {trueFlag ? (<div>true</div>) : (<div>false</div>)}
            {numberArray.map((number) => (<div>{number}</div>))}
        </div>

    )
}
