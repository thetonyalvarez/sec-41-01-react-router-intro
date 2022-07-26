import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './Soda.css'

import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <Box>
      Soda
      <Button size="large"><Link to="/">BACK</Link></Button>
    </Box>
  )
}

export default Soda;