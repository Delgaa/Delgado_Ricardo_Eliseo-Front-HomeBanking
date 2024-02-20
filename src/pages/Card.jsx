import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [clients, setClient] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios('http://localhost:8080/api/clients/1')
    .then(res => setClient(res.data))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
},[])

  return (
    <main className='bg-[#395886] h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <h1 className='text-3xl text-center py-6'>Your cards:</h1>

      {loading && <h2 className='text-xl py-6 '>Loading...</h2>}

      <div className='flex flex-wrap justify-center gap-6 mb-12'>
        <section className='flex flex-col'>
          <h2 className='text-xl py-6 '>Credit:</h2>
          {
            clients.cards?.length > 0 ? clients.cards?.map(card=> {
                return (
                  card.type.includes("CREDIT") ? <Cards 
                  key={card.id}
                  number={card.number.replaceAll("-", '')}
                  expiry={card.thruDate.replaceAll("-", '').slice(2, 6)}
                  cvc={card.cvv}
                  name={card.cardHolder}/> : "")}): <h2 className='text-xl text-center py-6 w-[80%]'>Does not have associated credits cards</h2>
          }
        </section>
        <section className='flex flex-col'>
        <h2 className='text-xl py-6 '>Debit:</h2>
          {
            clients.cards?.length > 0 ? clients.cards?.map(card=> {
              return (
                card.type.includes("DEBIT") ? <Cards 
                key={card.id}
                number={card.number.replaceAll("-", '')}
                expiry={card.thruDate.replaceAll("-", '').slice(2, 6)}
                cvc={card.cvv}
                name={card.cardHolder}/> : "")}): <h2 className='text-xl text-center py-6 w-[80%]'>Does not have associated debits cards</h2>
              }
        </section>
        <div className='flex flex-col'>
        <h2 className='text-xl py-6 text-center'>Request card:</h2>
        <Link to={`/newCard/${clients.id}`} className='flex items-end'><button className=' w-[290px] h-[182px] py-3 px-4 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'><FontAwesomeIcon icon={faPlus} /> Add Card</button></Link>
        </div>
      </div>
    </main>
  )
}

export default Card