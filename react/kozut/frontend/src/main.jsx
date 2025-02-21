import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Regiok from './Regiok.jsx'
import RegiokSelect from './RegiokSelect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegiokSelect />
  </StrictMode>,
)
