import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import AmbientButton from './AmbientButton'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const AmbientSelector = ({ ambientes }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const allAmbientes = [
    'Bedroom',
    'Bathroom',
    'Living room',
    'Dining room',
    'Kitchen',
    'Laundry',
    'Garage',
    'Foyer',
    'Hall',
    'Entry',
    'Lanai',
    'Office',
  ]

  return (
    <div className={classes.container}>
      <AmbientButton name={'General'} />
      {ambientes.map((amb) => (
        <AmbientButton name={amb} />
      ))}
    </div>
  )
}

export default AmbientSelector
