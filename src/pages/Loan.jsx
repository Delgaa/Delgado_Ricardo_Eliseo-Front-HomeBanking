import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Account from '../components/Account';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions';

function Loan() {
  const [loading, setLoading] = useState(false)
  const user = useSelector(store => store.authReducer.user)
  const {current} = authActions;
  const dispatch = useDispatch();

  useEffect(()=>{
    setLoading(true)
    const token = localStorage.getItem("token")
    const loggedIn = localStorage.getItem("loggedIn")
    
    if (loggedIn && token) {
      axios.get('/api/clients/current',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => 
        dispatch(current(res.data))
        )
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
    },[])

  return (
    <main className='bg-[#395886] flex pb-5 flex-col flex-1 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <section className='flex flex-col items-center gap-4 mb-5'>
        {
          user.loans?.length > 0 ? <h2 className='text-3xl text-center py-6'>Your loans active</h2> : null
        }
        

        {loading && <h2 className='text-xl text-white py-6 '>Loading...</h2>}
        <div className='flex flex-wrap justify-center gap-6'>
        {
          user.loans?.length > 0 ? user.loans?.map(loan => {return <Account key={loan.id}>
          <div className='border rounded-xl p-6 w-[284px] opacity-90 bgLoan'>
            <h3 className='text-lg font-medium pb-6'>Type: {loan.name}</h3>
            <p className='flex  text-lg '>Amount: <span className='text-xl pl-6 self-end'>{loan.amount.toLocaleString("es-AR",{ style: "currency", currency: "ARS" })}</span></p>
            <p className='text-lg  pt-6'>Payments: {loan.payments}</p>
          </div>
          </Account>}): <h2 className='text-3xl text-white text-center py-6 w-[80%]'>Does not have loans</h2>
        }
        </div>
        <Link to={`/newLoan/${user.id}`}><button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'><FontAwesomeIcon icon={faPlus}/>New loan</button></Link>
      </section>
    </main>
  )
}

export default Loan