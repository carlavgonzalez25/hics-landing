import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '153px',
    width: 'fit-content',
    //background: [theme.palette.secondary],
    position: 'absolute',
    top: '66px',
    background: 'yellow',
  },
}))

const UserMenu = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const handleClick = (e) => {
    if (e.target.name === 'edit') {
      //
    } else if (e.target.name === 'logout') {
      //
    }
  }

  return (
    <Grid container direction="column" className={classes.root}>
      <ul>
        <li>
          <Button onClick={handleClick} name="edit">
            {t('buttons.edit')}
          </Button>
        </li>
        <li>
          <Button onClick={handleClick} name="logout">
            {t('buttons.logout')}
          </Button>
        </li>
      </ul>
    </Grid>
  )
}

export default UserMenu
