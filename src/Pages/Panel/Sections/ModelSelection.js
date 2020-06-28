import React, { Fragment } from 'react'
import models from 'config/models'
import CardModelo from '../Components/CardModelo'

const modelSelection = (props) => {
  return (
    <Fragment>
      {Object.keys(models).map((e) => (
        <CardModelo key={models[e].id} name={models[e].name} rooms={models[e].rooms} id={models[e].id} {...props} />
      ))}
    </Fragment>
  )
}

export default modelSelection
