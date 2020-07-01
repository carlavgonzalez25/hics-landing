import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const CardModelo = ({ img, name, rooms, id, handleModel, handleComplete, selectedModel }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '350px',
      height: '400px',
      margin: '0.5rem',
      '&:hover': {
        boxShadow: '2px 2px 2px grey',
        transform: 'translate(-1px, -1px)',
      },
    },
    selected: {
      background: 'yellow',
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
      height: '150px',
      width: '100%',
      padding: '1rem 1.2rem',
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
      alignItems: 'center',
    },
    quantity: {},
  }))

  const classes = useStyles()

  const handleClick = (id) => {
    handleModel(id)
    handleComplete()
  }

  return (
    <Paper
      container
      className={classes.root + ' ' + (selectedModel === id && classes.selected)}
      onClick={() => handleClick(id)}
    >
      <Grid item className={classes.imgContainer} />
      <Grid item className={classes.dataContainer}>
        <Grid>{name}</Grid>
        <ul className={classes.list}>
          <Grid container>
            {Object.keys(rooms).map((e) => (
              <li className={classes.roomContainer} key={e}>
                <span>{e}</span>
                <span className={classes.quantity}>{rooms[e]}</span>
              </li>
            ))}
          </Grid>
        </ul>
      </Grid>
    </Paper>
  )
}

export default CardModelo
