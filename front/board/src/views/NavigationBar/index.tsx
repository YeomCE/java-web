import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/stores';
import { USER } from 'src/mock';


export default function NavigationBar() {

  const [content, setContent] = useState<string>("");

  const { user } = useUserStore();

  const navigator = useNavigate();
  const path = useLocation();

  const onSearchHandler = () => {
    if (!content.trim()) {
      alert("검색어를 입력해 주세요.")
      return; //# 함수 종료
    }

    navigator(`/board/search/${content}`)

  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar variant='outlined' position="static" sx={{ p: "0 120px", backgroundColor: "#fff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "#000" } }}
            onClick={() => navigator('/')}
          >
            Hoons Board
          </Typography>
          <Box sx={{ display: "flex", }}>
            <FormControl variant='outlined' sx={{ mr: "10px" }}>
              <OutlinedInput
                size='small'
                placeholder='검색어를 입력해 주세요.'
                type='text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton edge="end" onClick={onSearchHandler}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }

                onChange={(event) => setContent(event.target.value)}
              />
            </FormControl>
          {path.pathname !== '/auth' && (user ?
            (
              <Button variant='outlined' sx={{borderColor: '#000000', color: '#000000'}} onClick={() => navigator('/myPage')}>마이페이지</Button>
            ) : (
              <Button variant='contained' sx={{ backgroundColor: "#000" }} onClick={() => navigator('/auth')}>
                로그인 {/*//# /auth가 아닐 때 로그인 버튼 생성*/}
              </Button>
            ))}
        </Box>
      </Toolbar>
    </AppBar>
    </Box >
  );
}
