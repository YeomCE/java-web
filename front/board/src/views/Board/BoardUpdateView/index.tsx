import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider, Fab, IconButton, Input } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { BOARD_LIST } from 'src/mock';
import { useUserStore } from 'src/stores';

export default function BoardUpdateView() {

  const [boardTitle, setBoardTitle] = useState<string>("");
  const [boardContent, setBoardContent] = useState<string>("");
  const { user } = useUserStore();

  const { boardNumber } = useParams();
  const navigator = useNavigate();

  const onUpdateHandler = () => {
    if (!boardTitle.trim() || !boardContent.trim()) {
      alert("모든 내용을 입력해 주세요.");
      return;
    }
    //? 업데이트 기능 수행

    //% Board table
    //^ boardNumber int AI PK
    //^ boardTitle TEXT NN
    //^ boardContent TEXT NN
    //^ writerDate DATETIME NN
    //^ writerEmail VARCHAR(45) FK NN
    //^ likeCount INT default 0
    //^ commentCount INT default 0
    //^ viewCount INT default 0

    //? User 테이블에서 해당 유저가 있는지 확인
    //? 있다면 SELECT하여 board 테이블에서 해당 board 레코드가 있는지 확인
    //? board 레코드의 작성자가 userEmail과 동일한지 확인

    //? UPDATE Board SET boardTitle = ? , boardContent = ? WHERE boardNumber = ?

    //? Back end로 boardTitle, boardContent, boardNumber 넘겨주면 된다.
    navigator("/myPage")
  }

  useEffect(() => {
    //? 정상적이지 않은 경오로 접근을 시도했을 때 main 화면으로 돌려보낸다.
    if (!boardNumber) {
      navigator("/");
      return;
    }

    //? pathVariable로 전달받은 boardNumber에 해당하는 boacr 데이터를 검색한다.
    const board = BOARD_LIST.find((item) => item.boardNumber === parseInt(boardNumber)); //# parseInt : string을 number로 변환

    //? 검색 결과가 존재하지 않으면 main 화면으로 돌려보낸다.
    if (!board) {
      navigator("/");
      return;
    }

    //? 현재 로그인 되어 있는지 검증
    if (!user) {
      navigator("/auth");
      return;
    }

    //? 검색된 board의 작성자가 로그인한 user와 일치하는지 검증
    if (board.writerNickname !== user.nickName) {
      navigator("/");
      return;
    }

    setBoardTitle(board.boardTitle);
    setBoardContent(board.boardContent);

  }, [])

  // 일반적으로 수정 페이지는 작성 페이지와 거의 같다.
  //? 
  return (
    <Box sx={{ p: "0px 198px", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      <Box sx={{ p: "100px 24px", backgroundColor: "#ffffff" }}>
        <Input fullWidth disableUnderline placeholder='제목을 입력해 주세요.' sx={{ fontSize: "30px", fontWeight: 500 }} value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />
        <Divider sx={{ m: "40px 0px" }} />
        <Box sx={{ display: "flex", alignItems: "start" }} >
          <Input fullWidth disableUnderline multiline minRows={30} placeholder='본문을 작성해 주세요.' sx={{ fontSize: "18px", fontWeight: 500 }} defaultValue={boardContent} onChange={(e) => setBoardContent(e.target.value)} />
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Fab sx={{ backgroundColor: "#e7e7e7", position: "fixed", right: "248px", bottom: "150px" }} onClick={onUpdateHandler}>
        <CreateIcon />
      </Fab>
    </Box>
  )
}
