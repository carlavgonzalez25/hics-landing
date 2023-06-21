import React, { useEffect, useState } from 'react'
import i18n from 'i18next'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { logo_hicsvyda, texto_hicsvidacapital, logo_hicscapital_mobile } from 'img'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    padding: '0',
    top: '0',
    width: '100% !important',
    height: theme.headerHeight,
    transition: 'all 0.3s',
    transform: 'unset !important',
    boxShadow: '3px 5px 12px -4px rgba(0,0,0,0.75)',
    [theme.breakpoints.up('lg')]: {
      padding: '0',
    },
  },
  toolbar: {
    display: 'flex',
    margin: 'auto 0 auto 0',

    padding: '0',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',
    },
  },
  menuButton: {
    marginLeft: '0',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      margin: 'unset',
    },
  },
  logo: {
    width: '222px',
    margin: '0.4rem',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      margin: '0 5rem',
      padding: '1.3rem',
    },
  },
  textoLogo: {
    height: '75px',
    marginLeft: '1rem',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  logoMobile: {
    height: '40px',

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  containerMenu: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '75px',
      background: '#EEEFF1',
    },
    '& ul': {
      display: 'flex',
      margin: 'auto',
      '& li': {
        margin: '0 1rem',
        '& div': {
          color: '#000',
          cursor: 'pointer',
          textTransform: 'uppercase',
        },
      },
    },
  },
  languageContainer: {
    border: 'none',
    fontSize: '12px',
    textTransform: 'uppercase',
    background: 'transparent',
    [theme.breakpoints.up('lg')]: {
      padding: '4px 2px',
      margin: '1rem',
    },
  },
  loginButton: {
    background: theme.palette.primary.dark,
    margin: '0 1rem',
    color: 'white',
    borderRadius: '0px',
    padding: '0.8rem 1.9rem',
  },
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.secondary.main,
    position: 'absolute',
    left: '0px',
    top: '55px',
    zIndex: '999',
    padding: '1rem 1rem 1rem 0.3rem',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
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

  const classes = useStyles()
  const { t } = useTranslation()

  const onClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <AppBar position="fixed" color="secondary" className={classes.root} id="home">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onClick}>
          <MenuIcon color="primary"  />
        </IconButton>
        <div className={classes.brandContainer}>
          <img src={logo_hicsvyda} alt="logo hics vyda" className={classes.logo} />
          <img src={texto_hicsvidacapital} alt="logo hics vyda" className={classes.textoLogo} />
          <img src={logo_hicscapital_mobile} alt="logo hics vida" className={classes.logoMobile} />
        </div>

        <div
          className={(showMenu === true ? classes.mobileContainer : null) + ' ' + classes.containerMenu}
          id="menuMobile"
        >
          <ul>
            <li>
              <div onClick={() => moveScroller(0)}>{t('home')}</div>
            </li>
            <li>
              <div onClick={() => moveScroller(1)}>{t('services.title')}</div>
            </li>
            <li>
              <div onClick={() => moveScroller(3)}>{t('contact.title')}</div>
            </li>
          </ul>

          <select 
            className={classes.languageContainer}
            onChange={e => i18n.changeLanguage(e.target.value)}
          >
            <option defaultValue={'en'}>english</option>
            <option value={'es'}>español</option>
            <option value={'por'}>português</option>
          </select>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
