import React from 'react'
import Tr from './Tr'

function Table({transactions}) {
  return (
      <>
        <table className='text-center opacity-90 bg-gray-800'>
          <thead>
            <tr >
              <th className='border p-2'>Type</th>
              <th className='border p-2'>Amount</th>
              <th className='border p-2'>Data</th>
              <th className='border p-2'>Description</th>
            </tr>
          </thead>
          <tbody >
            {
              transactions?.map(transaction => {return <Tr key={transaction.id} type={transaction.type} amount={transaction.amount} detail={transaction.detail} date={transaction.date}></Tr>})
            }
          </tbody>
      </table>
        </>
    )
}

export default Table