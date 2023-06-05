const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const dateFormater = () => {
  const h = new Date().getHours()
  const m = new Date().getMinutes()
  const d = new Date().getDay()
  const data = new Date().getDate()
  const mon = new Date().getMonth()
  return `${h}:${m} - ${week[d]}, ${data} ${month[mon + 1]}`
}

export default dateFormater
