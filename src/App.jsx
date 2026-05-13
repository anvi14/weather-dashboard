import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    console.log(city)
  }


  return (
    <main className="app">
    <section className="weather-card">
      <p className="tag">Weather Dashboard</p>
      <h1>Beautiful weather, clearly presented.</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search a city..."
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="weather-preview">
        <p>San Diego</p>
        <h2>72°</h2>
        <p>Partly Cloudy · Daytime</p>
      </div>
    </section>
  </main>
  )
}

export default App
