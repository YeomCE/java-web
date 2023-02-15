import { Box } from '@mui/system'
import React from 'react'
import MainContents from './MainContents'
import MainHead from './MainHead'

export default function Main() {
  return (
    <Box>
      <MainHead />
      <MainContents />
    </Box>
  )
}
