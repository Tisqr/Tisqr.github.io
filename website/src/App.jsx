// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./components/Home"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-primary px-2 py-3 shadow" data-bs-theme="dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item ">
                  <Link to="/" class="navbar-brand">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/projects" class="navbar-brand">Projects</Link>
                </li>
                {/* <li class="nav-item">
                  <Link to="/about" class="navbar-brand">About</Link>
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
