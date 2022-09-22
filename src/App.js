import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout' 
import Home from './components/Home/index'
import Aboutus from './components/Aboutus'
import Shop from './components/shop'



function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}> </Route>
        <Route path='about' element={<Aboutus />}> </Route>
        <Route path='shop' element={<Shop />}> </Route>
        <Route path='contact' element={<Shop />}> </Route>
        </Route>
    </Routes>
    </>
  )
}

export default App;
