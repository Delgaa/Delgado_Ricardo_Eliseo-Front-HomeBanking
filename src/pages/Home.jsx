import React, { useEffect, useState } from 'react'
import Client from '../components/Client'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    axios("http://localhost:8080/api/clients/1")
      .then(res=> setClients(res.data))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  }, [])

  return (
    <main className='bg-[#395886] bg-[url(/12469780_Wavy_REst-01_Single-07_5-removebg-preview.png)] bg-no-repeat bg-bottom md:h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <div className='flex flex-wrap justify-center'>

      {!loading && <h1 className='text-3xl text-center py-6'>Welcome, {clients.firstName}!</h1>}

        {loading && <h2 className='text-xl py-6 '>Loading...</h2>}

        { clients.accounts?.length > 0 ? <Client accounts={clients.accounts}/> : <h2 className='text-xl text-center py-6 w-[80%]'>Does not have associated accounts</h2> }

      </div>
      <Link to={`/newAccount/${clients.id}`}><button className='mb-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'><FontAwesomeIcon icon={faPlus} /> New account</button></Link>
    </main>
  )
}

export default Home