import React from 'react'

function Tr({type, detail, date, amount}) {
    return (
        <>
            <tr >
                <td className='border p-2'>{type}</td>
                <td className='border p-2'>{amount}</td>
                <td className='border p-2'>{date}</td>
                <td className='border p-2'>{detail}</td>
            </tr>
        </>
    )
}

export default Tr