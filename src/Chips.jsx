import { useState } from 'react'
import bagImg from './assets/bagImg.png'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './Chips.css'

import { Link } from "react-router-dom";

const Chips = () => {
  const [bags, setBags] = useState([])

  const handleBagCount = () => {
    let rotate = (Math.random() * 90) - 45
    setBags(prevBags => [...prevBags, { rotate }])
  }

  const totalBags = bags.map((bag, idx) => (
    <img 
      key={idx}
      src={bagImg}
      className="bagOfChips"
      style={{ transform: `rotate(${bag.rotate}deg)` }}
    />
  )
  )

  console.log((totalBags))

  return (
    <Container>
      <Box>Chips</Box>
      <Button variant="standard" onClick={handleBagCount}>Get Chips!</Button>
      <Typography>{totalBags.length}</Typography>
      <div className="bags">
        {totalBags}
      </div>
      <Button size="large"><Link to="/">BACK</Link></Button>
    </Container>
  )
}

export default Chips;