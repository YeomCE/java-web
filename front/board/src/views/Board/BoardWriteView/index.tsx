import { useState } from 'react'
import { Box, Divider, Fab, IconButton, Input } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';

export default function BoardWriteView() {

    const [boardTitle, setBoardTitle] = useState<string>("");
    const [boardContent, setBoardContent] = useState<string>("");

    const navigator = useNavigate();

    const onWriteHandler = () => {
        //? title과 content에 내용이 있는지 검증
        if(!boardTitle.trim() || !boardContent.trim()){
            alert("제목과 내용을 모두 입력해 주세요.")
            return;
        }
        //? 존재한다면 작성 완료
        //% User table
        //^ userEmail VARCHAR(45) PK

        //% Board table
        //^ boardNumber int AI PK
        //^ boardTitle TEXT NN
        //^ boardContent TEXT NN
        //^ writerDate DATETIME NN
        //^ writerEmail VARCHAR(45) FK NN
        //^ likeCount INT default 0
        //^ commentCount INT default 0
        //^ viewCount INT default 0

        //? INSERT INTO Board (boardTitle, boardContent, writerDate, writerEmail)
        //? VALUES (?, ?, now(), ?)

        //? Back end로 boardTitle, boardContent, writerEmail 넘겨주면 된다.
        navigator("/myPage");
    }

    return (
        <Box sx={{ p: "0px 198px", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            <Box sx={{ p: "100px 24px", backgroundColor: "#ffffff" }}>
                <Input fullWidth disableUnderline placeholder='제목을 입력해 주세요.' sx={{ fontSize: "30px", fontWeight: 500 }} onChange={(e) => setBoardTitle(e.target.value)} />
                <Divider sx={{ m: "40px 0px" }} />
                <Box sx={{ display: "flex", alignItems: "start" }} >
                    <Input fullWidth disableUnderline multiline minRows={30} placeholder='본문을 작성해 주세요.' sx={{ fontSize: "18px", fontWeight: 500 }} onChange={(e) => setBoardContent(e.target.value)} />
                    <IconButton>
                        <ImageOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Fab sx={{backgroundColor:"#e7e7e7", position:"fixed", right:"248px", bottom:"150px"}} onClick={onWriteHandler}>
                <CreateIcon/>
            </Fab>
        </Box>
    )
}
