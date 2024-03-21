import React from 'react'
import Tr from './Tr'

function Table({transactions}) {
  return (
      <>
        <table className='w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100'>
          <thead className='text-xs text-white uppercase bg-[#004D74] dark:text-white'>
            <tr >
              <th className='text-center px-3 md:px-6 py-3'>Type</th>
              <th className='text-center px-3 md:px-6 py-3'>Amount</th>
              <th className='text-center px-3 md:px-6 py-3'>Data</th>
              <th className='text-center px-3 md:px-6 py-3'>Description</th>
            </tr>
          </thead>
          <tbody >
            {
              transactions?.map(transaction => {return <Tr key={transaction.id} 
                type={transaction.type} 
                amount={transaction.amount} 
                detail={transaction.description} 
                date={new Date(transaction.date).toLocaleDateString() + ' - ' + new Date(transaction.date).toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, minute: '2-digit' })}/>})
            }
          </tbody>
      </table>
        </>
    )
}

export default Table