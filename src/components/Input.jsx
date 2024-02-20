import React from 'react'

function Input({amount}) {
  return (
    <>
        <input className='rounded-xl text-black py-1' required name='amount' type='number' max= {amount} min={'1'} placeholder={`Amount max $`+ amount.toLocaleString("es-AR")}/>
    </>
  )
}

export default Input