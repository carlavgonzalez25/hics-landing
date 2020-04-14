import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    margin: '0 1rem',
  },
}))

const ContactBox = (props) => {
  const { t } = useTranslation()
  const { icon, imgUrl, name, address, tel, mail, time } = props
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia component="img" alt="Office" height="300" image={imgUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {t('office', { place: name })}
        </Typography>
        <Typography gutterBottom variant="body1">
          {address}
        </Typography>
        <Typography gutterBottom variant="body1">
          {tel}
        </Typography>
        <Typography gutterBottom variant="body1">
          {mail}
        </Typography>
        <Typography gutterBottom variant="body1">
          {time}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ContactBox
