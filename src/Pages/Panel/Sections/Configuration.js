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
import Check from '@material-ui/icons/Check'

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
              default: true,
            },
            {
              idOpcion: 2,
              nombre: 'Another',
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
              default: true,
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
  terminacionesSection: {
    backgroundColor: 'red',
    width: '33%',
  },
  planoSection: {
    backgroundColor: 'yellow',
    width: '67%',
    minHeight: 800,
  },
}))

const ConfigurationSection = (props) => {
  const [model, setModel] = useState({})
  const [open, setOpen] = useState(null)
  const { selectedModel, handleModel, handleComplete } = props

  const handleClick = (id) => {
    setOpen(id === open ? null : id)
  }

  const classes = useStyles()

  useEffect(() => {
    axios.get(`/${selectedModel}`).catch((e) => {
      setModel(addSelected(modeloEjemplo))
    })
  }, [])

  const handleChangeOption = (amb_i, term_i, idOpcion) => {
    let m = { ...model }
    m.ambientes[amb_i].terminaciones[term_i].selected = idOpcion
    setModel(m)
  }

  const addSelected = (model) => {
    let m = { ...model }
    m.ambientes.forEach((ambiente, i) => {
      ambiente.terminaciones.forEach((term, j) => {
        for (let k = 0; k < term.opciones.length; k++) {
          if (term.opciones[k].default) {
            m.ambientes[i].terminaciones[j].selected = term.opciones[k].idOpcion
            break
          }
        }
      })
    })
    console.log(m)
    return m
  }

  return (
    <>
      <div className={classes.terminacionesSection}>
        {!isEmpty(model) &&
          model.ambientes.map((amb, amb_i) =>
            MostrarOpciones({
              amb,
              classes,
              open,
              handleClick,
              handleChangeOption: (term_i, idOpcion) => handleChangeOption(amb_i, term_i, idOpcion),
            })
          )}
      </div>
      <div className={classes.planoSection}></div>
    </>
  )
}

const MostrarOpciones = ({ amb, classes, open, handleClick, handleChangeOption }) => {
  return amb.terminaciones.map((term, term_i) => (
    <Fragment key={term.id}>
      <ListItem button onClick={() => handleClick(term.id)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={term.nombre} />
        {open === term.id ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open === term.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding style={{ width: '100%' }}>
          {term.opciones.map((opt, i) => (
            <ListItem
              key={opt.idOpcion}
              button
              className={classes.nested}
              onClick={() => handleChangeOption(term_i, opt.idOpcion)}
            >
              <ListItemIcon>{opt.idOpcion == term.selected && <Check />}</ListItemIcon>
              <ListItemText primary={opt.nombre} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Fragment>
  ))
}

export default ConfigurationSection
