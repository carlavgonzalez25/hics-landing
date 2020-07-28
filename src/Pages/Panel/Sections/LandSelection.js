import React, { useEffect, useState } from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LandCard from '../Components/LandCard'
import terrenos from 'config/terrenos'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {},
  checkbox: {
    width: '10%',
  },
  name: {
    width: '20%',
  },
  city: {
    width: '15%',
  },
  area: {
    width: '15%',
  },
  attributes: {
    width: '40%',
  },
}))

const LandSelection = ({ handleComplete }) => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState('')

  const classes = useStyles()
  const { t } = useTranslation()

  const setSelectedRadio = (id) => {
    setSelected(id)
  }

  useEffect(() => {
    // Get data from server

    setData(terrenos)
    handleComplete()
  }, [])

  return (
    <Grid container direction="column">
      <Typography variant="subtitle1"> Title </Typography>
      <Grid container>
        <LandCard
          name={t('land.name')}
          city={t('land.city')}
          area={t('land.area')}
          attributesTitle={t('land.attributes')}
          title
        />
      </Grid>
      <Grid item>
        {data.map((e) => (
          <LandCard
            key={e.id}
            id={e.id}
            name={e.name}
            city={e.city}
            area={e.area}
            attributes={e.attributes}
            setSelected={setSelectedRadio}
            selectedValue={selected}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default LandSelection
