import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Felhasznalok from './Felhasznalok'
import Termekek from './Termekek'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Termekek />
  </StrictMode>,
)