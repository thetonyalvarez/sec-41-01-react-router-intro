import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Soda from './Soda'
import Water from './Water'
import Link from '@mui/material/Link'
import './Navbar.css'

import { NavLink } from "react-router-dom";
const ACTIVE_STYLE = {
  fontWeight: "bold",
  fontSize: "28px"
}

const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link component={NavLink} to="/" activeStyle={ACTIVE_STYLE}>
        Home
      </Link>
      <Link component={NavLink} to="/chips" activeStyle={ACTIVE_STYLE}>
        Chips
      </Link>
      <Link component={NavLink} to="/soda" activeStyle={ACTIVE_STYLE}>
        Soda
      </Link>
      <Link component={NavLink} to="/water" activeStyle={ACTIVE_STYLE}>
        Water
      </Link>
    </nav>
  )
}

export default Navbar