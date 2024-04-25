// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./components/Home"
import Home from "./components/Home"
import Projects from "./components/Projects"
// import About from "./components/About"
import PageNotFound from './components/PageNotFound'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-primary px-2 py-3 shadow" data-bs-theme="dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="navbar-brand">Projects</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/about" className="navbar-brand">About</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default App
