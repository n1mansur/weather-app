import React, { useState } from 'react'
import Form from './components/Form'
import styles from './styles.module.scss'
import Cities from './components/Cities'
import WeatherDetails from './components/WeatherDetails'

export default function AsideBar({ setLoad }) {
  const [city, setCity] = useState('Tashkent')
  return (
    <div className={styles.asideBar} id="asideBar">
      <Form setCity={setCity} />
      <Cities setLoad={setLoad} city={city} />
      <WeatherDetails />
    </div>
  )
}
