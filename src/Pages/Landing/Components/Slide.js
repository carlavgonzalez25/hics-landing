import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

/*
const useStyles = makeStyles({
    root: imgUrl => ({
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    })
  });

*/

const Slide = ({ imgUrl, text, title }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '92vh',
      marginTop: '8vh',
      display: 'flex',
      alignItems: 'flex-end',
      [theme.breakpoints.up('md')]: {
        height: '91vh',
        marginTop: '9vh',
      },
    },
    text: {
      width: '100%',
      padding: '0 2rem 1rem 2rem',
      color: '#FFF',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '0.825rem',
      marginBottom: '1.6rem',
      [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '0 0rem 3rem 8rem',
        fontSize: '1.125rem',
        marginBottom: '0',
      },
    },
    title: {
      width: '100%',
      color: '#FFF',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '1.525rem',
      margin: '0 auto 5rem auto',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 0.5rem 1rem 0.5rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '2.75rem',
        fontWeight: 500,
        display: 'unset',
        margin: '0',
        width: '80%',
        padding: '0 0rem 3rem 8rem',
      },
    },
  }))

  const classes = useStyles(imgUrl)

  return (
    <div className={classes.root}>
      <Typography className={title ? classes.title : classes.text}>{text}</Typography>
    </div>
  )
}

export default Slide
