import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import About from './About.jsx'
import Work from './WorkExperiencePage.jsx'
import ProjectPage from './projectPage.jsx'
import Ants from './ants.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work-experience",
    element: <Work />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/ants",
    element: <Ants />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
