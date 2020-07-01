import React, { useState, useEffect } from 'react'
import {
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  Grid,
  IconButton,
  RootRef,
} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

import users from 'config/users'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 3rem',
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
}))

const DataEntry = () => {
  const { t } = useTranslation()
  const [selectedClient, setSelectedClient] = useState('')
  const [clientList, setClientList] = useState('')
  const classes = useStyles()

  useEffect(() => {
    //  get user info from server
    setClientList(users)
  }, [])

  const handleClientChange = (e) => {
    // Pedir el user con el id indicado y almacenar toda la info aqui

    setSelectedClient(e.target.value)
  }

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.clientSelection}>
          <Typography> {t('dataEntry.client')}</Typography>
          <FormControl className={classes.formControl}>
            <Select value={selectedClient} onChange={handleClientChange}>
              {Object.keys(clientList).map((e) => (
                <MenuItem value={clientList[e].id}>{clientList[e].name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton color="primary" aria-label="add user" component="span">
            <AddCircleIcon />
          </IconButton>
        </Grid>

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
      </Grid>
    </Grid>
  )
}

export default DataEntry
