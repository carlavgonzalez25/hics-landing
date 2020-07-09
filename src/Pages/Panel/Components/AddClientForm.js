import React, { useState } from 'react'
import { Paper, Grid, TextField, Button, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    background: theme.palette.secondary,
    //opacity: '0.5',
    zIndex: '9999',
  },
  paper: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    height: 'fit-content',
  },
  closeButton: {
    position: 'fixed',
    top: '0',
    right: '0',
  },
  container: {
    padding: '3rem 2.5rem 2rem 2rem',
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  mb: {
    marginBottom: '1rem',
  },
}))

const AddClientForm = ({ toggleClientForm }) => {
  const [clientInfo, setClientInfo] = useState('')
  const { t } = useTranslation()

  const handleInputs = (e) => {
    let key = e.target.name
    let value = e.target.value

    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui debo cargar el nuevo cliente a la BBDD, agregarlo al Select y poner su info en "Datos del cliente"
    // O en caso de que hagamos la carga manual, sumar la info del cliente al "Datos del Cliente" y guardar esta data
    //para mandarla junto con los otros datos
  }

  const handleClose = () => {
    toggleClientForm(false)
  }

  let classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Grid container className={classes.container}>
          <form>
            <TextField
              className={classes.mb}
              value={clientInfo.name}
              onChange={handleInputs}
              name="Name"
              variant="outlined"
              label={t('dataEntry.name')}
            />
            <TextField
              className={classes.mb}
              value={clientInfo.lastname}
              onChange={handleInputs}
              name="Reference"
              variant="outlined"
              label={t('dataEntry.reference')}
            />
            <TextField
              className={classes.mb}
              value={clientInfo.mail}
              onChange={handleInputs}
              name="observations"
              variant="outlined"
              label={t('dataEntry.observations')}
            />
            <Button type="submit" onClick={handleSubmit} color="primary">
              {t('buttons.add')}
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AddClientForm
