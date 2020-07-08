import React, { useState, useEffect } from 'react'
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Grid,
  IconButton,
  Paper,
} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AddClientForm from '../Components/AddClientForm'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

import users from 'config/users'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 3rem',
    [theme.breakpoints.up('lg')]: {
      margin: '1rem 12rem',
    },
  },
  paper: {
    padding: '2rem',
  },
  formControl: {
    minWidth: 200,
  },
  clientSelection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  clientInfo: {
    marginTop: '2rem',
    '& ul': {
      '& li': {
        marginTop: '1rem',
        '& span': {
          margin: '0 1rem',
        },
      },
    },
  },
  paragraph: {
    marginRight: '1rem',
  },
  mb: {
    marginBottom: '1rem',
  },
  projectData: {
    margin: '1rem 0 1rem 0',
  },
}))

const DataEntry = () => {
  const { t } = useTranslation()
  const [selectedClient, setSelectedClient] = useState('')
  const [clientList, setClientList] = useState('')
  const [projectInfo, setProjectInfo] = useState({})
  const [viewClientForm, setViewClientForm] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    //  get user info from server
    setClientList(users)
  }, [])

  const handleClientChange = (e) => {
    // Pedir el user con el id indicado y almacenar toda la info aqui

    setSelectedClient(e.target.value)
  }

  const handleInputs = (e) => {
    let key = e.target.name
    let value = e.target.value

    setProjectInfo((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui debo enviar toda la informacion
  }

  const handleAddUser = (e) => {
    console.log('Agregar usuario')
    setViewClientForm(true)
  }

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column">
        <Paper className={classes.paper}>
          <Grid item className={classes.clientSelection}>
            <Typography className={classes.paragraph}> {t('dataEntry.client')}</Typography>
            <FormControl className={classes.formControl}>
              <Select value={selectedClient} onChange={handleClientChange}>
                {Object.keys(clientList).map((e) => (
                  <MenuItem value={clientList[e].id}>{clientList[e].name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton color="primary" aria-label="add user" component="span" onClick={handleAddUser}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
          {viewClientForm && <AddClientForm toggleClientForm={setViewClientForm} />}

          {selectedClient !== '' && (
            <Grid item className={classes.clientInfo}>
              <Typography>{t('dataEntry.clientInfo')}</Typography>
              <ul>
                <li>
                  <span>{t('dataEntry.id')} </span>
                  <span>{clientList[selectedClient].name}</span>
                </li>
                <li>
                  <span>{t('dataEntry.location')} </span>
                  <span>{clientList[selectedClient].address}</span>
                  <span>{clientList[selectedClient].country}</span>
                  <span>{clientList[selectedClient].city}</span>
                </li>
              </ul>
            </Grid>
          )}
        </Paper>

        <Grid item className={classes.projectData}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.mb}>
              {t('dataEntry.projectData')}
            </Typography>
            <form>
              <Grid container direction="column">
                <TextField
                  className={classes.mb}
                  value={projectInfo.alias}
                  onChange={handleInputs}
                  name="alias"
                  variant="outlined"
                  label={t('dataEntry.alias')}
                />
                <TextField
                  multiline
                  className={classes.mb + ' ' + classes.observations}
                  value={projectInfo.observations}
                  onChange={handleInputs}
                  name="observations"
                  variant="outlined"
                  required
                  rows="2"
                  label={t('dataEntry.observations')}
                />
              </Grid>
              <Button color="primary" type="submit" onClick={handleSubmit}>
                {t('buttons.save')}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DataEntry
