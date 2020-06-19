import React from 'react'
import Partners from './Partners'
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginTop: '5rem',
  },
}))

const PartnersFooter = ({ moveScroller }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Partners />
      <Footer moveScroller={moveScroller} />
    </Grid>
  )
}

export default PartnersFooter
