import './App.css';

function App() {
  return (
    <main className="app">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <section className="weather-card">
        <div className="hero">
          <p className="tag">Weather Dashboard</p>

          <h1>
            Beautiful weather,
            <br />
            clearly presented.
          </h1>

          <p className="description">
            A clean modern dashboard for checking weather around the world.
          </p>
        </div>

        <form className="search-form">
          <input
            type="text"
            placeholder="Search a city..."
          />

          <button type="submit">
            Search
          </button>
        </form>

        <div className="weather-preview">
          <p className="city">San Diego</p>

          <h2>72°</h2>

          <p className="condition">
            Partly Cloudy · Daytime
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;