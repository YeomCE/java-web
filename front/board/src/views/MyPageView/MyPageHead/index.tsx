import React from 'react'



import { Avatar, Box, Typography, IconButton } from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useUserStore } from 'src/stores';

export default function MyPageHead() {

    const { user } = useUserStore();

    return (
        <Box sx={{ p: "40px 20px", display: "flex" }}>
            <Box>
                <IconButton>
                    <Avatar alt={user?.nickName} src={user?.profile} sx={{ width: "120px", height: "120px" }} />
                </IconButton>
            </Box>
            <Box sx={{ml:"25px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <Typography sx={{fontSize:"24px", fontWeight:500, color:"#rgba(0, 0, 0, 0.7)"}}>{user?.nickName}</Typography>
                    <IconButton sx={{ml:"10px"}}>
                        <EditOutlinedIcon />
                    </IconButton>
                </Box>
                <Typography sx={{mt:"10px", fontSize:"16px", fontWeight:500, color:"#rgba(0, 0, 0, 0.4)"}}>{user?.email}</Typography>
            </Box>
        </Box>
    )
}