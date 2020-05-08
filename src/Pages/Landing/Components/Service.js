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
      width: '614px',
      height: '300px',
      padding: '3rem ',
      marginBottom: '3rem',
      backgroundColor: '#FFF',
      marginTop: 'auto',
      marginLeft: 'auto',
    },
    sectionTitle: {
      textTransform: 'uppercase',
    },
    p: {
      display: 'flex',
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
        <Typography variant="subtitle2" className={classes.sectionTitle}>
          {sectionTitle}
        </Typography>
        <Typography variant="h4" className={classes.accent}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.p}>
          {text}
        </Typography>
        <a href="#contactForm" onClick={() => setForm(title)}>
          <Typography variant="body1" className={classes.accent}>
            {t('services.knowMore')}
          </Typography>
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
