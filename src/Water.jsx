import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './Water.css'

import { Link } from "react-router-dom";

const Water = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Typography variant="h2" component="h2" sx={{ pb: 4 }}>Water</Typography>
        <div className="chips">
          <img src="/src/assets/water-bottle.gif" alt="water"/>
        </div>
        <Button variant="contained" size="large"><Link to="/">BACK</Link></Button>
      </Box>
    </Container>
  )
}

export default Water;