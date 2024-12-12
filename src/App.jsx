import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Hero from './components/Hero.jsx'
import HomeAbout from './components/HomeAbout'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Hero />
      <HomeAbout />
      <WorkExperience />
      <Projects />
    </>
  )
}

export default App
