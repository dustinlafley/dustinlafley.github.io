import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// src/App.jsx
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="hero">
        <h1>Jag and Sons Construction</h1>
        <p>Transforming yards into beautiful outdoor spaces since 2015</p>
      </header>

      {/* About section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Jag and Sons Construction is a locally owned company specializing in garden design,
          lawn care, and outdoor lighting. We take pride in bringing your outdoor vision to life.
        </p>
      </section>

      {/* Gallery section */}
      <section className="gallery">
        <h2>Our Work</h2>
        <div className="gallery-grid">
          <img src="https://picsum.photos/400/250?1" alt="Project 1" />
          <img src="https://picsum.photos/400/250?2" alt="Project 2" />
          <img src="https://picsum.photos/400/250?3" alt="Project 3" />
        </div>
      </section>

      {/* Contact section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>📞 (555) 123-4567</p>
        <p>📧 info@brightstarlandscaping.com</p>
        <p>📍 Houston, TX</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 BrightStar Landscaping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App