import { Box, Grid, Typography, Pagination } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardListItem from 'src/components/BoardListItem'
import PopularCard from 'src/components/PopularCard'
import { usePagingHook } from 'src/hooks'
import { IPreviewItem } from 'src/interface'
import { BOARD_LIST } from 'src/mock'
import { getPageCount } from 'src/utils'

export default function SearchView() {

    const { content } = useParams();
    //#import { usePagingHook } from 'src/hooks'에서 return 한 것 불러오기
    const { viewList, pageNumber, boardList, COUNT, onPageHandler, setBoardList } = usePagingHook(5);

    // const COUNT = 5;

    // const [boardList, setBoardList]=useState<IPreviewItem[]>([]);
    // const [viewList, setViewList] = useState<IPreviewItem[]>([]);
    // const [pageNumber, setPageNumber] = useState<number>(1);

    // const onPageHandler = (page:number) => {
    //     setPageNumber(page);

    //     const tmpList:IPreviewItem[] =[];
    //     const startIndex  = COUNT * (page - 1);
    //     const endIndex = COUNT * page -1;

    //     for(let index = startIndex; index <= endIndex; index++){
    //         //# index 범위 초과를 막기 위해
    //         if(boardList.length < index + 1) break;
    //         tmpList.push(boardList[index]);
    //     }
    //     setViewList(tmpList);
    // }

    useEffect(()=>{
        //% array.filter(요소 => 조건)
        //?  : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메서드

        //% string.inclues(검색할 문자열)
        //?  : 해당 문자열에서 검색할 문자열이 존재한다면 true, 아니면 false를 반환하는 메서드
        const tmp = BOARD_LIST.filter((board)=>board.boardTitle.includes(content as string))//# as 타입 : 해당 타입으로 변환  *//
        setBoardList(tmp);
    },[content])

    // useEffect(()=>{
    //     onPageHandler(pageNumber);
    // },[boardList]);

    return (
        <Box sx={{ p: "40px 120px", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            <Box sx={{ fontSize: "24px", fontWeight: 500 }}>
                {boardList.length === 0 &&
                    <Box>
                        <Box component='strong'>{content}</Box>
                        <Typography component='span' sx={{ fontSize: "24px", fontWeight: 500, opacity: 0.7 }}>에 대한 검색 결과가 없습니다.</Typography>
                    </Box>}
                {boardList.length > 0 &&
                    <Box>
                        <Box component='strong'>{content}</Box>
                        <Typography component='span' sx={{ fontSize: "24px", fontWeight: 500, opacity: 0.7 }}>에 대한 검색 결과입니다.</Typography>
                        <Box component='strong'>{boardList.length}</Box>
                    </Box>
                }
            </Box>

            <Box sx={{ pt: "20px", pb: "80px" }}>
                <Grid container spacing={3} >
                    <Grid item sm={12} md={8}>
                        <Stack spacing={2}>
                            {viewList. length ===0 ? (<Box sx={{height:"416px", display:"flex", justifyContent:"center", alignItems:"center"}}><Typography sx={{fontSize:"24px", fontWeight:500, color:"rgba(0,0,0,0.4)"}}>검색 결과가 없습니다.</Typography></Box>) : viewList.map((boardItem) => (<BoardListItem item={boardItem as IPreviewItem} />))}
                        </Stack>

                    </Grid>
                    <Grid item sm={12} md={4}>
                        <PopularCard title="연관검색어" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination page={pageNumber} count={getPageCount(boardList, COUNT)} onChange={(event, value) => onPageHandler(value)}></Pagination>
            </Box>
        </Box>
    )
}
