import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Countries from './pages/countries/Countries'
import Plans from './pages/plans/Plans'
import NotFound from './pages/notFound/NotFound'
import Navbar from "./components/Navbar"

const app = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="*" element={<NotFound/>}/>        
      </Routes>

    </BrowserRouter>
  )
}

export default app