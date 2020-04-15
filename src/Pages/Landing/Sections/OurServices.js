import React from 'react'
import Service from '../Components/Service'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { servicios_1, servicios_2 } from 'img'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 6.2rem 0 6.2rem ',
  },
  title: {
    margin: '1rem 0 2rem 0',
  },
}))

const OurServices = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {t('services.title')}
      </Typography>
      <Service
        title={t('services.title_construction')}
        text={t('services.text_construction')}
        img={servicios_1}
        layout={true}
      />
      <Service
        title={t('services.title_urbanDevelopment')}
        text={t('services.text_urbanDevelopment')}
        img={servicios_2}
        layout={false}
      />
      <Service title={t('services.title_loans')} text={t('services.text_loans')} img={servicios_1} layout={true} />
    </Grid>
  )
}

export default OurServices
