import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as BathroomSVG } from 'assets/bathIcon.svg'
import { ReactComponent as DiningSVG } from 'assets/diningIcon.svg'
import { ReactComponent as BedSVG } from 'assets/bedIcon.svg'
import { ReactComponent as EntrySVG } from 'assets/entryIcon.svg'
import { ReactComponent as OfficeSVG } from 'assets/officeIcon.svg'
import { ReactComponent as GeneralSVG } from 'assets/generalIcon.svg'

const useStyles = makeStyles({
  container: {
    margin: 10,
    height: '100px',
    width: '100px',
    position: 'relative',
  },
  general: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'background-color 0.5s ease',
  },
  circle: {
    backgroundColor: '#F0F0F0',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'background-color 0.5s ease',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})
const AmbientSelector = ({ name }) => {
  const classes = useStyles({ name })
  return (
    <div className={[classes.container]}>
      <span className={name === 'General' ? classes.general : classes.circle}></span>
      {name === 'General' && <GeneralSVG className={classes.svg} />}
      {name === 'Bedroom' && <BedSVG className={classes.svg} />}
      {name === 'Dining room' && <DiningSVG className={classes.svg} />}
      {name === 'Bathroom' && <BathroomSVG className={classes.svg} />}
      {name === 'Entry' && <EntrySVG className={classes.svg} />}
      {name === 'Office' && <OfficeSVG className={classes.svg} />}
    </div>
  )
}

export default AmbientSelector
