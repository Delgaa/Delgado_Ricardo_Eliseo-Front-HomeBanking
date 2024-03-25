import React from 'react'

function CardsType({number, expiry, cvc, name, color, type}) {
  return (
    <>
    {
      color === 'TITANIUM' && (
        <div id='cardsTitanium' className='shadow-2xl w-72 h-44 p-3 rounded-xl bg-[url("/titanium.jpg")]'>
        <div className=' w-full h-11 flex justify-between items-center'>
          <img src='/pincard.svg' alt="logo-bank" className='w-10'/>
          {
            type === 'CREDIT' ? <img src="/visa.svg" alt="logo-visa" className='w-[60px]' /> : <img src="/mastercard.svg" alt="logo-visa" className='w-[60px]' />
          }
        </div>
        <h2 className='mt-6 text-gray-300 text-lg font-semibold w-[210px]'>{number}</h2>
        <div className='w-full h-8  mt-5 flex  justify-between'>
          <h2 className='text-gray-300 text-xs uppercase font-semibold '>{name}</h2>
          <h2 className='text-xs text-gray-300'>| cvv: {cvc} </h2>
          <div className='w-13 h-10  self-end'>
            <h2 className='text-gray-300 text-xs text-center'>Valid thru</h2>
            <h2 className='text-gray-300 text-xs text-center'>{expiry}</h2>
          </div>
        </div>
      </div>
      )
    }
    {
      color === 'SILVER' && (
        <div id='cardsTitanium' className='shadow-2xl w-72 h-44 p-3 rounded-xl bg-[url("/silver.jpg")]'>
        <div className=' w-full h-11 flex justify-between items-center'>
          <img src='/pincard.svg' alt="logo-bank" className='w-10'/>
          {
            type === 'CREDIT' ? <img src="/visa.svg" alt="logo-visa" className='w-[60px]' /> : <img src="/mastercard.svg" alt="logo-visa" className='w-[60px]' />
          }
        </div>
        <h2 className='mt-6 text-gray-800 text-lg font-semibold w-[210px]'>{number}</h2>
        <div className='w-full h-8  mt-5 flex  justify-between'>
          <h2 className='text-gray-800 text-xs uppercase font-semibold '>{name}</h2>
          <h2 className='text-xs text-gray-800 font-semibold'>| cvv: {cvc} </h2>
          <div className='w-13 h-10  self-end'>
            <h2 className='text-gray-800 text-xs text-center font-semibold'>Valid thru</h2>
            <h2 className='text-gray-800 text-xs text-center font-semibold'>{expiry}</h2>
          </div>
        </div>
      </div>
      )
    }
    {
      color === 'GOLD' && (
        <div id='cardsTitanium' className='shadow-2xl w-72 h-44 p-3 rounded-xl bg-[url("/gold.jpg")]'>
        <div className=' w-full h-11 flex justify-between items-center'>
          <img src='/pincard.svg' alt="logo-bank" className='w-10'/>
            {
              type === 'CREDIT' ? <img src="/visa.svg" alt="logo-visa" className='w-[60px]' /> : <img src="/mastercard.svg" alt="logo-visa" className='w-[60px]' />
            }
        </div>
        <h2 className='mt-6 text-gray-800 text-lg font-semibold w-[210px]'>{number}</h2>
        <div className='w-full h-8  mt-5 flex  justify-between'>
          <h2 className='text-gray-800 text-xs uppercase font-semibold '>{name}</h2>
          <h2 className='text-xs text-gray-800 font-semibold'>| cvv: {cvc} </h2>
          <div className='w-13 h-10  self-end'>
            <h2 className='text-gray-800 text-xs font-semibold text-center'>Valid thru</h2>
            <h2 className='text-gray-800 text-xs font-semibold text-center'>{expiry}</h2>
          </div>
        </div>
      </div>
      )
    }
    
      </>
  )
}

export default CardsType