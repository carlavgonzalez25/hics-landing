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
import { useDispatch, useSelector } from 'react-redux'
import { setModels, setActiveStep, setSelectedModel } from '../../redux/actions'
import config from 'config/api'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      padding: '0 5rem',
    },
  },
}))

const Panel = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  let { routeid, routestep } = useParams()
  const dispatch = useDispatch()
  let models = useSelector((state) => state.panel.models)
  let step = useSelector((state) => state.panel.activeStep)
  let id = useSelector((state) => state.panel.selectedModel)

  const steps = [t('steps.first'), t('steps.second'), t('steps.third'), t('steps.fourth')]
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchModels()
  }, [])

  useEffect(() => {
    if (isLoading) return
    let step_ = parseInt(routestep)
    let id_ = parseInt(routeid)
    step_ = step_ > 0 && step_ < steps.length ? step_ : 0
    id_ = models.find((m) => m.idModelo === id_) ? id_ : 0
    dispatch(setActiveStep(step_))
    dispatch(setSelectedModel(id_))
  }, [isLoading])

  useEffect(() => resetRoute(id, step), [id, step])

  const fetchModels = () => {
    setIsLoading(true)
    fetch(`${config.API_URL}/getModelos`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false)
          dispatch(setModels(result))
        },
        (error) => {
          setIsLoading(false)
        }
      )
  }

  //----------------------------

  const resetRoute = (id, step) => {
    if (routestep !== step) history.push(`/panel/new/${id}/${step}`)
    else history.replace(`/panel/new/${id}/${step}`)
  }

  const onClickStep = (step_) => () => {
    // history.push(`/panel/new/${id}/${step_}`)
    dispatch(setActiveStep(step_))
  }

  // const nextStep = () => () => {
  //   history.push(`/panel/new/${id}/${step + 1}`)
  // }

  const handleModel = (id) => {
    dispatch(setSelectedModel(id))
    // history.replace(`/panel/new/${id}/${step}`)

    // if (step === 0) history.replace(`/panel/new/${id}/${1}`)
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
