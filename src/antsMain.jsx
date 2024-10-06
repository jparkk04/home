import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ants from './Ants.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ants />
  </StrictMode>,
)
