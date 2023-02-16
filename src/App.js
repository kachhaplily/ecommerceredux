import React from 'react'
import { Provider } from 'react-redux'
import GetProduct from './components/GetProduct'
import store from './store/store'
import './App.css'
import Addtocartcom from './components/Addtocartcom'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'



const App = () => {
  return (
    <>
      <Provider store={store}>
      <Header/>
        <Routes>
          <Route path='/' element={<GetProduct />} />
          <Route path='cart' element={<Addtocartcom />} />
        </Routes>

      </Provider>
    </>
  )
}

export default App