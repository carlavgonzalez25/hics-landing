import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WcIcon from '@material-ui/icons/Wc'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined'
//import RemoveFromQueueOutlinedIcon from '@material-ui/icons/RemoveFromQueueOutlined'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined'

//import PropTypes from 'prop-types'

const ModeloCard = ({ img, name, rooms, id, livingArea, totalArea, handleModel, selectedModel, showSingleView }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '370px',
      margin: '0.5rem',
      [theme.breakpoints.up('lg')]: {
        margin: '0.5rem 0.7rem',
        maxWidth: '1440px',
      },
      '&:hover': {
        boxShadow: '2px 2px 2px grey',
        transform: 'translate(-1px, -1px)',
      },
    },
    selected: {
      border: '5px solid #0b67b2',
    },
    imgContainer: {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '270px',
      background: 'grey',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    dataContainer: {
      height: '193px',
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
    areaContainer: {
      alignItems: 'flex-end',
    },
    quantity: {},
    selectButton: {
      marginLeft: 'auto',
      padding: '0.25rem 1.5rem',
    },
  }))

  const classes = useStyles()

  const handleSelect = (id) => {
    handleModel(id)
  }

  const handleClick = (id) => {
    showSingleView(id)
    /*
    hacer el request para este modelo en particular
    Mostrar vista de modelo 
    */
  }

  const returnIcon = (room) => {
    let icon
    switch (room) {
      case 'Bedroom':
        icon = <HotelOutlinedIcon />
        break
      case 'Bathroom':
        icon = <WcIcon />
        break
      case 'Kitchen':
        icon = <RestaurantIcon />
        break
      case 'Garage':
        icon = <DriveEtaOutlinedIcon />
        break
      default:
        icon = room
        break
    }
    return icon
  }

  return (
    <Paper className={classes.root + ' ' + (selectedModel == id && classes.selected)}>
      <Grid item className={classes.imgContainer} onClick={() => handleClick(id)} />
      <Grid item className={classes.dataContainer}>
        <Typography variant="subtitle2">{name}</Typography>
        <Grid container>
          {rooms.map((e) => (
            <Grid item className={classes.roomContainer} key={e.idAmbiente}>
              {returnIcon(e.AmbienteNombre)}
              <span className={classes.quantity}>{e.cantAmbientes}</span>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row" className={classes.areaContainer}>
          <Grid item className={classes.roomContainer} key="15">
            Total Area
            <span className={classes.quantity}>{totalArea}</span>
          </Grid>
          <Grid item className={classes.roomContainer} key="16">
            Living Area
            <span className={classes.quantity}>{livingArea}</span>
          </Grid>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.selectButton}
            onClick={() => handleSelect(id)}
          >
            Select
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ModeloCard
