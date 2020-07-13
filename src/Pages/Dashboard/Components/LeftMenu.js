import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b000b5',
    padding: '1rem',
    position: 'relative',
    height: 'calc(100vh - 68px)',
    minWidth: '150px',
    width: '200px',
    '& ul': {
      paddingLeft: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  buttonsContainer: {
    marginLeft: 'auto',
  },
  collapse: {
    marginTop: 'auto',
  },
  collapseIcon: {
    paddingRight: '1rem',
  },
}))

const LeftMenu = (setSection) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleClick = (e) => {
    console.log(setSection)
    console.log(e.target)
    //setSection(e.target.id)
  }

  return (
    <Grid container className={classes.root}>
      <ul>
        <li>
          <Button name="projects" onClick={handleClick}>
            {t('sections.projects')}
          </Button>
        </li>
        <li>
          <Button name="models" onClick={handleClick}>
            {t('sections.models')}
          </Button>
        </li>
        <li>
          <Button name="land" onClick={handleClick}>
            {t('sections.land')}
          </Button>
        </li>
        <li>
          <Button name="investors" onClick={handleClick}>
            {t('sections.investors')}
          </Button>
        </li>
        <li>
          <Button name="agents" onClick={handleClick}>
            {t('sections.agents')}
          </Button>
        </li>
        <li>
          <Button name="users" onClick={handleClick}>
            {t('sections.users')}
          </Button>
        </li>
      </ul>
      <Button classes={{ root: classes.collapse, startIcon: classes.collapseIcon }} startIcon={<KeyboardBackspace />}>
        Collapse{' '}
      </Button>
    </Grid>
  )
}

export default LeftMenu
