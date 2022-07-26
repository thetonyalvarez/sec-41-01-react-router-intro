import React, { useState } from 'react'
import Container from '@mui/material/Container'
import './VendingMachine.css'

import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <Container>
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/water">Water</Link>
    </Container>
  )
}

export default VendingMachine;