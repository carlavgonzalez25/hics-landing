import React, { Fragment } from 'react'
import models from 'config/models'
import CardModelo from '../Components/CardModelo'

const Configurator = () => {
  return (
    <Fragment>
      {Object.keys(models).map((e) => (
        <CardModelo name={models[e].name} rooms={models[e].rooms} />
      ))}
    </Fragment>
  )
}

export default Configurator
