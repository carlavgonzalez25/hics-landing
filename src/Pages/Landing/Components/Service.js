import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Service = ({ img, title, text, layout }) => {
  const useStyles = makeStyles((theme) => ({
    img: {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '400px',
    },
    ctText: {
      padding: '3rem ',
    },
    p: {
      display: 'flex',
    },
  }))

  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container direction={layout ? 'row' : 'row-reverse'}>
      <Grid item xs={12} md={6} className={classes.img}></Grid>
      <Grid item xs={12} md={6} className={classes.ctText}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="p" className={classes.p}>
          {text}
        </Typography>

        <a href="/">
          <Typography variant="p">{t('services.knowMore')}</Typography>
        </a>
      </Grid>
    </Grid>
  )
}

export default Service
