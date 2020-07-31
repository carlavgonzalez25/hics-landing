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

  const setSlideCustom = () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    />
  )

  return (
    <div className={classes.root} id="slider">
      <Slider hasArrows setSlideCustom={setSlideCustom}>
        <Slide imgUrl={slide_1} text={t('slider.slide1')} title={true} mode={2} />
        <Slide imgUrl={slide_2} text={t('slider.slide2')} title={false} mode={1} />
        <Slide imgUrl={slide_3} text={t('slider.slide3')} title={false} mode={1} />
      </Slider>
    </div>
  )
}

export default MySlider
