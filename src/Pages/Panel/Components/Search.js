import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'
const Search = () => {
  return (
    <Paper component="form">
      <InputBase placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }} />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
