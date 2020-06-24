import React from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import { makeStyles } from '@material-ui/core/styles'
import { slide_1, slide_2, slide_3 } from 'img'
import Slide from '../Components/Slide'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}))

const MySlider = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.root} id="slider">
      {' '}
      <Slider hasBullets bulletStyle={{ backgroundColor: '#fff' }}>
        <Slide imgUrl={slide_1} text={t('slider.slide1')} title={true} />
        <Slide imgUrl={slide_2} text={t('slider.slide2')} title={false} />
        <Slide imgUrl={slide_3} text={t('slider.slide3')} title={false} />
      </Slider>
    </div>
  )
}

export default MySlider
