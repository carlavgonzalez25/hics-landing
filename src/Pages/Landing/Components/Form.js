import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { setMotive } from 'redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    position: 'absolute',
    top: 0,
    flexDirection: 'column',
    boxShadow: ' 0px 3px 6px #00000029',
    padding: '1rem 5rem',
    [theme.breakpoints.up('md')]: {},
  },
  textField: {
    '& label': {
      color: 'white',
    },
  },
  button: {
    borderRadius: '0px',
    width: '113px',
    backgroundColor: '#9BA4AA',
  },
  submitContainer: {
    margin: '2rem auto 0rem auto',
    [theme.breakpoints.up('md')]: {
      margin: '3rem 0 1rem 0',
    },
  },
  p: {
    color: '#FFF',
  },
  success: {
    margin: '2rem 1rem 0rem 1rem',
    color: '#00ffc4',
  },
  error: {
    margin: '2rem 1rem 0rem 1rem',
    color: '#a00000 ',
  },
}))

const Form = ({ form, setMotive }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [data, setData] = useState({ contacto: '', telefono: '', email: '', motivo: '' })
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    /* 
    Validar que los campos sean correctos
    */

    if (data.contacto !== '' && data.email !== '' && data.motivo !== '') {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }

    success !== null &&
      setTimeout(() => {
        setSuccess(null)
      }, 1500)

    console.log(success)
  })

  const handleChange = (e) => {
    // setMotive(e.target.value)
    let key = e.target.name
    let value = e.target.value
    setData((prevData) => ({ ...prevData, [key]: value }))
  }

  const onSubmit = () => {
    console.log(data)
    axios
      .post('http://52.14.23.178/api/sendMail ', {
        ...data,
      })
      .then(function (response) {
        console.log(response)
        setSuccess(true)
      })
      .catch(function (error) {
        console.log(error)
        setSuccess(false)
      })
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" id="contactForm">
      <TextField
        className={classes.textField}
        name="contacto"
        label={t('contact.name')}
        style={{ margin: 8 }}
        required
        margin="normal"
        onChange={handleChange}
        value={data.contacto}
      />
      <TextField
        className={classes.textField}
        name="email"
        label={t('contact.mail')}
        style={{ margin: 8 }}
        required
        margin="normal"
        required
        onChange={handleChange}
        value={data.email}
      />
      <TextField
        className={classes.textField}
        name="telefono"
        label={t('contact.tel')}
        style={{ margin: 8 }}
        onChange={handleChange}
        margin="normal"
        value={data.telefono}
      />
      <TextField
        className={classes.textField}
        name="motivo"
        label={t('contact.motive')}
        style={{ margin: 8 }}
        fullWidth
        required
        margin="normal"
        onChange={handleChange}
        /*value={form.value}*/
        value={data.motivo}
      />
      <div className={classes.submitContainer}>
        <Button className={classes.button} variant="contained" onClick={onSubmit} disabled={disableSubmit}>
          <Typography variant="subtitle2" className={classes.p}>
            {t('contact.send')}
          </Typography>
        </Button>
        <span className={success ? classes.success : classes.error}>
          {success ? 'Your message was sent' : success === false ? 'There was a problem, try again later' : null}
        </span>
      </div>
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
