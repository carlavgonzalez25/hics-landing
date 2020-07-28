import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 'auto',
  },
}))

const Home = () => {
  const classes = useStyles()

  return <h3 className={classes.root}>Dashboard</h3>
}

export default Home
