import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AddMenu from './AddMenu'
import UserMenu from './UserMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#d1d1d1',
    padding: '1rem',
    position: 'relative',
  },
  buttonsContainer: {
    marginLeft: 'auto',
  },
}))

const Header = () => {
  const { t } = useTranslation()
  const [viewAddMenu, setViewAddMenu] = useState(false)
  const [viewUserMenu, setViewUserMenu] = useState(false)
  const classes = useStyles()

  const handleAdd = () => {
    setViewAddMenu(!viewAddMenu)
    setViewUserMenu(false)
  }
  const handleUserMenu = () => {
    setViewUserMenu(!viewUserMenu)
    setViewAddMenu(false)
  }

  return (
    <Grid container className={classes.root}>
      <Typography> {t('header.title')}</Typography>
      <Grid item className={classes.buttonsContainer}>
        <Button onClick={handleAdd}>{t('buttons.add')}</Button>
        <Button onClick={handleUserMenu}>{t('buttons.myProfile')}</Button>
        {viewAddMenu && <AddMenu />}
        {viewUserMenu && <UserMenu />}
      </Grid>
    </Grid>
  )
}

export default Header
