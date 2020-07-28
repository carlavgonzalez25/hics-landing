import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
  },
  title: {
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginLeft: 'auto',
  },
}))

const SectionHeader = ({ title, isEditable, isRemovable }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [newProject, setNewProject] = useState()

  useEffect(() => {
    setNewProject(false)
  }, [])

  const createNewProject = () => {
    setNewProject(true)
  }

  return (
    <Grid container className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Grid item className={classes.buttonContainer}>
        <Button startIcon={<AddCircleOutlineOutlinedIcon />} onClick={createNewProject}>
          {' '}
          {t('buttons.add')}{' '}
        </Button>
        {newProject && <Redirect to="/panel" />}
        <Button startIcon={<EditOutlinedIcon />} disabled={!isEditable}>
          {t('buttons.edit')}
        </Button>
        <Button startIcon={<DeleteOutlinedIcon />} disabled={!isRemovable}>
          {t('buttons.remove')}
        </Button>
      </Grid>
    </Grid>
  )
}

export default SectionHeader
