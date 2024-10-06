import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectPage from './ProjectPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectPage />
  </StrictMode>,
)
