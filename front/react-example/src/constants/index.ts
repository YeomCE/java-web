import { VIEW } from "src/enums";

const AGE = 20;
const BIRTH = "940930"



//--------------------------



//# export : 해당 파일 외부에서 특정 변수 혹은 함수등을 사용할 수 있도록 내보내는 역할
//^ export 요소 ; : 파일의 요소로 import 할 수 있도록 한다.
//^                 한 파일 내에서 여러개를 export로 내보낼 수 있다.

//^                 import 하는 파일에서 받아올 때
//^                 import { 요소, 요소, ... } from '파일경로';
//^                 로 받을 수 있다.
//!                 import 할 때 내보낸 요소의 이름과 동일한 이름으로 받아야 한다.

export const NAME = "염채은"; // 파일 내에 하나의 요소로 받는다. {} 필요
export const PHONE = "01011111111"; 



//--------------------------



//^ export default 요소 ; : 파일의 기본값으로 import 할 수 있도록 한다.
//^                         한 파일 내에서 하나만 export default로 내보낼 수 있다.
//^                         import 하는 파일에서 받아올 때
//^                         import 이름 from '파일경로';
//^                         로 받을 수 있다.
//!                         default로 내보낸 요소는 받는 위치(import)에서 이름을 다르게 지정하여 받을 수 있다.
//!                         (애초에 하나만 지정할 수 있기 때문)

export default AGE;
// export default BIRTH; <- 불가능 : default는 한 파일에 하나만 export 가능하다.

export const PAGES = [
    {
        title : "Naver",
        viewValue : VIEW.NAVER
    },
    {
        title : "Kakao",
        viewValue : VIEW.KAKAO
    },
    {
        title : "ES6 + Typescript",
        viewValue : VIEW.TYPESCRIPT
    },
    {
        title : "JSX + TSX",
        viewValue : VIEW.JSXTSX
    },
    {
        title : "HOOK",
        viewValue : VIEW.HOOK
    },
    {
        title : "MUI",
        viewValue : VIEW.MUI
    },
    {
        title : "ROUTER",
        viewValue : VIEW.ROUTER
    }
]