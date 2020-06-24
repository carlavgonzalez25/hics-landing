import React, { useState } from 'react'
import {
  Button,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  IconButton,
  InputLabel,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { logo_hicsvyda, texto_hicsvidacapital, language_sp, language_en } from 'img'
import i18n from 'i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  containerLeft: {
    background: 'grey',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  textFields: {
    display: 'flex',
  },
  logoContainer: {
    marginBottom: '3rem',
    '& img': {
      marginLeft: '2rem',
    },
  },
  logoText: {
    //width: '80%',
  },
  containerRight: {
    width: '100%',
    padding: '50px',
  },
  flagContainer: {
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '0',
      right: '0',
      marginTop: '0.5rem',
    },
  },
  formContainer: {
    margin: 'auto 0px',
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    },
  },
  input: {
    marginBottom: '1.5rem',
  },
  forgotPass: {
    color: theme.palette.primary.main,
  },
  loginButton: {
    marginTop: '2rem',
    padding: '0.5rem 4rem',
    color: theme.palette.secondary.main,
  },
}))

const Login = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const changeLanguage = (lan) => i18n.changeLanguage(lan)

  const [remember, setRemember] = useState(false)
  const [userAndPass, setUserAndPass] = useState({
    user: '',
    pass: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setRemember(e.target.checked)
  }

  const handleUserAndPass = (e) => {
    setUserAndPass({ ...userAndPass, [e.target.name]: e.target.value })
    console.log(e.target.name)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // enviar credenciales
    //validarlas
    //linkear a configurador
  }

  return (
    <Grid container className={classes.root}>
      <Grid container md={6} justify="center" alignItems="center" className={classes.containerLeft}>
        <p> Logo izquierda</p>
      </Grid>
      <Grid container xs={12} md={6} direction="column" className={classes.containerRight}>
        <Grid container className={classes.flagContainer}>
          <Button onClick={() => changeLanguage('es')} size="small">
            <img src={language_sp} alt="spanish language selector" />
          </Button>
          <Button onClick={() => changeLanguage('en')} size="small" onPres>
            <img src={language_en} alt="english language selector" />
          </Button>
        </Grid>
        <Grid item className={classes.formContainer}>
          <form noValidate autoComplete="off" className={classes.form}>
            <Grid container direction="column" justify="center" xs={12}>
              <Grid container justify="center" className={classes.logoContainer}>
                <img src={logo_hicsvyda} alt="logo hics vyda capital" />
                <img src={texto_hicsvidacapital} className={classes.logoText} alt="hics vyda capital" />
              </Grid>
              <TextField
                /*error*/ id="standard-error"
                label={t('login.user')}
                className={classes.input}
                name="user"
                value={userAndPass.user}
                onChange={handleUserAndPass}
                type="mail"
              />
              <FormControl>
                <InputLabel htmlFor="standard-adornment-password">{t('login.pass')}</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={userAndPass.password}
                  onChange={handleUserAndPass}
                  label={t('login.pass')}
                  name="pass"
                  minLength="3"
                  maxLenght="20"
                  className={classes.input}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Grid container justify="space-evenly" alignItems="center">
                <FormControlLabel
                  control={<Checkbox checked={remember} onChange={handleChange} name="Remember me" color="primary" />}
                  label={t('login.rememberMe')}
                  className={classes.checkbox}
                />
                <a href="#" className={classes.forgotPass}>
                  {t('login.forgotPass')}
                </a>
              </Grid>
              <Grid container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.loginButton}
                  onClick={handleSubmit}
                >
                  {t('login.login')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
