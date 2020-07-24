import React, { Fragment, useEffect, useState } from 'react'
import models from 'config/models'
import ModeloCard from '../Components/ModeloCard'

import ModelSingle from '../Components/ModelSingle'

const ModelSelection = (props) => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [isViewingModel, setIsViewingModel] = useState({ id: null, visible: false })
  const [singleData, setSingleData] = useState({})

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
    //setData(models)
    //setIsLoaded(true)
  }, [])

  const showSingleView = (visible, id) => {
    console.log(id)
    setIsViewingModel({ visible: visible, id: id })
  }

  return (
    <Fragment>
      {isLoaded ? (
        isViewingModel.visible ? (
          data.map(
            (e) =>
              e.idModelo === isViewingModel.id && (
                <ModelSingle
                  name={e.nombre}
                  rooms={e.ambientes}
                  id={e.idModelo}
                  img={e.archivo}
                  livingArea={e.livingArea}
                  totalArea={e.totalArea}
                  showSingleView={showSingleView}
                  {...props}
                />
              )
          )
        ) : (
          data.map((e) => (
            <Fragment>
              <ModeloCard
                key={e.idModelo}
                name={e.nombre}
                rooms={e.ambientes}
                id={e.idModelo}
                img={e.archivo}
                livingArea={e.livingArea}
                totalArea={e.totalArea}
                showSingleView={showSingleView}
                {...props}
              />
            </Fragment>
          ))
        )
      ) : (
        <h1> CARGANDO...</h1>
      )}
    </Fragment>
  )
}

export default ModelSelection
