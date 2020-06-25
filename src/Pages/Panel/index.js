import React from 'react'
import CardModelo from './Components/CardModelo.js'
import models from '../../config/models'
import Header from './Components/Header'
import Steps from './Components/Steps'
import { Grid } from '@material-ui/core'

const Configurator = () => {
  return (
    <Grid container>
      <Header />
      <Steps />
      <Grid container>
        {Object.keys(models).map((e) => (
          <CardModelo name={models[e].name} rooms={models[e].rooms} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Configurator
