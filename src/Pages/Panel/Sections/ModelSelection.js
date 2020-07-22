import React, { Fragment, useEffect, useState } from 'react'
import models from 'config/models'
import CardModelo from '../Components/CardModelo'

const ModelSelection = (props) => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://52.14.23.178/api/getModelos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setData(result)
          console.log(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <Fragment>
      {isLoaded ? (
        data.map((e) => (
          <Fragment>
            <CardModelo
              key={e.idModelo}
              name={e.nombre}
              rooms={e.ambientes}
              id={e.idModelo}
              img={e.archivo}
              livingArea={e.livingArea}
              totalArea={e.totalArea}
              {...props}
            />
          </Fragment>
        ))
      ) : (
        <h1> CARGANDO...</h1>
      )}
    </Fragment>
  )
}

export default ModelSelection
