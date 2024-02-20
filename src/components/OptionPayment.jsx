import React from 'react'

function OptionPayment({payments}) {
  return (
    <>
      <option name='payments' value={payments}>{payments}</option>
    </>
  )
}

export default OptionPayment