import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import './VendingMachine.css'

import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <Container>
      <Typography variant="h3" component="h2" sx={{ py: 4 }}>Choose an option above</Typography>
    </Container>
  )
}

export default VendingMachine;