//? 각종 일반 함수들 관리

//# 어떤 배열이 올지 모르기 때문에 any
export const getPageCount = (list:any[], count:number) => {
    return Math.floor((list.length -1) / count)+1
};