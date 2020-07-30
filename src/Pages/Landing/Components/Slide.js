import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'
import { creating, creating_mobile } from '../../../img'

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

const Slide = ({ imgUrl, text, title, color, mode }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
    },
    container: {
      position: 'absolute',
      right: 0,
      width: '100%',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('lg')]: {
        left: '625px',
        width: 'calc(100vw - 641px) !important',
      },
      [theme.breakpoints.up('sm')]: {
        height: '138px',
        width: '80%',
      },
    },
    containerTitle: {
      height: '150px',
    },
    opacity: {
      width: '100%',
      height: '100%',
      background: '#9BA4AA',
      mixBlendMode: 'multiply',
    },
    solid: {
      background: '#26255D',
      width: '100%',
      height: '150px',
      [theme.breakpoints.up('lg')]: {
        height: '100%',
      },
    },
    text: {
      width: '100%',
      position: 'absolute',
      top: 0,
      padding: '1rem 1rem 1rem 1rem',
      color: '#FFF',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '0.825rem',
      [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '1rem 1rem 1rem 1rem',
        fontSize: '1em',
        marginBottom: '0',
      },
    },
    title: {
      width: '100%',
      position: 'absolute',
      color: '#4264AF',
      fontFamily: '"Poppins", sans-serif',
      fontSize: '22px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        fontSize: '22px',
      },
    },

    imageCreating: {
      position: 'absolute',
      width: '200px',

      [theme.breakpoints.up('md')]: {
        width: '534px',
      },
    },
  }))

  const classes = useStyles()

  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

  const textCard = () => {}

  const layout = (mode) =>
    mode === 1 ? (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={title ? classes.solid : classes.opacity}> </div>
          <Typography className={title ? classes.title : classes.text}>{text}</Typography>
        </div>
      </div>
    ) : (
      mode === 2 && (
        <div className={classes.root}>
          <div className={classes.container + ' ' + (title ? classes.containerTitle : null)}>
            <div className={title ? classes.solid : classes.opacity}> </div>
            <img src={matches ? creating : creating_mobile} className={classes.imageCreating} />
          </div>
        </div>
      )
    )

  return layout(mode)
}

export default Slide
