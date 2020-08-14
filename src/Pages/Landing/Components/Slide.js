import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { creating } from '../../../img'

const Slide = ({ imgUrl, text, title, mode, highlight }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
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
        width: 'calc(100vw - 625px) !important',
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
      background: '#0017338c',
      width: '100%',
      height: '150px',
      [theme.breakpoints.up('lg')]: {
        height: '100%',
      },
    },
    text: {
      width: '100%',
      position: 'absolute',
      padding: '1rem 1rem 1rem 1rem',
      color: '#FFF',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '0.825rem',
      [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '1rem 1rem 1rem 1rem',
        marginBottom: '0',
      },
    },
    highlight: {
      fontWeight: '600',
      color: '#1B2653',
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
      maxWidth: '450px',
      width: '100%',
      height: 'auto',
      padding: '1rem',

      [theme.breakpoints.up('md')]: {
        width: '534px',
      },
    },
  }))

  const classes = useStyles()

  const layout = (mode) =>
    mode === 1 ? (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={title ? classes.solid : classes.opacity}> </div>

          <Typography className={title ? classes.title : classes.text}>
            <span className={classes.highlight}>{highlight}</span>
            {text}
          </Typography>
        </div>
      </div>
    ) : (
      mode === 2 && (
        <div className={classes.root}>
          <div className={classes.container + ' ' + (title ? classes.containerTitle : null)}>
            <div className={title ? classes.solid : classes.opacity}> </div>
            <img src={creating} className={classes.imageCreating} alt="creating value together" />
          </div>
        </div>
      )
    )

  return layout(mode)
}

export default Slide
