import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '153px',
    width: 'fit-content',
    //background: [theme.palette.secondary],
    position: 'absolute',
    top: '66px',
    background: 'yellow',
    zIndex: '999',
  },
}))

const UserMenu = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [logout, setLogout] = useState()

  useEffect(() => {
    setLogout(false)
  }, [])

  const handleClick = (value) => {
    console.log(value)

    if (value === 'edit') {
      //
    } else if (value === 'logout') {
      setLogout(true)
      console.log(' Deberia irme de aqui ')
    }
  }

  return (
    <Grid container direction="column" className={classes.root}>
      <ul>
        <li>
          <Button onClick={() => handleClick('edit')} name="edit">
            {t('buttons.edit')}
          </Button>
        </li>
        <li>
          <Button onClick={() => handleClick('logout')} name="logout">
            {t('buttons.logout')}
          </Button>
          {logout && <Redirect to="/login" />}
        </li>
      </ul>
    </Grid>
  )
}

export default UserMenu
