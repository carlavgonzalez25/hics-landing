import React, { useEffect, useState } from 'react'
import ModeloCard from '../Components/ModeloCard'

import ModelSingle from '../Components/ModelSingle'
import styled from 'styled-components'

const ModelSelection = (props) => {
  const [detailedModel, setDetailedModel] = useState()
  const { models } = props

  const showSingleView = (id) => {
    setDetailedModel(models.find((e) => e.idModelo === id))
  }

  return (
    <Container>
      {detailedModel && (
        <ModelSingle
          name={detailedModel.nombre}
          rooms={detailedModel.ambientes}
          id={detailedModel.idModelo}
          img={detailedModel.archivo}
          livingArea={detailedModel.livingArea}
          totalArea={detailedModel.totalArea}
          showSingleView={showSingleView}
          {...props}
        />
      )}
      {!detailedModel &&
        models.map((e) => (
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
        ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 16px;
`

export default ModelSelection
