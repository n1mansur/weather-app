const initialState = {
  wind: {},
  rain: 0,
  humidity: 0,
  clouds: 0,
  temp: 0,
  name: '',
  weather: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get':
      return action.data
    default:
      return state
  }
}
export const getDataAction = (data) => {
  return { type: 'get', data }
}
