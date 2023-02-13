import React from 'react'
import Navbar from './Navbar'
import Data from './Cycle/Data'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
    
    <Route path='/data' element={<Data/>}/>
    </Routes>
    </Router>
  )
}

export default App