import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
//import Search from './Search'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { language_en, language_sp } from 'img'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedModel } from '../../../redux/actions'

const useStyles = makeStyles({
  item: {
    paddingRight: '2rem',
  },
  title: {
    marginLeft: 'auto',
  },
  search: {
    minWidth: '100px',
  },
  flagContainer: {
    marginLeft: 'auto',
  },
})
const Header = ({ selectedModel, models }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const [exit, setExit] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    setExit(false)
  }, [])

  const goToPanel = () => {
    setExit(true)
  }

  const handleChange = (e) => {
    dispatch(setSelectedModel(e.target.value))
  }

  return (
    <Container>
      <Grid item className={classes.item + ' ' + classes.title}>
        {t('panel.title')}
      </Grid>
      <FormControl_>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedModel}
          onChange={handleChange}
        >
          <MenuItem value={0}>{'Seleccionar proyecto'}</MenuItem>
          {models.map((model) => (
            <MenuItem value={model.idModelo}>{model.nombre}</MenuItem>
          ))}
        </Select>
      </FormControl_>
      <Grid item className={classes.flagContainer}>
        <Button onClick={() => changeLanguage('es')} size="small">
          <img src={language_sp} alt="spanish language selector" />
        </Button>
        <Button onClick={() => changeLanguage('en')} size="small">
          <img src={language_en} alt="english language selector" />
        </Button>
        <Button onClick={goToPanel} size="small">
          {t('buttons.back')}
        </Button>
        {exit && <Redirect to="/dashboard" />}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: ${(props) => props.theme.headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormControl_ = styled(FormControl)`
  min-width: 160px;
`

export default Header
