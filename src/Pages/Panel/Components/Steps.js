import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel } from '@material-ui/core'

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

const Steps = ({ steps, activeStep, isStepComplete }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel completed={isStepComplete(index)}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}

export default Steps
