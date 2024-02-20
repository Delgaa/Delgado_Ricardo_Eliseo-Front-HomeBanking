import React from 'react'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AccountDetail from './pages/AccountDetail'
import Transaction from './pages/Transaction'
import Loan from './pages/Loan'
import Card from './pages/Card'
import AddLoan from './pages/AddLoan'
import AddAccount from "./pages/AddAccount"
import AddCard from './pages/AddCard'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/account/:id' element={<AccountDetail/>}/>
          <Route path='/newAccount/:id' element={<AddAccount/>}/>
          <Route path='/cards' element={<Card/>}/>
          <Route path='/newCard/:id' element={<AddCard/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/loan' element={<Loan/>}/>
          <Route path='/newLoan/:id' element={<AddLoan/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
