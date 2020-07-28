import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Steps from './Components/Steps'
import ModelSelection from './Sections/ModelSelection'
import ConfigurationSection from './Sections/Configuration'
import DataEntry from './Sections/DataEntry'
import LandSelection from './Sections/LandSelection'
import { Grid, Button, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 1rem 3rem 1rem',
    background: '#f5f5f5',
    minHeight: '100vh',
  },
  sectionContainer: {
    maxWidth: '1440px',
    margin: 'auto',
  },
  cardContainer: {
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

const Panel = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [selectedModel, setSelectedModel] = useState('')
  //const [data, setData] = useState('')

  const steps = [t('steps.first'), t('steps.second'), t('steps.third'), t('steps.fourth')]

  //----------------------------

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const allStepsCompleted = () => {
    return completedSteps() === steps.length
  }

  const isLastStep = () => {
    return activeStep === steps.length - 1
  }

  const handleNext = () => {
    //Solo me deja avanzar si el step actual fue completado y si no estoy en el ultimo step
    console.log(completed)
    console.log(completed.hasOwnProperty(activeStep))

    if (completed.hasOwnProperty(activeStep) && !isLastStep()) setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    if (activeStep - 1 >= 0) setActiveStep(activeStep - 1)
  }

  const handleComplete = () => {
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [activeStep]: true,
    }))
    console.log(activeStep)
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  function isStepComplete(step) {
    return completed.hasOwnProperty(step)
  }

  const handleModel = (id) => {
    setSelectedModel(id)
  }
  //-------------

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.sectionContainer}>
        <Header />
        <Steps steps={steps} isStepComplete={isStepComplete} activeStep={activeStep} />
        <Grid container className={classes.cardContainer}>
          {activeStep === 0 && (
            <ModelSelection
              handleModel={handleModel}
              handleComplete={handleComplete}
              selectedModel={selectedModel}
              handleNext={handleNext}
            />
          )}

          {activeStep === 1 && (
            <ConfigurationSection
              handleModel={handleModel}
              handleComplete={handleComplete}
              selectedModel={selectedModel}
            />
          )}
          {activeStep === 2 && <LandSelection handleComplete={handleComplete} />}
          {activeStep === 3 && <DataEntry />}
        </Grid>
        <Grid>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>Done</Typography>
              <Button onClick={handleReset}>{t('button.reset')}</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{steps[activeStep]}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  {t('buttons.back')}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  disabled={!completed[activeStep]}
                >
                  {t('buttons.next')}
                </Button>
                {activeStep !== steps.length && completed.hasOwnProperty(activeStep) && (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                )}
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Panel
