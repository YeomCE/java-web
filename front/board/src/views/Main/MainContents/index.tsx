import { Box, Grid, Pagination, Typography, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import BoardListItem from 'src/components/BoardListItem'
import PopularCard from 'src/components/PopularCard'
import { usePagingHook } from 'src/hooks'
import { IPreviewItem } from 'src/interface'
import { BOARD_LIST } from 'src/mock'
import { getPageCount } from 'src/utils'

export default function MainContents() {

  //#import { usePagingHook } from 'src/hooks'에서 return 한 것 불러오기
  const{viewList, pageNumber, boardList, setBoardList, COUNT, onPageHandler} = usePagingHook(5);

  useEffect(() => {
    setBoardList(BOARD_LIST);
  },[])
  

  return (
    <Box sx={{ p : "40px 120px", backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
        <Box>
          <Typography sx ={{ fontSize:"20px", fontWeight:500 }}>최신 게시물</Typography>
        </Box>

        <Box sx={{pt:"20px", pb:"80px"}}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={8}>
              <Stack spacing={2}>
              {viewList.map((boardItem) => (<BoardListItem item = {boardItem as IPreviewItem}/>))}
              </Stack>
            </Grid>
            <Grid item sm={12} md={4}>
              <PopularCard title="인기 검색어"/>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center"}}>
        <Pagination page={pageNumber} count={getPageCount(boardList, COUNT)} onChange={(event, value) => onPageHandler(value)}/>
          {/* //# pagenation : 리스트 개수 -1한 값에 5을 나누어 정수만 추출 +1 */}
        </Box>
    </Box>
  )
}
