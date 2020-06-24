import React, { useEffect, useState } from 'react'
import i18n from 'i18next'
import { makeStyles } from '@material-ui/core/styles'
import { Button, AppBar, Toolbar, useMediaQuery } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { logo_hicsvyda, texto_hicsvidacapital, logo_hicscapital_mobile } from 'img'
import { language_sp, language_en } from 'img'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    padding: '0 2rem',
    position: 'fixed !important',
    top: '0',
    width: '100% !important',
    transition: 'all 0.3s',
    [theme.breakpoints.up('md')]: {
      padding: '0 4rem',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
    width: '50px',
    margin: '0.4rem',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'unset',
    },
  },
  textoLogo: {
    marginLeft: '1rem',
    transform: 'translateY(-50%)',
    position: 'absolute',
    top: '50%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'unset',
      width: '125px',
    },
  },
  logoMobile: {
    height: '40px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  containerMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& ul': {
      display: 'flex',
      '& li': {
        margin: '0 1rem',
        '& div': {
          color: '#000',
          cursor: 'pointer',
        },
      },
    },
  },
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.secondary.main,
    position: 'absolute',
    left: '0',
    top: '55px',
    padding: '1rem 1rem 1rem 0.3rem',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      marginBlockStart: '0',
      marginBlockEnd: '0',
      paddingInlineStart: '0',
      '& li': {
        marginBottom: '0.5rem',
      },
    },
  },
}))

const Header = ({ moveScroller }) => {
  const [showMenu, setShowMenu] = useState(false)

  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (matches) setShowMenu(false)
    })
  })

  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const classes = useStyles()
  const { t } = useTranslation()

  const onClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <AppBar position="static" color="secondary" className={classes.root} id="home">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon color="primary" onClick={onClick} />
        </IconButton>
        <div>
          <img src={logo_hicsvyda} alt="logo hics vyda" className={classes.logo} />
          <img src={texto_hicsvidacapital} alt="logo hics vyda" className={classes.textoLogo} />
          <img src={logo_hicscapital_mobile} alt="logo hics vida" className={classes.logoMobile} />
        </div>

        <div className={classes.containerMenu + ' ' + (showMenu && classes.mobileContainer)} id="menuMobile">
          <ul>
            <li>
              <div onClick={() => moveScroller(0)}>{t('home')}</div>
            </li>
            <li>
              <div onClick={() => moveScroller(1)}>{t('services.title')}</div>
            </li>
            <li>
              <div onClick={() => moveScroller(4)}>{t('contact.title')}</div>
            </li>
          </ul>
          <div className={classes.languageContainer}>
            <Button onClick={() => changeLanguage('es')} size="small">
              <img src={language_sp} alt="spanish language selector" />
            </Button>
            <Button onClick={() => changeLanguage('en')} size="small">
              <img src={language_en} alt="english language selector" />
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
