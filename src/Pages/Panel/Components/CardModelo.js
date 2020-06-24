import React from 'react'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { setModel } from 'redux/actions'
import { connect } from 'react-redux'

const CardModelo = ({ img, name, rooms, setModel }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '350px',
      height: '400px',
      margin: '1rem',
      '&:hover': {
        boxShadow: '2px 2px 2px grey',
        transform: 'translate(-1px, -1px)',
      },
    },
    imgContainer: {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '250px',
      background: 'grey',
    },
    dataContainer: {
      background: 'yellow',
      height: '150px',
      width: '100%',
    },
    list: {
      marginBlockStart: '0',
      marginBlockEnd: '0',
      paddingInlineStart: '0',
    },
    roomContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '1rem',
      marginTop: '1rem',
    },
  }))

  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.imgContainer} />
      <Grid item className={classes.dataContainer}>
        <Grid>{name}</Grid>
        <ul className={classes.list}>
          <Grid container>
            {Object.keys(rooms).map((e) => (
              <li className={classes.roomContainer}>
                <span>{e}</span>
                <span>{rooms[e]}</span>
              </li>
            ))}
          </Grid>
        </ul>
      </Grid>
    </Grid>
  )
}

export default CardModelo
