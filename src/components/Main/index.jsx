import React, { useState } from 'react'
import styles from './styles.module.scss'
import Weather from '../weather'
import AsideBar from '../AsideBar'
import { useSelector } from 'react-redux'

export default function Main() {
  const [load, setLoad] = useState(false)
  const dataFromRedux = useSelector((data) => data)
  //console.log(dataFromRedux, 'main')
  //console.log(dataFromRedux.rain)
  return (
    <>
      <div className={`${styles.main} ${styles.goodWeather}`}>
        <img
          className={`air-balloon ${dataFromRedux.rain ? 'air' : ''}`}
          src="/images/air_balloon.png"
          alt="shar"
        />
        {dataFromRedux.rain ? (
          <img className="waether-rainy" src="/images/rainy.png" alt="shar" />
        ) : (
          <></>
        )}

        <div className="container">
          {load ? <div className="loadingBOX">LOADING...</div> : <></>}
          <div className={styles.section} id="main__section">
            <h2 className={styles.title}>the.weather</h2>
            <Weather />
          </div>
        </div>
        <AsideBar setLoad={setLoad} />
      </div>
    </>
  )
}
