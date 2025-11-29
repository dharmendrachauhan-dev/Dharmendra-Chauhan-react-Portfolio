import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Home />
    <Contact />
    </>
  </StrictMode>,
)
