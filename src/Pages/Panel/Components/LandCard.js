import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Checkbox, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import { PropTypes } from 'prop-types'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {},
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

const LandCard = ({ name, city, area, title, attributesTitle, id, selectedValue, setSelected, attributes }) => {
  const classes = useStyles()

  const badges = (attr, value) => value === true && <Chip label={attr} color="primary" />

  const handleChange = (id) => {
    setSelected(id)
  }

  return title ? (
    <Grid container className={classes.root}>
      <Grid className={`${classes.checkbox}  ${classes.itemsTitle}`}></Grid>
      <Grid item className={`${classes.name} ${classes.itemsTitle}`}>
        {name}
      </Grid>
      <Grid item className={`${classes.city} ${classes.itemsTitle}`}>
        {city}
      </Grid>
      <Grid item className={`${classes.area} ${classes.itemsTitle}`}>
        {area}
      </Grid>
      <Grid item className={`${classes.attributes} ${classes.itemsTitle}`}>
        {attributesTitle}
      </Grid>
    </Grid>
  ) : (
    <Grid container className={classes.root + ' ' + classes.hover}>
      <Radio
        className={classes.checkbox}
        color="primary"
        value={id}
        checked={selectedValue === id}
        onChange={() => handleChange(id)}
        id={name} /*checked={checked}*/
      />
      <Grid item className={classes.items + ' ' + classes.name}>
        {name}
      </Grid>
      <Grid item className={classes.items + ' ' + classes.city}>
        {city}
      </Grid>
      <Grid item className={classes.items + ' ' + classes.area}>
        {area}
      </Grid>
      <Grid item className={classes.items + ' ' + classes.attributes}>
        {Object.keys(attributes).map((e) => badges(e, attributes[e]))}
      </Grid>
    </Grid>
  )
}

LandCard.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  area: PropTypes.string,
  canal: PropTypes.bool,
  services: PropTypes.bool,
  floodable: PropTypes.bool,
  vegetation: PropTypes.bool,
  title: PropTypes.bool,
  attributes: PropTypes.string,
  setSeleted: PropTypes.func,
}

export default LandCard
