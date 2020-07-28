import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80px',
    marginBottom: '0.5rem',
    borderBottom: ' solid 1px #e8e8e8',
  },
  hover: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  items: {
    padding: '1rem',
    alignSelf: 'center',
    '&:hover': {
      color: '#038fdd',
    },
  },
  itemsTitle: {
    padding: '1rem',
    alignSelf: 'center',
    color: '#333333',
    opacity: '0.5',
  },
  checkbox: {
    width: '10%',
  },
  project: {
    width: '40%',
  },
  user: {
    width: '30%',
  },
  client: {
    width: '20%',
  },
}))

const ProjectCard = ({ name, user, client, id, title, handleCheckbox, checked }) => {
  const classes = useStyles()

  const handleClick = (id) => {
    // Hacer pedido de un proyecto en particular y renderizar vista
    console.log(id)
  }

  const handleChange = (e) => {
    handleCheckbox(e.target)
    // [e.target.id]: e.target.checked
  }

  return title ? (
    <Grid container className={classes.root}>
      <Checkbox color="primary" onChange={handleChange} id="-1" checked={checked} />
      <Grid item className={classes.itemsTitle + ' ' + classes.project}>
        {name}
      </Grid>
      <Grid item className={classes.itemsTitle + ' ' + classes.user}>
        {user}
      </Grid>
      <Grid item className={classes.itemsTitle + ' ' + classes.client}>
        {client}
      </Grid>
    </Grid>
  ) : (
    <Grid container className={classes.root + ' ' + classes.hover}>
      <Checkbox color="primary" onChange={handleChange} id={id} checked={checked} />
      <Grid item className={classes.items + ' ' + classes.project} onClick={!title && (() => handleClick(id))}>
        {name}
      </Grid>
      <Grid item className={classes.items + ' ' + classes.user} onClick={() => handleClick(user.id)}>
        {user.nombre}
      </Grid>
      <Grid item className={classes.items + ' ' + classes.client} onClick={() => handleClick(client.id)}>
        {client.nombre}
      </Grid>
    </Grid>
  )
}

export default ProjectCard
