import React from 'react'

function OptionLoan({name}) {
  return (
    <>
      <option name='name' value={name}>{name}</option>
    </>
  )
}

export default OptionLoan