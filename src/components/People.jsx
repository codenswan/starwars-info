import React from 'react'

// import styles from './people.module.css'

export default function People(props) {
  const { data } = props
  console.log('this is the people data: ', data)

  if (!data || !data.results) {
    return <div>Loading...</div>; // or some other fallback UI
  }
  
  const names = data.results.map((item) => item.name);
  console.log('these are the names:', names);
  
  return (
    <div >
      {names.map((name, index) => {
        return (
          <div key={index}>
          <h2>{name}</h2>
          </div>
        )
      })}
    </div>
    )
}