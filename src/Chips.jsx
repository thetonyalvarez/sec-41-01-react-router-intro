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
    const randomPosition = () => {
      return Math.random() * 400
    }
    let top = randomPosition()
    let left = randomPosition()
    let right = randomPosition()
    let bottom = randomPosition()
    setBags(prevBags => [...prevBags, { rotate, top, left, right, bottom }])
  }

  const totalBags = bags.map((bag, idx) => (
    <img 
      key={idx}
      src={bagImg}
      className="bagOfChips"
      style={{ transform: `rotate(${bag.rotate}deg)`, top: `${bag.top}px`, left: `${bag.left}px`, right: `${bag.right}px`, bottom: `${bag.bottom}px` }}
    />
  )
  )

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h2" sx={{ pb: 4 }}>Chips</Typography>
      <Button variant="contained" onClick={handleBagCount}>Get Chips!</Button>
      <Typography sx={{ py: 4 }}>Total Bags: {totalBags.length}</Typography>
      <div className="bags">
        {totalBags}
      </div>
      <Button variant="contained" color="error" size="large"><Link to="/">BACK</Link></Button>
    </Container>
  )
}

export default Chips;