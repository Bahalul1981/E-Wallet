import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Addcard from './components/Addcard';
import Wallethome from './components/Wallethome';


function App() {
        return (
              <BrowserRouter>

                  <Routes>
                     <Route path='/' element={<Wallethome /> } />
                     
                     <Route path='/addcard' element={<Addcard />} />

                    
                  </Routes>

              </BrowserRouter>
        )
}

export default App
