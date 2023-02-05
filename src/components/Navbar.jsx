import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    navbar: {
        background: 'blue'
    }
});


const Navbar = () => {

    const classes=useStyle();

  return (
    <div className={classes.navbar}>
        Navbar
    </div>
  )
}

export default Navbar