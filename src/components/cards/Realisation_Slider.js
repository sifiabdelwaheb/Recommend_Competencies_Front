import React from 'react'

import Slider from 'react-slick'
import logo from '../../assets/svg/bioservice.svg'

import realisation_data from '../../data/realisation'
import Classes from './styles.module.css'
export default function RealisaionSlider(props) {
  return (
    <div>
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={false}
        fade={true}
        style={{
          marginTop: '4%',
          width: '100%',
          maxWidth: '690px',
        }}
      >
        {props.image}
      </Slider>
    </div>
  )
}
