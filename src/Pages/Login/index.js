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
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from 'redux/actions' // importo la accion
import {
  logo_hicsvyda,
  texto_hicsvidacapital,
  language_sp,
  language_en,
  login_bg,
  logo_login,
  arrow,
  creating_login,
} from 'img'
import i18n from 'i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '1rem 2rem 1rem 4rem',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      paddingLeft: '1rem',
    },
  },
  containerBackground: {
    backgroundImage: `url(${login_bg})`,
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  textFields: {
    display: 'flex',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: '3rem',
    '& img': {
      marginLeft: '2rem',
      width: '250px',
    },
  },
  creating: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inherit',
    },
  },

  containerRight: {
    width: '100%',
    padding: '50px',
    [theme.breakpoints.up('lg')]: {
      padding: '4rem 8rem',
    },
  },
  flagContainer: {
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
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

const Login = ({ auth, login }) => {
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
    login(true)
  }

  return (
    <Grid container className={classes.root}>
      <header className={classes.header}>
        <div className={classes.brandContainer}>
          <img src={arrow} className={classes.arrow} />
          <img src={creating_login} className={classes.creating} />
        </div>
        <div className={classes.flagContainer}>
          <Button onClick={() => changeLanguage('es')} size="small">
            <img src={language_sp} alt="spanish language selector" />
          </Button>
          <Button onClick={() => changeLanguage('en')} size="small" onPres>
            <img src={language_en} alt="english language selector" />
          </Button>
        </div>
      </header>
      <Grid container alignItems="center" className={classes.containerBackground}>
        <Grid container xs={12} md={6} direction="column" className={classes.containerRight}>
          <Grid item className={classes.formContainer}>
            <form noValidate autoComplete="off" className={classes.form}>
              <Grid container direction="column" justify="center" xs={12}>
                <Grid container justify="center" className={classes.logoContainer}>
                  <img src={logo_login} alt="logo hics vyda capital" />
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
                  {/*auth.isAuthenticated && <Redirect to="/dashboard" />*/}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => dispatch(login(value)), //el nombre que le de al key aqui sera el con el que luego lo uso como props
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
