import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { COLORS, TYPES } from '../utils/typesCard'

function AddCard() {
  const [newCard, setNewCard] = useState({})
/*   const {id} = useParams() */

  function handLeChange (e){
    setNewCard({...newCard, [e.target.name]: e.target.value})
  }

  function handLeSubmit (e){
    e.preventDefault()
    alert("It has been created successfully")

/*     axios.post(`http://localhost:8080/api/clients/${id}`, newCard{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      })
    .then(res => alert("creada con exito"))
    .catch(err => console.log(err))
    setNewCard({
      type:"",
      color: ""
    }) */
    console.log(newCard);
  }

  return (
    <main className='bg-[#395886] h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <h1 className='text-3xl text-center pt-6'>Apply for a card</h1>

      <div className='border rounded-xl p-6 w-[90%] md:w-[70%] lg:w-[50%] bg-[#004d74] mb-5'>
      <form onSubmit={handLeSubmit} className='flex flex-col items-center gap-6 w-full'>
        <fieldset className='w-[75%]'>
          <label className='flex flex-col gap-1'>Select card type:
              <select className='rounded-xl py-1' onChange={handLeChange} required name="type" > 
                <option value=''>Selec type card</option>
                {
                  TYPES.map(type => {return <option key={type} value={type.toUpperCase()}>{type}</option>})
                }
              </select>
          </label>
          </fieldset>

          <fieldset  className='w-[75%]'> 
          <label className='flex flex-col gap-1'>Select card membership(color):
              <select className='rounded-xl py-1' onChange={handLeChange} required name="color"> 
                <option value=''>Select color card</option>
                {
                  COLORS.map(color => {return <option key={color} value={color.toUpperCase()}>{color}</option>})
                }
              </select>
          </label>
        </fieldset>
        <div className='flex gap-6 justify-center'>
        <button type="submit" className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>Apply</button>
        <Link to ="/cards"><button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' type="button" >Cancel</button></Link>
        </div>
        <img src="/image 22.png" className='w-[250px] ' alt="" />
      </form>
      </div>
    </main>
  )
}

export default AddCard