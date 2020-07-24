import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import proyectos from '../../../config/proyectos'
import ProjectCard from '../Components/ProjectCard'
import SectionHeader from '../Components/SectionHeader'
import SectionFooter from '../Components/SectionFooter'

import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 70px)',
    overflowY: 'auto',
    padding: '1rem',
  },
}))

const Projects = () => {
  const [checked, setChecked] = useState({})
  const [pagination, setPagination] = useState({ offset: 0, data: [], perPage: 10, currentPage: 0 })
  const [data, setData] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const [isRemovable, setIsRemovable] = useState(false)

  useEffect(() => {
    recieveData()
    data.map((e) => {})
  }, [])

  useEffect(() => {
    let aux = 0
    Object.keys(checked).map((e) => {
      checked[e] === true && aux++
    })
    aux === 1 ? setIsEditable(true) : setIsEditable(false)
    aux >= 1 ? setIsRemovable(true) : setIsRemovable(false)
  })

  const handleCheckbox = (data) => {
    console.log('data ' + data)

    let aux = {}
    if (data.id === '-1') {
      Object.keys(checked).map((e) => {
        aux = { ...aux, [e]: !checked['-1'] }
      })
      setChecked({ ...aux })
    } else setChecked({ ...checked, [data.id]: data.checked })
  }

  const recieveData = () => {
    setData(proyectos.Proyectos)
    console.log(proyectos.Proyectos)
    let aux = {}
    proyectos.Proyectos.map((e) => {
      aux = { ...aux, [e.id]: false }
    })
    aux = { ...aux, '-1': false }
    console.log(aux)
    setChecked({ ...aux })

    const slice = data.slice(pagination.offset, pagination.offset + pagination.perPage)
  }

  const handlePageChange = (value) => {
    setPagination({ ...pagination, currentPage: value })
  }

  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container direction="row" className={classes.root}>
      <SectionHeader title={t('sections.projects')} isEditable={isEditable} isRemovable={isRemovable} />
      <ProjectCard
        name="Proyecto"
        client="Cliente"
        user="Broker"
        title={true}
        handleCheckbox={handleCheckbox}
        checked={checked['-1']}
      />
      {data.map((e) => (
        <ProjectCard
          key={e.id}
          name={e.nombre}
          id={e.id}
          client={e.cliente}
          user={e.usuario}
          title={false}
          handleCheckbox={handleCheckbox}
          checked={checked[e.id]}
        />
      ))}
      <SectionFooter count={10} page={pagination.currentPage} />
    </Grid>
  )
}

export default Projects