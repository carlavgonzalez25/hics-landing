import React, { useState, useEffect, Fragment } from 'react'
import {
  Typography,
  TextField,
  FormControlLabel,
  //Select,
  // MenuItem,
  Button,
  Grid,
  //IconButton,
  Paper,
} from '@material-ui/core'
//import AddCircleIcon from '@material-ui/icons/AddCircle'
//import AddClientForm from '../Components/AddClientForm'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

//import users from 'config/users'

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
    flexDirection: 'column',
  },
  clientForm: {
    width: '100%',
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
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
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
  // const [selectedClient, setSelectedClient] = useState('')
  // const [clientList, setClientList] = useState('')
  const [projectInfo, setProjectInfo] = useState({})
  // const [viewClientForm, setViewClientForm] = useState(false)
  const [clientInfo, setClientInfo] = useState({})
  const [companyInfo, setCompanyInfo] = useState({})
  const [selectedValue, setSelectedValue] = useState('')

  const classes = useStyles()

  useEffect(() => {
    //  get user info from server
    // setClientList(users)
  }, [])

  /*const handleClientChange = (e) => {
    // Pedir el user con el id indicado y almacenar toda la info aqui

    setSelectedClient(e.target.value)
  }*/

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

    let data = JSON.stringify({ project: projectInfo, client: clientInfo })

    console.log(data)
  }

  const handleClientInputs = (e) => {
    let key = e.target.name
    let value = e.target.value

    selectedValue === '1' &&
      setClientInfo((prevInfo) => ({
        ...prevInfo,
        [key]: value,
      }))

    selectedValue === '2' &&
      setCompanyInfo((prevInfo) => ({
        ...prevInfo,
        [key]: value,
      }))
  }

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value)
  }

  const saveClient = (e) => {
    e.preventDefault()

    selectedValue === '1' &&
      axios
        .post('http://52.14.23.178/api/saveCliente', {
          idTipoAgente: 1,
          ...clientInfo,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })

    selectedValue === '2' &&
      axios
        .post('http://52.14.23.178/api/saveCliente', {
          idTipoAgente: 2,
          ...companyInfo,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
  }

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column">
        <Paper className={classes.paper}>
          <Grid item className={classes.clientSelection}>
            <Typography variant="h6" className={classes.mb}>
              {t('dataEntry.client')}
            </Typography>
            <form className={classes.clientForm}>
              {
                <RadioGroup
                  aria-label="Select type of client"
                  name="Select"
                  value={selectedValue}
                  onChange={handleRadioChange}
                  className={classes.radioGroup}
                >
                  <FormControlLabel value="1" control={<Radio color="primary" />} label="Persona Física" />
                  <FormControlLabel value="2" control={<Radio color="primary" />} label="Persona Jurídica" />
                </RadioGroup>
              }

              <Grid container direction="column">
                {selectedValue === '1' && (
                  <Fragment>
                    <TextField
                      className={classes.mb}
                      value={clientInfo.nombre}
                      onChange={handleClientInputs}
                      name="nombre"
                      variant="outlined"
                      label={t('dataEntry.name')}
                      required
                    />
                    <TextField
                      className={classes.mb}
                      value={clientInfo.apellido}
                      onChange={handleClientInputs}
                      name="apellido"
                      variant="outlined"
                      label={t('dataEntry.lastname')}
                      required
                    />
                    <TextField
                      className={classes.mb}
                      value={clientInfo.referencia}
                      onChange={handleClientInputs}
                      name="referencia"
                      variant="outlined"
                      label={t('dataEntry.reference')}
                    />
                    <TextField
                      className={classes.mb}
                      value={clientInfo.observaciones}
                      onChange={handleClientInputs}
                      name="observaciones"
                      variant="outlined"
                      label={t('dataEntry.observations')}
                    />
                  </Fragment>
                )}
                {selectedValue === '2' && (
                  <Fragment>
                    <TextField
                      className={classes.mb}
                      value={companyInfo.razonsocial}
                      onChange={handleClientInputs}
                      name="razonsocial"
                      variant="outlined"
                      label={t('dataEntry.company')}
                      required
                    />
                    <TextField
                      className={classes.mb}
                      value={companyInfo.observaciones}
                      onChange={handleClientInputs}
                      name="observaciones"
                      variant="outlined"
                      label={t('dataEntry.observations')}
                    />
                  </Fragment>
                )}
              </Grid>
              <Button type="submit" variant="contained" color="primary" onClick={saveClient}>
                {' '}
                {t('buttons.save')}
              </Button>
            </form>
          </Grid>
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
                  required
                />
                <TextField
                  multiline
                  className={classes.mb + ' ' + classes.observations}
                  value={projectInfo.observations}
                  onChange={handleInputs}
                  name="observations"
                  variant="outlined"
                  rows="2"
                  label={t('dataEntry.observations')}
                />
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
        {t('buttons.save')}
      </Button>
    </Grid>
  )
}

export default DataEntry
