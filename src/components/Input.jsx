import React from 'react'

function Input({amount}) {
  return (
    <>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
        name='amount' 
        type='number' 
        max= {amount} 
        min={'1'} 
        placeholder={`Amount max $`+ amount.toLocaleString("es-AR")}/>
    </>
  )
}

export default Input