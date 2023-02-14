import React, { useState } from 'react'

import { IconButtonProps } from '@mui/material/IconButton';
import { createTheme, styled } from '@mui/material/styles';

import { Box, Button, IconButton, Grid, TextField } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import { ThemeProvider } from '@emotion/react';



//% MUI
//? Matertial User Interface
//? 구글의 머터리얼 디자인을 구현하는 오픈 소스 '리액트 컴포넌트' 라이브러리
//? 인스톨 즉시 배포 환경에서 사용할 수 있는 사전 구축된 컴포넌트 모음
//? 디자인적으로 아름답고 다양한 사용자 정의 옵션을 제공

//! npm install @mui/material @emotion/react @emotion/styled 추가 필요

//% Mui styled Method
//? mui component들의 style을 지정해주는 메서드
const CustomIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: "#99ad12"
}));
//% Mui CreateTheme Method
//? 새로운 mui theme를 생성하는 메서드
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff00"
    },
    secondary: {
      main: "#00ad99"
    }
  }
});
const CustomIconButton2 = styled(IconButton)<IconButtonProps>(() => ({
  color: theme.palette.secondary.main
}));


export default function Mui() {

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  return (
    <>
      {/*
    //% Button Component
    //? import { Button } from '@mui/material'
    //? import  Button  from '@mui/material/Button'
    //^ Props
    //^ 1. variant : 버튼의 형태 ("text, "contained", "outlined")
    //? text : 문자로만 표기한 버튼
    //? contained : 배경 색이 지정된 버튼
    //? outline : 테두리만 지정된 버튼
     */}
      <Button variant='text'>text Button</Button>
      <Button variant='contained'>contained Button</Button>
      <Button variant='outlined'>outlined Button</Button>
      {/*
    //? Mui의 Button Component는 기본적으로 inline 방식
    //? fullwidth로 Button Component를 block 형태로 지정할 수 있다. (가로 100%)
     */}
      <Button fullWidth>fullWidth Button</Button>


      {/*


      //^ disable
      //? 버튼을 사용하지 못하도록 막아주는 Props
     */}
      <Button variant='contained' disabled={true}>disabled true Button</Button>
      <Button variant='contained' disabled={false}>disabled false Button</Button>

      <Button variant='contained' disabled={buttonDisabled} fullWidth>disabled Button</Button>
      <Button onClick={() => setButtonDisabled(!buttonDisabled)}>Click!</Button>

      {/*


      //^ size
      //? Button size를 mui에서 지정되어 있는 사이즈로 지정할 때
      //? small, medium, large
      */}
      <Button variant='contained' size='small'>small Button</Button>
      <Button variant='contained' size='medium'>medium Button</Button>
      <Button variant='contained' size='large'>large Button</Button>


      {/*
        //^ Icon (startIcon, endIcon)
        //? Button 내부에서 시작 혹은 종료 지점에 Icon을 추가하고 싶을 때 지정
        //? 값 : Icon Component
        //! npm install @mui/icons-material을 추가해야 MUI ICON 사용 사능
      */}
      <Button variant='outlined' startIcon={(<DeleteIcon />)}>Delete</Button>
      <Button variant='contained' endIcon={(<SearchOutlinedIcon />)}>Search</Button>


      {/* 
      //% IconButton Component
        //? Button 을 Icon으로만 구성하고자 할 때 사용하는 컴포넌트
        //? Button Component의 모든 기능을 동일하게 사용 가능
        //? 자식 컴포넌트에 Icon Component가 와야한다.
        //? import {IconButton} from '@mui/material';
        //? import IconButton from '@mui/material/IconButton';
      */}
      <IconButton>
        <AlarmOutlinedIcon />
      </IconButton>


      {/*
     //^ Color
     //? default, primary, success ... 
    */}
      <IconButton color="primary">
        <AlarmOutlinedIcon />
      </IconButton>
      <IconButton color="error">
        <AlarmOutlinedIcon />
      </IconButton>


      {/*
      //^ Color Customization
    */}
      <CustomIconButton>
        <AlarmOutlinedIcon />
      </CustomIconButton>

      <CustomIconButton2>
        <AlarmOutlinedIcon />
      </CustomIconButton2>

      {/* 
        //% ThemeProvider Component
        //? createTheme 메서드로 생성한 커스텀 테마를
        //? 해당 컴포넌트 자손들에게 모두 적용되도록 하는 컴포넌트
      */}
      <ThemeProvider theme={theme}>
        <IconButton color="primary">
          <AlarmOutlinedIcon />
        </IconButton>
      </ThemeProvider>
      <br />
      <br />
      <br />


      {/*
      //% TextField Component
      //? import {TextField} from "@mui/material";
      //? import TextField from "@mui/material/TextField";
      //? HTML의 input 태그를 응용하여 조금 더 수월하게 사용할 수 있도록 한 컴포넌트
      //^ Props
      //^ 1. variant
      //? 값 : "outlined", "filled", "standard"
      */}
      <TextField variant="outlined" />
      <TextField variant="filled" />
      <TextField variant="standard" />


      {/*
      //^ 2. label
      //? 해당 TextFiled의 제목을 나타낸다.
      //? 해당 TextFiled의 Placeholder의 역할을 할 수 있다.
      */}
      <TextField label="Email" variant='outlined' />


      {/*
      //^ 3. defaultValue
      //? 기본 값 지정
      
      //^ 4. required (true / false)
      //? 해당 Component에 필수로 값을 입력해야 한다.

      //^ 5. disabled (true / false)
      //? 해당 Component를 사용 불가능으로 만든다.

      //^ 6. helperText
      //? 해당 Component 아래에 설명을 추가할 수 있다.
      */}
      <TextField variant= "outlined" label="default Value" defaultValue = "Default" />
      <TextField variant= "outlined" label="required" required = {true} />
      <TextField variant= "outlined" label="disabled" disabled = {true} />
      <TextField variant= "outlined" label="helperText" helperText = "This is HelperText" />



      {/*
        //% Box Component
        //? HTML의 div 태그와 같다.
        //? import { Box } from "@mui/material"
        //? import Box from "@mui/material/Box"
        //^ Props
        //^ 1. component
        //? Box Component의 속성을 변경 - 모든 html 태그로 변경할 수 있다.
      */}
      <Box component = "h3">Hello MUI</Box>
      <Box component = "a" href='http: //naver.com'>NAVER</Box>





      {/*
      //%  Grid Component
      //? 공간은 12등분하여 자식 item을 구분
      //? 반응형 웹 구현에 기준
      //? import { Grid } from '@mui/material'
      //? import Grid from '@mui/material/Grid'
      //^Props
      //^ 1. container
      //? 해당 Component의 공간을 12등분으로 나눠준다.
      
      //^ 2. item
      //? 12등분으로 나눠진 공간에 배치될 요소 
      
      //^ 3. spacing
      //? item 간의 간격 지정 : container로 지정된 Grid Component에서 사용
      
      //^ 4. xs, sm, md, lg, xl
      //? xs - 576px > width
      //? sm - 576px <= width
      //? md - 768px <= width
      //? lg - 992px <= width
      //? xl - 1200px <= width
    */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} xl={4}>
          <Box>
            <Box sx={{ height: "100px", backgroundColor: "#333333" }}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box>
            <Box sx={{ height: "100px", backgroundColor: "#444444" }}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} xl={4}>
          <Box>
            <Box sx={{ height: "100px", backgroundColor: "#999999" }}></Box>
          </Box>
        </Grid>
      </Grid>





    </>
  )
}
