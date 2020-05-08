import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { logo_hicsvyda } from 'img'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '240px',
    backgroundColor: '#434343',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 7rem',
    },
  },
  containerLogoMenu: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      borderBottom: 'solid 1px #868686',
    },
  },
  logo: {
    flexGrow: '1',
  },
  img: {
    margin: '0 1rem',
  },
  menu: {
    flexGrow: '2',
    borderLeft: 'solid 1px #868686',
    [theme.breakpoints.up('md')]: {
      borderLeft: 'none',
    },
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      '& li': {
        marginRight: '2rem',
        color: '#FFF',
        marginBottom: '1rem',
        [theme.breakpoints.up('md')]: {
          marginBottom: '0',
        },
      },
    },
  },

  containerLogin: {
    flexGrow: '1',
    justifyContent: 'flex-end',
    marginRight: '2rem',
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      borderBottom: 'solid 1px #868686',
    },
  },
  link: {
    cursor: 'pointer',
  },
  button: {
    height: '40px',
    width: '140px',
    borderRadius: '0px',
  },

  login: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

const Footer = ({ moveScroller }) => {
  const { t } = useTranslation()

  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Grid item className={classes.containerLogoMenu}>
        <Grid item className={classes.logo}>
          <img src={logo_hicsvyda} alt="Logo hics capital" className={classes.img} />
        </Grid>
        <Grid item className={classes.menu}>
          <ul>
            <li>
              <div className={classes.link} onClick={() => moveScroller(0)}>
                {t('home')}
              </div>
            </li>
            <li>
              <div className={classes.link} onClick={() => moveScroller(1)}>
                {t('services.title')}
              </div>
            </li>
            <li>
              <div className={classes.link} onClick={() => moveScroller(2)}>
                {t('contact.title')}
              </div>
            </li>
            <li className={classes.login}>Login</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container className={classes.containerLogin}>
        <Button className={classes.button} variant="contained" color="primary">
          Log in
        </Button>
      </Grid>
    </footer>
  )
}

export default Footer
