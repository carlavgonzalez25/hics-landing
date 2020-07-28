import React from 'react'

import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#d1d1d1',
    padding: '1rem',
    position: 'relative',
    width: '100%',
    height: '100vh',
    margin: 'auto',
  },
}))

const Models = () => {
  const classes = useStyles()

  return (
    <h3 container className={classes.root}>
      SECCION MODELO
    </h3>
  )
}

export default Models
