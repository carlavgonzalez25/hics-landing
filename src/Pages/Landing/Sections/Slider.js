import React from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import { makeStyles } from '@material-ui/core/styles'
import { slide_1, slide_2, slide_3 } from 'img'
import Slide from '../Components/Slide'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
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

  const ArrowComponent = ({ onClick, direction }) => {
    return direction === 'left' ? (
      <i
        style={{
          /*border: '1px solid white',
          padding: '1em',
          backgroundColor: 'black',*/
          border: 'solid #fff',
          borderWidth: '0 5px 5px 0',
          display: 'inline-block',
          padding: '3px',
          height: '30px',
          width: '30px',
          cursor: 'pointer',
          marginLeft: '1em',
          transform: 'rotate(135deg)',
        }}
        onClick={onClick}
      />
    ) : (
      direction === 'right' && (
        <i
          style={{
            border: 'solid #fff',
            borderWidth: '0 5px 5px 0',
            display: 'inline-block',
            padding: '3px',
            height: '30px',
            width: '30px',
            cursor: 'pointer',
            marginRight: '1em',
            transform: 'rotate(-45deg)',
          }}
          onClick={onClick}
        />
      )
    )
  }

  return (
    <div className={classes.root} id="slider">
      <Slider hasArrows ArrowComponent={ArrowComponent} setSlideCustom={setSlideCustom}>
        <Slide imgUrl={slide_1} text={t('slider.slide1')} title={true} mode={2} />
        <Slide imgUrl={slide_2} text={t('slider.slide2')} title={false} mode={1} />
        <Slide imgUrl={slide_3} text={t('slider.slide3')} title={false} mode={1} />
      </Slider>
    </div>
  )
}

export default MySlider
