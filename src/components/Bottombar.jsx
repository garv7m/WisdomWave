import { Link } from "@mui/material";
import { BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import React from "react";
function Bottombar(){
  return (
    <>
      <BottomNavigation sx={{background:"transparent",position:"sticky",bottom:"0",left:"45%",textAlign:"center"}}>
        <Link href="https://github.com/garv7m" underline="hover">Github@garv7m</Link>
      </BottomNavigation>
    </>
  )
}

export default Bottombar;
