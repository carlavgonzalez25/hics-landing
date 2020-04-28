import React from 'react'
import i18n from 'i18next'
import { makeStyles } from '@material-ui/core/styles'
import { Button, AppBar,  Toolbar } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { logo_hicsvyda, texto_hicsvidacapital, logo_hicscapital_mobile } from 'img'
import {language_sp, language_en} from 'img'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    padding: '0 2rem',
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
      display: 'none'
    }
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
    }
  },
  title: {
    flexGrow: 1,
  },
  containerMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: { 
      display: 'flex'
    },
    '& ul': {
      display: 'flex',
      '& li': {
        margin: '0 1rem',
        '& a': {
          color: '#000',
        },
      }
    }
  },
  
}))

const Header = () => {
  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar className={classes.toolbar}>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon color="primary" />
       </IconButton>
       <div>
         <img src={logo_hicsvyda} alt='logo hics vyda' className={classes.logo}/>
         <img src={texto_hicsvidacapital} alt='logo hics vyda' className={classes.textoLogo}/>
         <img src={logo_hicscapital_mobile} alt='logo hics vida' className={classes.logoMobile}/>
       </div>
        
       <div className={classes.containerMenu}> 
         <ul>
           <li><a href='#home'>{t('home')}</a></li>
           <li><a href='#services' >{t('services.title')}</a></li>
           <li><a href='#contact' >{t('contact.title')}</a></li>
         </ul>             
        <Button onClick={() => changeLanguage('es')} size="small">
        <img src={language_sp} alt='spanish language selector'/>
        </Button>
        <Button onClick={() => changeLanguage('en')} size="small" onPres>
        <img src={language_en} alt='english language selector'/>
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
