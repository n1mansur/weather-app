import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import dateFormater from '../../functions/dateFormater'

export default function Weather() {
  const dataFromRedux = useSelector((data) => data)
  //console.log(dataFromRedux, 'dataFromRedux')
  const weather = (type) => {
    switch (type) {
      case 'Rain':
        return <i className="bx bx-cloud-light-rain"></i>
      case 'Clear':
        return <i className="bx bx-sun"></i>
      default:
        return <i className="bx bx-sun"></i>
    }
  }

  return (
    <div className={styles.weather}>
      <span className={styles.degree}>{Math.trunc(dataFromRedux.temp)}˚</span>
      <span className={styles.city}>{dataFromRedux.name}</span>
      <span className={styles.date}>{dateFormater()}</span>
      <span className={styles.details}>
        {weather(dataFromRedux.weather)}
        <span>{dataFromRedux.weather}</span>
      </span>
    </div>
  )
}
