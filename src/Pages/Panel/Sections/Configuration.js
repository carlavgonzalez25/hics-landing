import React, { Fragment, useEffect, useState } from 'react'
import models from 'config/models'
import CardModelo from '../Components/CardModelo'
import axios from 'axios'
import { isEmpty } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

const modeloEjemplo = {
  idModelo: 1,
  nombre: 'Modelo Paraná',
  ambientes: [
    {
      idAmbiente: 1,
      nombre: 'Cocina',
      terminaciones: [
        {
          id: 28,
          nombre: 'Sink',
          opciones: [
            {
              idOpcion: 1,
              nombre: 'The Pompano',
              foto: 'url',
            },
            {
              idOpcion: 1,
              nombre: 'The Pompano',
              foto: 'url',
            },
          ],
        },
        {
          id: 1,
          nombre: 'Cabinets',
          opciones: [
            {
              idOpcion: 1,
              nombre: 'Portland Chestnut',
              foto: 'url',
            },
            {
              idOpcion: 2,
              nombre: 'Providence Espresso',
              foto: 'url',
            },
            {
              idOpcion: 3,
              nombre: 'SC Shaker Cinder',
              foto: 'url',
            },
            {
              idOpcion: 4,
              nombre: 'Liberty Shaker White',
              foto: 'url',
            },
          ],
        },
      ],
    },
  ],
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const ConfigurationSection = (props) => {
  const [model, setModel] = useState({})
  const [open, setOpen] = useState(null)
  const { selectedModel, handleModel, handleComplete } = props

  const handleClick = (id) => {
    setOpen(id)
  }

  const classes = useStyles()

  useEffect(() => {
    axios.get(`/${selectedModel}`).catch((e) => {
      setModel(modeloEjemplo)
    })
  })

  return <>{!isEmpty(model) && model.ambientes.map((amb) => MostrarOpciones({ amb, classes, open, handleClick }))}</>
}

const MostrarOpciones = ({ amb, classes, open, handleClick }) => {
  return amb.terminaciones.map((term) => (
    <>
      <ListItem button onClick={() => handleClick(term.id)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={term.nombre} />
        {open === term.id ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open === term.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {term.opciones.map((opt) => (
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={opt.nombre} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  ))
}

export default ConfigurationSection
