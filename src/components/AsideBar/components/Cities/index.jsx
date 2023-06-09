import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import uzb from './data'
import { get } from '../../../../service/service'
import { useDispatch } from 'react-redux'
import { getDataAction } from '../../../../redux/reducer'

export default function Cities({ setLoad, city }) {
  const [value, setValue] = useState()
  const dispatch = useDispatch()
  const mapCities = uzb.map((city, i) => (
    <li className={styles.card} key={i}>
      {city.text}
    </li>
  ))
  const getWeather = async (city) => {
    setLoad(true)
    const data = (
      await get(city)
        .then((res) => {
          setValue(res)
          console.log(res, 'res')
          return res
        })
        .catch(() => {
          alert('wrong country name')
          return value
        })
        .finally(() =>
          setTimeout(() => {
            setLoad(false)
          }, 300)
        )
    ).data
    //console.log(data)
    const newData = {
      wind: data.wind,
      rain: data.rain,
      humidity: data.main.humidity,
      clouds: data.clouds.all,
      temp: data.main.temp,
      name: data.name,
      weather: data.weather[0].main,
    }
    dispatch(getDataAction(newData))
  }

  useEffect(() => {
    getWeather(city)
  }, [city])

  return (
    <div className={styles.Cities}>
      <ul
        className={styles.list}
        onClick={(e) => getWeather(e.target.textContent)}
      >
        {mapCities}
      </ul>
    </div>
  )
}
