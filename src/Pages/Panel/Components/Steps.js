import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, Typography, Button, StepButton } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { setCompleted, setActiveStep } from 'redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const getStepContent = (step, t) => {
  switch (step) {
    case 0:
      return t('steps.first')
    case 1:
      return t('steps.second')
    case 2:
      return t('steps.third')
    default:
      return 'Unknown step'
  }
}

const Steps = ({ setCompleted, setActiveStep, panel }) => {
  const classes = useStyles()

  const { t } = useTranslation()
  const steps = [t('steps.first'), t('steps.second'), t('steps.third')]

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return panel.completed.size
  }

  const allStepsCompleted = (t) => {
    return completedSteps() === totalSteps(t)
  }

  const isLastStep = (t) => {
    return panel.activeStep === totalSteps(t) - 1
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !panel.completed.has(i))
        : panel.activeStep + 1

    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = new Set(panel.completed)
    newCompleted.add(panel.activeStep)
    setCompleted(newCompleted)

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (panel.completed.size !== totalSteps()) {
      handleNext()
    }
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted(new Set())
  }

  function isStepComplete(step) {
    return panel.completed.has(step)
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={panel.activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const buttonProps = {}

          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} completed={isStepComplete(index)} {...buttonProps}>
                {label}
              </StepButton>
            </Step>
          )
        })}
      </Stepper>

      {
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(panel.activeStep, t)}</Typography>
              <div>
                <Button disabled={panel.activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                  Next
                </Button>
                {panel.activeStep !== steps.length &&
                  (panel.completed.has(panel.activeStep) ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {panel.activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button variant="contained" color="primary" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  panel: state.panel,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveStep: (value) => dispatch(setActiveStep(value)), //el nombre que le de al key aqui sera el con el que luego lo uso como props
    setCompleted: (value) => dispatch(setCompleted(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
