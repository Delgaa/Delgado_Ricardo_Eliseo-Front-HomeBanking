import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Account from '../components/Account';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Loan() {

  const [clients, setClient] = useState({});

  useEffect(()=>{
    axios('http://localhost:8080/api/clients/1')
    .then(res => setClient(res.data))
    .catch(err => console.log(err))
},[])

  return (
    <main className='bg-[#395886] bg-[url(/12469780_Wavy_REst-01_Single-07_1-removebg-preview.png)] bg-no-repeat bg-bottom  h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <section className='flex flex-col items-center gap-4 mb-5'>
        <h2 className='text-3xl text-center py-6'>Your loans active</h2>
        <div className='flex flex-wrap justify-center gap-6'>
        {
          clients.loans?.map(loan => {return <Account key={loan.id}>
          <div className='border rounded-xl p-6 w-[284px] opacity-90 bg-[#004d74]'>
            <h3 className='text-lg font-medium pb-6'>Type of loan: {loan.name}</h3>
            <p className='flex  text-lg '>Amount: <span className='text-xl pl-6 self-end'>{loan.amount.toLocaleString("es-AR",{ style: "currency", currency: "ARS" })}</span></p>
            <p className='text-lg  pt-6'>Payments: {loan.payments}</p>
          </div>
          </Account>})
        }
        </div>
        <Link to={`/newLoan/${clients.id}`}><button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'><FontAwesomeIcon icon={faPlus}/>New loan</button></Link>
      </section>
    </main>
  )
}

export default Loan