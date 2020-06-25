import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyle = makeStyles({
  root: {},
  text: {
    paddingLeft: '1rem',
  },
})
const Search = () => {
  const classes = useStyle()
  const { t } = useTranslation()

  return (
    <Paper component="form">
      <InputBase placeholder={t('panel.search')} inputProps={{ 'aria-label': 'search' }} className={classes.text} />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
