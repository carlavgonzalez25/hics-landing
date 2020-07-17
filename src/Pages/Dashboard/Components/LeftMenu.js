import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined'
import TrendingFlatOutlinedIcon from '@material-ui/icons/TrendingFlatOutlined'
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#003366',
    padding: '1rem',
    position: 'relative',
    height: 'calc(100vh - 68px)',
    minWidth: '200px',
    width: '200px',
    transition: 'all 0.2s ease',
    '& ul': {
      paddingLeft: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  collapsedMenu: {
    minWidth: '60px !important',
    width: '60px !important',
    padding: '1rem 0.2rem',
    transition: 'all 0.2s ease',
  },
  label: {
    justifyContent: 'start',
    color: '#038fdd',
  },
  buttonsContainer: {
    marginLeft: 'auto',
  },
  collapseButton: {
    marginTop: 'auto',
  },
  collapseIcon: {
    paddingRight: '1rem',
  },
}))

const LeftMenu = ({ changeSection }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const handleClick = (section) => {
    console.log(section)
    changeSection(section)
  }

  const handleCollapseClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Grid container className={classes.root + ' ' + (collapsed ? classes.collapsedMenu : '')}>
      <ul>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('home')}
            startIcon={<DashboardOutlinedIcon />}
          >
            {!collapsed && t('sections.dashboard')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('projects')}
            startIcon={<FolderOpenOutlinedIcon />}
          >
            {!collapsed && t('sections.projects')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('models')}
            startIcon={<BusinessOutlinedIcon />}
          >
            {!collapsed && t('sections.models')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('land')}
            startIcon={<RoomOutlinedIcon />}
          >
            {!collapsed && t('sections.land')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('investors')}
            startIcon={<AssessmentOutlinedIcon />}
          >
            {!collapsed && t('sections.investors')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('agents')}
            startIcon={<AssignmentIndOutlinedIcon />}
          >
            {!collapsed && t('sections.agents')}
          </Button>
        </li>
        <li>
          <Button
            classes={{ label: classes.label }}
            onClick={() => handleClick('users')}
            startIcon={<PeopleAltOutlinedIcon />}
          >
            {!collapsed && t('sections.users')}
          </Button>
        </li>
      </ul>
      <Button
        classes={{ root: classes.collapseButton, startIcon: classes.collapseIcon, label: classes.label }}
        startIcon={collapsed ? <TrendingFlatOutlinedIcon /> : <KeyboardBackspace />}
        onClick={handleCollapseClick}
      >
        {!collapsed && t('buttons.collapse')}
      </Button>
    </Grid>
  )
}

export default LeftMenu
