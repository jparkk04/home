import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Work from './WorkExperiencePage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Work />
  </StrictMode>,
)
