import { useState, useEffect } from 'react'

//% Hook -> 함수형 컴포넌트에서만 동작
//? state와 React 기능을 관리하는 메서드

//^ Hook 함수의 규칙
//? 1. 무조건 함수형 컴포넌트 내에서만 호출할 수 있다.
//? 2. 무조건 함수형 컴포넌트 최상위단에서만 호출할 수 있다.
//? 3. 조건부로 호출할 수 없다.

//% 함수형 컴포넌트 외부에서 Hook 함수를 사용한 경우
//? React Hooks must be called in a React function component or a custom React Hook function
//? 에러 반환
//# const [extState, setExtState] = useState<Boolean>(false);

export default function Hook() {

  //% 함수형 컴포넌트의 자손 함수에서 사용한 경우
  //# const fn = () => {
  //#   const [intState, setIntState] = useState<Boolean>(false);
  //# }


  //% 1. useState()
  //? React 컴포넌트 내에서 state를 추적
  //? state를 만들어주는 메서드
  //? import { usestate } from "react";

  //? State 선언
  //? const [상태명, set메서드] = useState<데이터타입>(초기값);
  //? 여기서 지정한 State가 변경되면 해당 State를 사용하고 있는 컴포넌트가 리랜더링 된다.
  const [state, setState] = useState<boolean>(false);

  //? State를 변경할 때는 state를 상수로 선언하기 때문에 setState로 변경해줘야 한다.
  let [state2, setState2] = useState<boolean>(false);
  //? 위처럼 state를 변수로 선언하고 해당 변수를 대입연산자로 변경하더라도
  //? 리랜더링 되지 않는다.(반드시 set메서드로 변경해줘야 한다.)

  const [objectState, setObjectState] = useState<number[]>([1]);
  const onClickHandler = () => {
    //^ 주의할 점
    //^ 배열 혹은 객체를 가지고 있는 참조변수의 경우
    //^ 실제 값을 변경하고 다시 set메서드로 적용시켜준다 하더라도
    //^ 참조변수가 가지고 있는 주소는 변경되지 않기 때문에
    //^ state가 변경되었다고 인식하지 못해서
    //^ 랜더링이 다시 되지 않는다.
    objectState.push(1)

    //^ 새로운 배열 혹은 객체를 생성하여 새로운 주소를 할당한 다음
    //^ 새로운 주소를 가지고 있는 참조 변수로 변경해야 리랜더링이 된다.
    const tmp = objectState.map((item) => item);
    setObjectState(tmp);
  }

  const [num, setNum] = useState<number>(1);

  const onPlusHandler = () => {
    //^ 상태를 set메서드로 변경시키더라도 바로 상태가 변경되는 것은 아니다.
    //^ 해당 호출 혹은 함수가 종료되고 리랜더링 된 후 변경된다.
    setNum(num + 1);
    //^ 그렇기 때문에 아래와 같이 변경 후에 변경한 값으로 작업을 하려고 해도 원래 저장되어 있는 값으로 작업이 진행된다.
    alert(num)
    //! 이런 문제를 해결하는 방법
    //^ 1. 바로 아래의 useEffect 처럼 사용
    //^ 2. 변경 작업을 따로 저장한 후 그 저장한 값으로 작업을 진행하고 그 값으로 state를 변경한다.
    //# const onPlusHandler = () => {
    //#   const tmp = num + 1
    //#   setNum(tmp + 1);
    //#   alert(tmp)
    //# }
  }
    useEffect(() => {
      alert(num);
    }, [num])

    //% 2. useEffect
    //? 특정 상태값이 변경되는지 추적하고 있다가
    //? 변경이 이루어지면 실행할 코드블록


    //? 함수형 컴포넌트 최상위에서 함수를 호출하면
    //? 매 랜더링 시 호출된다.
    //? 특정 상태가 변경되었을 때만 실행시키는 동작을 수행할 수 없다.
    // console.log(objectState);

    //? 호출방법
    //? useEffect(특정 상태가 변경되었을 때 실행되는 함수, [추적할 상태의 배열]);
    useEffect(() => {
      console.log(objectState)
    }, [objectState]); //#objectState가 바뀔 때만 실행될 것

    let loaded = false;


    //^ scope하는 state를 지정하지 않으면 해당 함수는 로드 시에만 호출된다.
    //^ 단 react 컴포넌트 생명 주기 상 useEffect는 첫 로드 시 두 번 실행된다.
    useEffect(() => {
      //! 첫 로드 시 두 번 실행되는 것을 방지하는 방법
      //^ 특정 변수를 지정하여 그 값이 참일 때만 실행하도록 하고
      //^ 실행 후에는 참인 상태를 거짓의 상태로 변경해준다.
      if (!loaded) {
        console.log("로드 될 때만 실행되는 함수!")
        loaded = true;
      }
    }, []);




    return (
      <div>
        <div>{state ? "true" : "false"}</div>
        <button onClick={() => setState(!setState)}>버튼!</button>
        {objectState.map((num) => (
          <div>{num}</div>
        ))}
        <button onClick={onClickHandler}>Add number!</button>
        <div>{num}</div>
        <button onClick={onPlusHandler}>{"+"}</button>
      </div>
    )
  
}
