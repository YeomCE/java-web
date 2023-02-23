import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { ILikeUser } from 'src/interface'

interface Props {
  likeUser : ILikeUser
}

export default function LikeListItem({likeUser} : Props) {
  return (

    <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
      <Avatar sx={{ width: "32px", height: "32px", mr: "8px" }} src={likeUser.likeUserProfile} />
      <Typography component="span" sx={{ fontSize: "16px", mr: "8px", fontWeight: 500 }}>{likeUser.likeUserNickName}</Typography>
    </Box>
  )
}
