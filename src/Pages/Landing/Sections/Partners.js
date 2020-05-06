import React from 'react'
import { logo_vydacapital, logo_hicscapital } from 'img'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: 'auto',
  },
  item: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    filter: 'grayscale(1)',
    transition: 'all 0.3s',
    width: '48vw',
    [theme.breakpoints.up('md')]: {
      width: 'unset',
    },
    '&:hover': {
      filter: 'none',
      transition: 'all 0.3s',
    },
  },
  logoHics: {
    width: '160px',
    [theme.breakpoints.up('md')]: {
      width: 'unset',
    },
  },
}))

const Partners = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  let variable = null
  console.log(' variable ' + 5 + variable)

  return (
    <Grid container className={classes.root} id="partners">
      <Typography variant="h3" className={classes.title}>
        {t('partners.title')}
      </Typography>
      <Grid item className={classes.item}>
        <img src={logo_hicscapital} alt="Logo hics capital" className={classes.img + ' ' + classes.logoHics} />
        <img src={logo_vydacapital} alt="Logo vyda capital" className={classes.img} />
      </Grid>
    </Grid>
  )
}

export default Partners
