import React, { useState, useEffect } from 'react'
import Steps from './Components/Steps'
import ModelSelection from './Sections/ModelSelection'
import ConfigurationSection from './Sections/Configuration'
import DataEntry from './Sections/DataEntry'
import LandSelection from './Sections/LandSelection'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.up('lg')]: {
      padding: '0 5rem',
    },
  },
  button: {
    marginLeft: 'auto',
    marginRight: '3rem',
    background: theme.palette.primary.main,
    minWidth: '130px',
  },
}))

const Panel = (props) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  let { id, step } = useParams()
  id = parseInt(id)
  step = parseInt(step)
  const steps = [t('steps.first'), t('steps.second'), t('steps.third'), t('steps.fourth')]
  const [isLoading, setIsLoading] = useState(true)
  const [models, setModels] = useState([])

  useEffect(() => {
    fetchModels()
  }, [])

  useEffect(() => {
    let step_ = parseInt(step)
    let id_ = parseInt(id)
    step_ = step_ > 0 && step_ < steps.length ? step_ : 0
    id_ = [1, 2].find((e) => e === id_) ? id_ : 0
    resetRoute(id_, step_)
  }, [id, step])

  const fetchModels = () => {
    setIsLoading(true)
    fetch('http://52.14.23.178/api/getModelos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false)
          setModels(result)
          // setDetailedModel(result[0])
        },
        (error) => {
          setIsLoading(false)
        }
      )
  }

  //----------------------------

  const resetRoute = (id = 0, step = 0) => {
    history.replace(`/panel/new/${id}/${step}`)
  }

  const onClickStep = (step) => () => {
    history.replace(`/panel/new/${id}/${step}`)
  }

  const handleModel = (id) => {
    history.replace(`/panel/new/${id}/${step}`)

    if (step === 0) history.replace(`/panel/new/${id}/${1}`)
  }
  //-------------
  return (
    <Container>
      <Steps onClickStep={onClickStep} steps={steps} activeStep={step} />

      <CardContainer className={classes.cardContainer}>
        {step === 0 && <ModelSelection handleModel={handleModel} selectedModel={id} models={models} />}
        {step === 1 && <ConfigurationSection handleModel={handleModel} selectedModel={id} />}
        {step === 2 && <LandSelection />}
        {step === 3 && <DataEntry />}
      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  background: #f5f5f5;
  max-width: 1440px;
  margin: auto;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default Panel
