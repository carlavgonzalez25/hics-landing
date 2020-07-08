import React, { Fragment } from 'react'
import models from 'config/models'
import CardModelo from '../Components/CardModelo'

const modelSelection = (props) => {
  return (
    <Fragment>
      {models.Modelo.map((e) => (
        <Fragment>
          <CardModelo key={e.idModelo} name={e.nombre} rooms={e.ambiente} id={e.idModelo} {...props} />
        </Fragment>
      ))}
    </Fragment>
  )
}

export default modelSelection
