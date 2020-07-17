import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Typography, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'

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

const SectionHeader = ({ title }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Grid item className={classes.buttonContainer}>
        <Button startIcon={<AddCircleOutlineOutlinedIcon />}> {t('buttons.add')} </Button>
        <Button startIcon={<EditOutlinedIcon />}> {t('buttons.edit')} </Button>
        <Button startIcon={<DeleteOutlinedIcon />}> {t('buttons.remove')} </Button>
      </Grid>
    </Grid>
  )
}

export default SectionHeader
