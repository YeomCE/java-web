import { useEffect, useState } from "react";
import { ICommentItem, IPreviewItem } from "src/interface";
import { BOARD_LIST } from "src/mock";

//? use로 시작해야 한다.
const usePagingHook = (COUNT:number) => {

  const [boardList, setBoardList] = useState<(IPreviewItem | ICommentItem)[]>([]); //# 전체 리스트
  const [viewList, setViewList] = useState<(IPreviewItem | ICommentItem)[]>([]); //# 5개씩 보여줄 리스트
  const [pageNumber, setPageNumber] = useState<number>(1);

  //? 한 페이지에 5개의 게시물을 보여주고자 할 때
  //? 배열의 시작 인덱스   : 5 * pageNumber - 5 : 5 * (pageNumber - 1)
  //? 배열의 마지막 인덱스 : 5 * pageNumber - 1

  const onPageHandler = (page: number) => {
    setPageNumber(page);
    const tmpList: (IPreviewItem | ICommentItem)[] = [];

    const startIndex = COUNT * (page - 1);
    const endIndex = COUNT * page - 1;
    //? s -> 35 , e -> 39
    for (let index = startIndex; index <= endIndex; index++) {
      if (boardList.length < index + 1) break;
      tmpList.push(boardList[index]);
    }

      setViewList(tmpList);

  }

  // useEffect(() => {
  //   //% array.filter(요소 => 조건)
  //   //?  : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메서드

  //   //% string.inclues(검색할 문자열)
  //   //?  : 해당 문자열에서 검색할 문자열이 존재한다면 true, 아니면 false를 반환하는 메서드
  //   const tmp = !content ? BOARD_LIST : BOARD_LIST.filter((board) => board.boardTitle.includes(content as string));
  //   setBoardList(tmp);

  //   //? SELECT * FROM Board ORDER BY writeDate DESC;
  //   //? SELECT * FROM Board WHERE boardTitle LIKE "%content%" ORDER BY writeDate DESC;
    
  // }, [content])

  useEffect(() => {
    onPageHandler(pageNumber)
  }, [boardList])

  //# 외부에서 사용하기 위해서는 return으로 출력해야 한다.
  return { boardList, viewList, pageNumber, setBoardList, onPageHandler, COUNT };

}

export default usePagingHook;