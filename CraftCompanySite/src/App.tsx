import './App.css'

function App(){
  return (
    <main>
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
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