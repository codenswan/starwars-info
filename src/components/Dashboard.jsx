import React from 'react'
import styles from './dashboard.module.css'

export default function Dashboard() {
  
  const questions = [
    'people', 'films', 'species'
  ]

  return (
    <div className={styles.dashboardContainer}>
      <h1>STARWARS</h1>
      {questions.map((question, index) => {
        return (
          <button key={index}>{ question}</button>
)
      })}
    </div>
  )
}