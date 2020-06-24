import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { setMotive } from 'redux/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 1rem',
    padding: '2rem',
    borderBottom: '2px solid #01A5E0',
    boxShadow: ' 0px 3px 6px #00000029',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: '2rem auto',
    },
  },
  button: {
    borderRadius: '0px',
    width: '180px',
    margin: '2rem auto 0rem auto',
    [theme.breakpoints.up('md')]: {
      margin: '3rem 0 1rem 0',
    },
  },
  p: {
    color: '#FFF',
  },
}))

const Form = ({ form, setMotive }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const handleChange = (e) => {
    setMotive(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" id="contactForm">
      <TextField id="name" label={t('contact.name')} style={{ margin: 8 }} fullWidth required margin="normal" />
      <TextField id="mail" label={t('contact.mail')} style={{ margin: 8 }} fullWidth required margin="normal" />
      <TextField id="phone" label={t('contact.tel')} style={{ margin: 8 }} fullWidth margin="normal" />
      <TextField
        id="motive"
        label={t('contact.motive')}
        style={{ margin: 8 }}
        fullWidth
        required
        margin="normal"
        onChange={handleChange}
        value={form.value}
      />
      <Button className={classes.button} variant="contained" color="primary">
        <Typography variant="subtitle2" className={classes.p}>
          {t('contact.send')}
        </Typography>
      </Button>
    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form)
