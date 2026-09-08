import './App.css'
import { Link } from 'react-router-dom'

function App(){
  return (
    <main>
        <div className="topnav">
          <Link className="active" href="#home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="title"> Squirrel Craft Stitchery</h1>

          <p className="tagline"> Insert tagline Here:</p>
          <p>
            We have purrfectly crafted toys for your furry friends!
          </p>
          <button> Shop!</button>
        </div>
      </section>

      <section>
        <p> made by hand with love!</p>
      </section>
    </main>
  )
}

export default App