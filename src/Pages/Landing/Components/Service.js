import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { setMotive } from 'redux/actions'
import { connect } from 'react-redux'

const Service = ({ img, title, text, layout, setMotive, sectionTitle }) => {
  const useStyles = makeStyles((theme) => ({
    img: {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    },
    ctText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      width: '100%',
      height: '200px',
      padding: '1rem',
      backgroundColor: '#FFF',
      marginTop: 'auto',
      marginLeft: 'auto',
      [theme.breakpoints.up('md')]: {
        marginBottom: '3rem',
        padding: '3rem ',
        width: '614px',
        height: '300px',
      },
    },
    sectionTitle: {
      textTransform: 'uppercase',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: '0.775rem',
      letterSpacing: '0.00714em',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.875rem',
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
    p: {
      display: 'flex',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '0.725rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
    accent: {
      color: '#01A5E0',
    },
  }))

  const { t } = useTranslation()
  const classes = useStyles()

  const setForm = (text) => {
    setMotive(text)
  }

  return (
    <Grid container xs={12} className={classes.img}>
      <Grid item className={classes.ctText}>
        <Typography className={classes.sectionTitle}>{sectionTitle}</Typography>
        <Typography className={classes.accent + ' ' + classes.title}>{title}</Typography>
        <Typography className={classes.p}>{text}</Typography>
        <a href="#contactForm" onClick={() => setForm(title)}>
          <Typography className={classes.accent + ' ' + classes.p}>{t('services.knowMore')}</Typography>
        </a>
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
