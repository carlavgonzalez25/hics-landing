import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#f5f5f5',
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

const Steps = ({ steps, activeStep, onClickStep }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep} className={classes.root}>
        {steps.map((label, index) => {
          return (
            <Step key={label} onClick={onClickStep(index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}

export default Steps
