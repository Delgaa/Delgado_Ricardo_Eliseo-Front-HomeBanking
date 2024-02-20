import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OptionLoan from '../components/OptionLoan'
import OptionAccount from '../components/OptionAccount'
import  Input  from '../components/Input'
import OptionPayment from '../components/OptionPayment'
import { Link, useParams } from 'react-router-dom'

function AddLoan() {
    const [loans, setLoans] = useState([])
    const [clients, setClient] = useState({})
    const [loading, setLoading] = useState(false)
    const [loanSelect, setLoanSelect] = useState("")
    const [newLoan, setNewLoan] = useState({})
    const {id} = useParams()

    useEffect(()=>{
    axios(`http://localhost:8080/api/clients/${id}`)
        .then(res=> setClient(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        setLoading(true)
        axios('http://localhost:8080/api/loans/')
            .then(res => setLoans(res.data))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
    },[])

    const handLeChange = (e=>{
        setLoanSelect(e.target.value)
    })
    const handLeChangeNew = (e=>{
        setNewLoan({...newLoan, [e.target.name]: e.target.value})
    })

    function handLeSubmit (e){
        e.preventDefault()
        alert("It has been created successfully")
    
    /*     axios.post(`http://localhost:8080/api/clients/${id}`, newLoan{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      })
        .then(res => alert("creada con exito"))
        .catch(err => console.log(err))
        setNewLoan({}) */

        console.log(newLoan);
    }

    const amountLoan = loans.find(loan => loan.name == loanSelect)

    return (
        <main className='bg-[#395886] bg-[url(/12469780_Wavy_REst-01_Single-07_3-removebg-preview.png)] bg-no-repeat bg-bottom h-[92%] flex flex-col items-center gap-6 md:rounded-l-3xl'>
            <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
            <h1 className='text-3xl text-center py-6'>Apply for a loan</h1>

            {loading && <h2>Loading...</h2>}

            <div className='border rounded-xl p-6 w-[90%] md:w-[70%] lg:w-[50%] opacity-90 bg-[#004d74] mb-5'>
            <form className='flex flex-col items-center gap-2 w-full' onSubmit={handLeSubmit}>
                <fieldset className='w-[75%]'>
                    <label className='flex flex-col gap-1'>Select loan:
                        <select className='rounded-xl py-1' onChange={handLeChange} onInput = {handLeChangeNew} required name = "name">
                            <option value=''>Select loan</option>
                            {
                                loans.map(loan => {return <OptionLoan key={loan.id} name={loan.name}/>})
                            }
                        </select>
                    </label>
                </fieldset>

                <fieldset className='w-[75%]'>
                    <label className='flex flex-col gap-1'>Source account
                        <select className='rounded-xl py-1' required >
                            <option value='' >Select account</option>
                            {
                                clients.accounts?.map(loan => {return <OptionAccount key={loan.id} number={loan.number}/>})
                            }
                        </select>
                    </label>
                </fieldset>

                <fieldset className='w-[75%]'>
                        <label className='flex flex-col gap-1' onInput={handLeChangeNew}>Source Amount
                            {
                                loanSelect != '' ? <Input amount={amountLoan?.maxAmount}/>:<p className= 'text-black rounded-xl py-1 bg-white'>Select loan first</p>
                            }
                        </label>
                </fieldset>

                <fieldset className='w-[75%]'>
                    <label className='flex flex-col gap-1'>Payments
                        <select className='rounded-xl py-1' required name = "payments" onChange={handLeChangeNew}>
                            <option value=''>Select payments</option>
                            {
                                loanSelect != '' && amountLoan?.payments.map(payment=>{return <OptionPayment key={payment} payments={payment}/>})
                            }
                        </select>
                    </label>
                </fieldset>
                <label className='flex gap-2 text-xl text-center w-[70%]'> 
                    <input type="checkbox" name="conditions" required/>
                    Accept the terms and conditions
                </label>
                <div className='flex flex-wrap gap-6 justify-center w-full'>
                    <button className=' p-2 bg-blue-500 rounded-lg' type="submit">Apply</button>
                    <Link to='/loan'><button className=' p-2 bg-blue-500 rounded-lg'>Cancel</button></Link>
                </div>
            </form>
            </div>
        </main>
    )
}

export default AddLoan