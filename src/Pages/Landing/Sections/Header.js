import React from 'react'
import i18n from 'i18next'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Hics Vyda
        </Typography>
        <Button onClick={() => changeLanguage('es')} size="small">
          Español
        </Button>
        <Button onClick={() => changeLanguage('en')} size="small" onPres>
          English
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
