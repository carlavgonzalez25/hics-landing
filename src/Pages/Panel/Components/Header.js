import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core'
import Search from './Search'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem ',
    alignItems: 'center',
  },
})
const Header = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item> HICS CONFIGURADOR </Grid>
      <Grid item>
        <Search />
      </Grid>
    </Grid>
  )
}

export default Header
