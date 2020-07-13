import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
  root: {},
}))

const UserMenu = () => {
  const { t } = useTranslation()
  const classes = useStyles();

  const handleClick = (e) => {
    if(e.target.name === 'edit') {
        //
    } else if (e.target.name === 'logout') {
        // 
    }
  }

  return (
    <Grid>
      <ul>
        <li>
          <Button onClick={handleClick} name='edit'>{t('buttons.edit')}</Button>
        </li>
        <li>
          <Button onClick={handleClick} name='logout'>{'t('buttons.logout')'}</Button>
        </li>
      </ul>
    </Grid>
  )
}

export default UserMenu
