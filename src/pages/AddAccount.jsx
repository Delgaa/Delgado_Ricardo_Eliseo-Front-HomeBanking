import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



function AddAccount() {
  const newAccount = {};

  function handLeSubmit (e){
    e.preventDefault()
    const token = localStorage.getItem("token")
    const loggedIn = localStorage.getItem("loggedIn")


    if(loggedIn && token){
    axios.post('/api/clients/current/accounts/', newAccount,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(async res => {
          const { value: accept } = await Swal.fire({
            title: "Terms and conditions",
            input: "checkbox",
            inputValue: 1,
            inputPlaceholder: `I agree with the terms and conditions`,
            confirmButtonText: `Continue&nbsp;<i class="fa fa-arrow-right"></i>`,

            inputValidator: (result) => {
                return !result && "You need to agree with T&C";
            }});
            accept && Swal.fire("Account created successfully");
          ;
        })
        .catch(err => {
          if (err.response.data === 'The maximum of three accounts has already been reached.'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data
            })
          }
        }
        )
    }
  }

  return (
    <main className='bg-[#395886] flex pb-5 flex-col items-center flex-1 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png' alt="logo-bank" />
      <h1 className='text-3xl text-center py-6'>Request Account</h1>
      <div className=' flex flex-col items-center border rounded-xl p-6 w-[90%] md:w-[70%] lg:w-[60%] opacity-95 bg-[#004d74] mb-5'>
        <img src="/T&C.svg" className='w-[75px] text-white' alt="" />
        <p className='text-lg pb-6'><span className='font-bold'>Acceptance of Terms:</span> By accessing and using our service, you agree to abide by these terms and conditions, as well as all applicable laws and regulations. If you do not agree with any of these terms, please do not use our service.</p>
        <p className=' text-lg pb-6'><span className='font-bold'>Intellectual Property:</span> All content provided on our service, including but not limited to text, graphics, logos, images, and software, is protected by copyright and other intellectual property laws. You agree not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from or through our service without our prior written consent.</p>
        
        <form className='flex flex-col items-center gap-2 w-full' onSubmit={handLeSubmit}>
        <div className='flex gap-6 justify-center'>
          <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Request</button>
          <Link to ="/home"><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type="button" >Cancel</button></Link>
        </div>
        </form>
      </div>
    </main>
  )
}

export default AddAccount