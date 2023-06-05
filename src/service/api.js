import axios from 'axios'

export const request = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
})
