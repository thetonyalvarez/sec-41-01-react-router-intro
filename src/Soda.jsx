import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './Soda.css'

import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Typography variant="h2" component="h2" sx={{ pb: 4 }}>Soda</Typography>
        <div className="soda">
          <img src="/src/assets/soda.gif" alt="soda"/>
        </div>
        <Button variant="contained" size="large"><Link to="/">BACK</Link></Button>
      </Box>
    </Container>
  )
}

export default Soda;