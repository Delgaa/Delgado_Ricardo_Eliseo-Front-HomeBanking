import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function AddAccount() {
  const [clients, setClients] = useState([])
  const [newAccount, setNewAccount] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    axios(`http://localhost:8080/api/clients/${id}`)
    .then(res => setClients(res.data.accounts))
    .catch(err => console.log(err))
  },[])

  function handLeSubmit (e){
    e.preventDefault()
    alert("It has been created successfully")

/*    axios.post(`http://localhost:8080/api/clients/${id}`, newAccount{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      })
        .then(res => newAccount)
        .catch(err => console.log(err))
        setNewAccount({}) */
      console.log(newAccount);
  }

  return (
    <main className='bg-[#395886] bg-[url(/image_19-removebg-preview.png)] bg-no-repeat bg-bottom h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png' alt="logo-bank" />
      <h1 className='text-3xl text-center py-6'>Request Account</h1>
      <div className='border rounded-xl p-6 w-[90%] md:w-[70%] lg:w-[50%] opacity-95 bg-[#004d74] mb-5'>
        <p className='flex  text-lg pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt soluta sit dignissimos aut veritatis repellat minima assumenda voluptatem voluptatum. Dignissimos, alias. Saepe ratione repellendus vitae ducimus labore dolorum perferendis</p>
        <form className='flex flex-col items-center gap-2 w-full' onSubmit={handLeSubmit}>

        <label className='flex gap-2 text-xl'> 
          <input type="checkbox" name="conditions" required/>
          Accept the terms and conditions
        </label>

        <button type='submit' className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>Request</button>
        </form>
      </div>
    </main>
  )
}

export default AddAccount