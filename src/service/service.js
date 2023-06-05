import { request } from './api'
const API_KEY = 'd3f85ab0c810190d954eadfc3332cdd5'

export const get = (city) =>
  request.get(`weather?q=${city}&units=metric&appid=${API_KEY}`)
