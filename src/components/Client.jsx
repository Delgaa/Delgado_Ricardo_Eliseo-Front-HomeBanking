import React from 'react'
import Account from './Account'
import { Link } from 'react-router-dom'

function Client({accounts}) {
  return (
    <>
      <section className='flex flex-wrap gap-6 w-[90%] justify-center'>
        {
            accounts?.map(account => {return <Link key={account.id} to={`/account/${account.id}`}>
            <Account>
              <div className='w-[325px] border rounded-xl p-6 bgAccount opacity-90 hover:scale-110'>
                <h3 className='text-lg font-medium pb-6'>Number: {account.number}</h3>
                <p className='flex  text-lg '>Amount:  <span className='text-xl pl-6'>{account.balance.toLocaleString("es-AR",{ style: "currency", currency: "ARS" })}</span></p>
                <p className='text-lg pt-6'>Creation date: {account.creationDate.replaceAll("-", "/")}</p>
              </div>
            </Account>
            </Link>})
        }
      </section>
    </>
  )
}

export default Client