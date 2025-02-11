

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './oldalak/Home';
import Regiok from './oldalak/Regiok';

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/regiok' element={ <Regiok />}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
