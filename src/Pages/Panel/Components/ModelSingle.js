import React from 'react'
import { Grid, Button, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WcIcon from '@material-ui/icons/Wc'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useTranslation } from 'react-i18next'
import Slider from '@farbenmeer/react-spring-slider'
import modelSlider from 'config/modelSlider'
import { grey } from '@material-ui/core/colors'

const ModelSingle = ({
  img,
  name,
  rooms,
  id,
  livingArea,
  totalArea,
  handleModel,
  handleComplete,
  selectedModel,
  showSingleView,
  handleNext,
}) => {
  const useStyles = makeStyles((theme) => ({
    cardContainer: {
      height: '500px',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    dataContainer: {
      width: '30%',
      display: 'flex',
      padding: '2rem 0 0.5rem 1.5rem',
      '& button': {
        alignSelf: 'flex-end',
      },
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
    imgContainer: {
      width: '70%',
      background: 'grey',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    slide: {
      margin: 'auto',
    },
    selectButton: {
      margin: 'auto 1rem 1rem 0',
    },
  }))

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
  const handleSelect = (id) => {
    handleModel(id)
    handleComplete()
    handleNext()
  }
  const hideView = () => {
    showSingleView(false, null)
  }

  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container className={classes.root}>
      <Button startIcon={<ArrowBackIcon />} onClick={hideView}></Button>
      <Grid container className={classes.cardContainer}>
        <Grid item direction="column" className={classes.dataContainer}>
          <Typography variant="subtitle1">{name}</Typography>
          <Grid container>
            {rooms.map((e) => (
              <Grid item className={classes.roomContainer} key={e.idAmbiente}>
                <span>{e.AmbienteNombre}</span>
                {returnIcon(e.AmbienteNombre)}
                <span className={classes.quantity}>{e.cantAmbientes}</span>
              </Grid>
            ))}
          </Grid>
          <Grid container direction="row" className={classes.areaContainer}>
            <Grid item className={classes.roomContainer}>
              totalArea
              <span className={classes.quantity}>{totalArea}</span>
            </Grid>
            <Grid item className={classes.roomContainer}>
              livingArea
              <span className={classes.quantity}>{livingArea}</span>
            </Grid>
          </Grid>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.selectButton}
            onClick={() => handleSelect(id)}
          >
            {t('buttons.select')}
          </Button>
        </Grid>
        <Grid item className={classes.imgContainer}>
          <Slider hasArrows>
            {modelSlider.map((e) => (
              <div className={classes.slide}> {e} </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ModelSingle
