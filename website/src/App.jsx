// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./components/Home"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import PageNotFound from './components/PageNotFound'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg bg-primary px-2" data-bs-theme="dark">
          <div class="container-fluid mx-1">
            <Link to="/" class="navbar-brand">Hello</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item mx-1">
                  <Link to="/projects" class="navbar-brand">Projects</Link>
                </li>
                <li class="nav-item mx-1">
                  <Link to="/about" class="navbar-brand">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
