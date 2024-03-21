import React from 'react'

function CardsType({number, expiry, cvc, name}) {
  return (
    <div id='cardsTitanium'>
        <div className='bg-[#004d74] w-full h-11 flex justify-between items-center'>
          <img src='/pincard.svg' alt="logo-bank" className='w-10'/>
          <img src="/visa.svg" alt="logo-visa" className='w-[60px]' />
        </div>
        <h2 className='mt-6 text-gray-700 text-lg font-semibold w-[210px]'>45343 5345 5345 5345</h2>
        <div className='w-full h-8 bg-slate-400 mt-5 flex justify-between'>
          <h2 >Melba Morel</h2>
          <div className='w-10 h-10 bg-[#004d74] self-end'></div>
        </div>
      </div>
  )
}

export default CardsType