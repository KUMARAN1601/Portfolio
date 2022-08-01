import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar";
import Projects from './Projects';


const Navigation = props => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          <Route  path="Projects" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
  )
}
    
export default Navigation
    