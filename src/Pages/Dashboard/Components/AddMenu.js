import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '153px',
    width: 'fit-content',
    //background: [theme.palette.secondary],
    position: 'absolute',
    top: '66px',
    background: 'yellow',
    '& ul': {
      paddingLeft: '0.5rem',
    },
  },
}))

const AddMenu = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleClickNewProject = (e) => {}

  return (
    <Grid container direction="column" className={classes.root}>
      <ul>
        <li>
          <Button onClick={handleClickNewProject}>{t('buttons.newProject')}</Button>
        </li>
      </ul>
    </Grid>
  )
}

export default AddMenu
