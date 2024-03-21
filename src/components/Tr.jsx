import React from 'react'

function Tr({type, detail, date, amount}) {
    return (
        <>
            <tr className='bg-[#006DA4] border-b border-[#004D74]'>
                <td className={type === "CREDIT" ? 'text-center px-3 md:px-6 py-4 text-green-500 font-semibold' : 'text-center px-3 md:px-6 py-4 text-red-500 font-semibold'}>{type}</td>
                <td className='text-end px-3 md:px-6 py-4'>{amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                <td className='text-center px-3 md:px-6 py-4'>{date}</td>
                <td className='text-center px-3 md:px-6 py-4'>{detail}</td>
            </tr>
        </>
    )
}

export default Tr