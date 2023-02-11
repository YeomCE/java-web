import { useState } from 'react'
import { Box, Grid, Typography, Card, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, } from '@mui/material';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';
import LoginCardView from './LoginCardView';
import SighUpCardView from './SighUpCardView';

//? Box 컴포넌트  : mui에서 공간을 할당하는 모든 태그를 포함하고 있다.
//? Grid 컴포넌트 : mui에서 공간을 12등분 하여 가로 사이즈에 따라 반응형 웹 개발을 지원한다.
//? Typography 컴포넌트 : mui에서 글자를 출력하는 모든 태그를 포함

//# 컴포넌트 return 안에서 논리연산자와 삼항연산자를 조건문처럼 사용할 때
//? 논리 연산자 (&&) : if문만 쓸 때 
//? 삼항 연산자(? :) : if - else  쓸 때

export default function AuthenticationView() {

    const [loginView, setLoginView] = useState<boolean>(true);

    return (
        <Box sx={{ pr: "120px", pl: "120px" }}>
            {/* //? container : 그리드 최상위 */}
            {/* //? item : 그리드 내의 아이템 */}
            <Grid container spacing={2}>
                <Grid item lg={7} sm={12}>
                    <Box sx={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                        <ContentPasteTwoToneIcon sx={{ fontSize: 40 }} />
                        <Typography variant='h4'>환영합니다.</Typography>
                        <Typography variant='h4'>HOONS BOARD입니다.</Typography>
                    </Box>
                </Grid>
                <Grid item lg={5} sm={12}>
                    <Card sx={{ height: "630px", mt: "100px", mb: "80px", pt: "50px", pb: "30px", pl: "50px", pr: "50px" }}>
                        {loginView ? (<LoginCardView setLoginView={setLoginView} />) : (<SighUpCardView setLoginView={setLoginView} />)}
                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}
