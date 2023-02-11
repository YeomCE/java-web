
// typescript의 데이터 타입
// 숫자 : number
// 문자열 : string
// 논리 : boolean

// typescript의 변수 선언 방식
// var(변수), let(변수), const(상수)

// java에서의 변수 선언
// 접근제어자 기타제어자 데이터타입 변수명

//% typescript의 변수 선언
// var 변수명; | let 변수명 : 테이터타입;

// typescript에서의 비교연산자
let a: any = 10;
let b: any = '10';

// ==, != : 값만 비교
// alert(a == b); true

// ===, !== : 값과 타입까지 비교
// alert(a === b); false


// java에서 객체 생성
// 접근제어자 기타제어자 클래스 참조변수명 = new 생성자 (인자, ...);

// typescript에서 객체 생성
// const 참조변수명 = new 생성자(인자, ...);
// const 참조변수명 = { key : value, ... };

// typescript에서 인터페이스를 선언하는 방법
// interface 인터페이스명 {필드명 : 타입; ...}
interface Human {
    name: string;
    age: number;
}

// 객체생성
const me: Human = { name: "염채은", age: 30 };

// typescript에서는 {}를 배열이 아닌 객체의 묶음으로 표현
// 이렇게 {}로 묶어서 객체를 표현하는 방식을 JSON 포멧이라고 한다.
// 배열의 묶음은 []로 표현한다.


export default a;