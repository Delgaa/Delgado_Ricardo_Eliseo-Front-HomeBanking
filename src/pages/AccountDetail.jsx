import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Account from '../components/Account'

function AccountDetail() {
  const [account, setAccount] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios(`http://localhost:8080/api/accounts/${id}`)
      .then(res=> setAccount(res.data))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  }, [])

  return (
    <main className='bg-[#395886] bg-[url(/12469780_Wavy_REst-01_Single-07_2-removebg-preview.png)] bg-no-repeat bg-center h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
        <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
        <h1 className='text-3xl text-center pt-6'>Your account selected</h1>
      <div className='flex flex-wrap gap-6 w-[90%] justify-center'>
        {loading && <h2>Loading...</h2>}
        {account != null &&
          <Account>
            <div  className='border rounded-xl p-6 bg-[#004d74] opacity-90 md:w-[50%]'>
              <h3 className='md:pl-5 text-lg font-medium pb-6'>Numero de cuenta: {account.number}</h3>
              <p className='md:pl-5 flex  text-lg '>Monto:  <span className='text-xl pl-6 self-end'>{account.balance?.toLocaleString("es-AR",{ style: "currency", currency: "ARS" })}</span></p>
              <p className='md:pl-5 text-lg  pt-6'>Fecha de creacion: {account.creationDate}</p>
            </div>
          </Account>
        }
        <section className='w-[90%] flex flex-col items-center gap-2 mb-5'>
          <h2 className=' text-3xl w-[80%] text-black'>Transactions Resume:</h2>
          {
            account != null ? <Table transactions={account.transactions}/> : <h2>No pose transactions</h2>
          }
        </section>
      </div>
      {/* <img className='w-[70%]' src="/d714bc526ccd7aa1c30fb9f94b47ed77.png" alt="" />  */}
    </main>
  )
}

export default AccountDetail