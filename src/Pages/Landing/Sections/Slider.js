import React from 'react'
import Slider from '@farbenmeer/react-spring-slider';
import { makeStyles } from '@material-ui/core/styles'
import {slide_1, slide_2, slide_3} from 'img'
import Slide from '../Components/Slide'
import { useTranslation } from 'react-i18next'
import { Button } from '@material-ui/core';
//import scroll from '../Components/scroll'

const useStyles = makeStyles((theme) => ({ 
  root: {
    height: '88vh',
  },

}))

const MySlider = () => {

const { t } = useTranslation();
const classes = useStyles();

  return <div className={classes.root} > <Slider hasBullets bulletStyle={{backgroundColor: '#fff'}} >
    <Slide imgUrl={slide_1} text={t('slider.slide1')}/>
    <Slide imgUrl={slide_2} text={t('slider.slide2')}/>
    <Slide imgUrl={slide_3} text={t('slider.slide3')}/>    
  </Slider>
  </div>
}

export default MySlider
