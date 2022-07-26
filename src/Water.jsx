import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './Water.css'

import { Link } from "react-router-dom";

const Water = () => {
  return (
    <Box>
      Water
      <Button size="large"><Link to="/">BACK</Link></Button>
    </Box>
  )
}

export default Water;