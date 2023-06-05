import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

export default function WeatherDetails() {
  const dataFromRedux = useSelector((data) => data)
  //console.log(dataFromRedux, 'weatherDetails')
  return (
    <div className={styles.WeatherDetails}>
      <h2 className={styles.title}>Weather Details</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Cloud</span>
          <span>{dataFromRedux.clouds} %</span>
        </li>
        <li className={styles.item}>
          <span>Humidity</span>
          <span>{dataFromRedux.humidity} %</span>
        </li>
        <li className={styles.item}>
          <span>Wind</span>
          <span>{dataFromRedux.wind.speed} km/h</span>
        </li>
        <li className={styles.item}>
          <span>Rain</span>
          <span>{dataFromRedux.rain ? dataFromRedux.rain['1h'] : 0} mm</span>
        </li>
      </ul>
    </div>
  )
}
