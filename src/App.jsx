import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="app">
      <main>
      {/* <img
          src="/public/026-dvd2_star_wars_poster_classic_1_web.jpg"
          alt="starwars-poster-img"
          className="bg-img"
        />  */}
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
