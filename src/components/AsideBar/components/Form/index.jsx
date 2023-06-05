import React from 'react'
import styles from './styles.module.scss'

export default function Form({ setCity }) {
  const form = (e) => {
    e.preventDefault()
    setCity(e.target.city.value)
    e.target.city.value = ''
  }
  return (
    <form className={styles.form} onSubmit={(e) => form(e)}>
      <input
        placeholder="Another location"
        type="text"
        name="city"
        className={styles.search_inp}
      />
      <button type="submit" className={styles.search_btn}>
        <i className="bx bx-search-alt-2"></i>
      </button>
    </form>
  )
}
