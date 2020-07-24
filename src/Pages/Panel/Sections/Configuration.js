import React, { Fragment, useEffect, useState } from 'react'
import models from 'config/models'
import axios from 'axios'
import { isEmpty } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Check from '@material-ui/icons/Check'
import AmbientSelector from '../Components/AmbientSelector'

const modeloEjemplo = {
  idModelo: 1,
  nombre: 'Modelo Paraná',
  ambientes: [
    {
      idAmbiente: 1,
      nombre: 'Bedroom',
      terminaciones: [
        {
          id: 28,
          nombre: 'Sink',
          opciones: [
            {
              idOpcion: 1,
              nombre: 'The Pompano',
              foto:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ929mUfyEo6AdIWjgTE1WfL0ogMGVDJtW0_A&usqp=CAU',
              default: true,
            },
            {
              idOpcion: 2,
              nombre: 'Another',
              foto:
                'https://previews.123rf.com/images/zhan1999/zhan19991702/zhan1999170200167/74778719-madera-de-construcci%C3%B3n-textura-de-madera-industrial-maderas-culo-de-fondo.jpg',
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
              foto: 'https://s3.amazonaws.com/bvsystem_tmp/pages/1584/original/kitchen-cabinets.jpg?1323890014',
            },
            {
              idOpcion: 2,
              nombre: 'Providence Espresso',
              foto:
                'https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2013/1/9/0/drury_BarzyckKitchen-wiht-stock-kitchen-cabinets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1405450016426.jpeg',
              default: true,
            },
            {
              idOpcion: 3,
              nombre: 'SC Shaker Cinder',
              foto: 'https://www.corvinsfloorcoverings.com/clientcontent/cys_common_content/cabinets02-01.jpg',
            },
            {
              idOpcion: 4,
              nombre: 'Liberty Shaker White',
              foto: 'https://paulmarcotteandsons.com/files/2019/01/andale_cherry_cafe_choc._1.jpg?w=1060&h=706&a=t',
              premium: true,
            },
          ],
        },
      ],
    },
    {
      idAmbiente: 5,
      nombre: 'Bathroom',
      terminaciones: [],
    },
  ],
  idModelo: 2,
  nombre: 'Modelo Alaska',
  livingArea: null,
  totalArea: null,
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
    width: '33%',
  },
  planoSection: {
    width: '67%',
    minHeight: 800,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}))

const ConfigurationSection = (props) => {
  const [model, setModel] = useState({})
  const [open, setOpen] = useState(null)
  const [image, setImage] = useState(null)
  const { selectedModel, handleModel, handleComplete } = props

  const handleClick = (id, foto) => {
    setImage(foto)
    setOpen(id === open ? null : id)
  }

  const classes = useStyles()

  useEffect(() => {
    axios.get(`/${selectedModel}`).catch((e) => {
      setModel(addSelected(modeloEjemplo))
    })
  }, [])

  const handleChangeOption = (amb_i, term_i, idOpcion, foto) => {
    let m = { ...model }
    m.ambientes[amb_i].terminaciones[term_i].selected = idOpcion
    m.ambientes[amb_i].terminaciones[term_i].foto = foto
    setImage(foto)
    setModel(m)
  }

  const addSelected = (model) => {
    let m = { ...model }
    m.ambientes.forEach((ambiente, i) => {
      ambiente.terminaciones.forEach((term, j) => {
        for (let k = 0; k < term.opciones.length; k++) {
          if (term.opciones[k].default) {
            m.ambientes[i].terminaciones[j].selected = term.opciones[k].idOpcion
            m.ambientes[i].terminaciones[j].foto = term.opciones[k].foto
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
              handleChangeOption: (term_i, idOpcion, foto) => handleChangeOption(amb_i, term_i, idOpcion, foto),
            })
          )}
      </div>
      <div
        className={classes.planoSection}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      {!isEmpty(model) && <AmbientSelector ambientes={model.ambientes.map((amb) => amb.nombre)} />}
    </>
  )
}

const MostrarOpciones = ({ amb, classes, open, handleClick, handleChangeOption }) => {
  return amb.terminaciones.map((term, term_i) => (
    <Fragment key={term.id}>
      <ListItem button onClick={() => handleClick(term.id, term.foto)}>
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
              onClick={() => handleChangeOption(term_i, opt.idOpcion, opt.foto)}
            >
              <ListItemIcon>{opt.idOpcion == term.selected && <Check />}</ListItemIcon>
              <ListItemText primary={opt.nombre} />
              {opt.premium && <ListItemSecondaryAction>Premium</ListItemSecondaryAction>}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Fragment>
  ))
}

export default ConfigurationSection
