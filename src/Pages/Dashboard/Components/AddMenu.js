import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
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
    '& ul': {
      paddingLeft: '0.5rem',
    },
  },
}))

const AddMenu = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [newProject, setNewProject] = useState()

  useEffect(() => {
    setNewProject(false)
  }, [])

  const handleClickNewProject = () => {
    setNewProject(true)
  }

  return (
    <Grid container direction="column" className={classes.root}>
      <ul>
        <li>
          <Button onClick={handleClickNewProject}>{t('buttons.newProject')}</Button>
          {newProject && <Redirect to="/panel" />}
        </li>
      </ul>
    </Grid>
  )
}

export default AddMenu
