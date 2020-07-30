import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { setMotive } from 'redux/actions'
import { connect } from 'react-redux'
import { arrow } from '../../../img'

const Service = ({ img, title, text, layout, setMotive, sectionTitle }) => {
  const useStyles = makeStyles((theme) => ({
    img: {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    },
    headerContainer: {
      width: '100vw',
      height: '137px',
    },
    textContainer: {
      height: '100%',
      justifySelf: 'flex-end',
      width: '100%',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100vw - 641px)',
      },
    },
    opacity: {
      width: '100%',
      height: '100%',
      background: '#9BA4AA',
      mixBlendMode: 'multiply',
    },
    text: {
      color: theme.palette.secondary.main,
      width: '100%',
      position: 'absolute',
      top: 0,
      fontFamily: '"Poppins", sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      padding: '0.5rem',
      [theme.breakpoints.up('sm')]: {
        padding: '2rem',
        transform: 'translateY(16%)',
      },
    },
    titleContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      textTransform: 'uppercase',
      [theme.breakpoints.up('lg')]: {
        marginLefet: 'auto',
        marginRight: '0',
      },
      '& img': {
        margin: '0 2rem',
      },
    },
    title: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.525rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
      },
    },
    containerWbackground: {
      background: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      mixBlendMode: 'multiply',
    },
    positionAbsolute: {
      position: 'absolute',
      top: '30px',
    },
    positionRelative: {
      position: 'relative',
      height: '100%',
      width: '230px',
    },
    headerTitles: {
      padding: '1rem',
    },
    contactContainer: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    sectionTitleConstruction: {
      color: theme.palette.secondary.dark,
    },
    sectionTitleDevelopment: {
      color: theme.palette.secondary.main,
    },
    sectionTitleLoans: {
      color: theme.palette.primary.light,
    },
    titleConstruction: {
      color: theme.palette.primary.main,
    },
    titleDevelopment: {
      color: theme.palette.primary.main,
    },
    titleLoans: {
      color: theme.palette.secondary.main,
    },
  }))

  const { t } = useTranslation()
  const classes = useStyles()

  const setForm = (text) => {
    setMotive(text)
  }

  return (
    <Grid container xs={12} className={classes.img}>
      <Grid container className={classes.headerContainer}>
        <Grid item className={classes.titleContainer}>
          <img src={arrow} />
          <Grid container direction="column" className={layout === 'Loans' ? classes.positionRelative : null}>
            <div className={layout === 'Loans' ? classes.containerWbackground : null}> </div>
            <div className={`${layout === 'Loans' ? classes.positionAbsolute : null} ${classes.headerTitles} `}>
              <Typography variant="body2" className={classes[`sectionTitle${layout}`]}>
                {sectionTitle}
              </Typography>
              <Typography variant="h6" className={classes[`title${layout}`]}>
                {title}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item className={classes.textContainer}>
          <div className={classes.opacity}> </div>
          <span className={classes.text}>{text}</span>
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  form: state.form,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setMotive: (value) => dispatch(setMotive(value)), //el nombre que le de al key aqui sera el con el que luego lo uso como props
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)

{
  /*
     <Grid item className={classes.ctText}>
    <Typography className={classes.p}>{text}</Typography>
    <a href="#contactForm" onClick={() => setForm(title)}>
      <Typography className={classes.accent + ' ' + classes.p}>{t('services.knowMore')}</Typography>
    </a>
  </Grid>
  */
}
