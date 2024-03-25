import React, { useEffect, useState } from 'react'
import Client from '../components/Client'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import authActions from '../redux/actions/auth.actions';

function Home() {

  const [loading, setLoading] = useState(false)
  const user = useSelector(store => store.authReducer.user)

const dispatch = useDispatch();
const {current} = authActions;

  useEffect(() =>{
    setLoading(true)
    const token = localStorage.getItem('token')
    const loggedIn = localStorage.getItem('loggedIn')

    if(loggedIn && token){
      axios.get('/api/clients/current', {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      .then(res => {dispatch(current(res.data))})
      .finally(() => setLoading(false))
    }
  },[])

  return (
    <main className='bg-[#395886] flex pb-5 flex-col items-center flex-1 md:rounded-l-3xl'>
      <img className='w-[75px] self-end pt-5 pr-5 md:absolute' src='/logo.png'  alt="logo-bank" />
      <div className='flex flex-wrap justify-center'>

      {!loading && <h1 className='text-3xl text-center py-6 text-white'>Welcome, {user.firstName}!</h1>}

        {loading && <h2 className='text-xl py-6 '>Loading...</h2>}

        { user.accounts?.length > 0 ? <Client accounts={user.accounts}/> : <h2 className='text-xl text-center py-6 w-[80%]'>Does not have associated accounts</h2> }
        {
          user.accounts?.length == 3 ? <h2 className='text-xl py-6 text-center w-full'>You have 3 accounts, you can't ask for more</h2>  
          : (<div className='w-full flex justify-center'>
          <Link to={`/newAccount/${user.id}`}><button className='mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'><FontAwesomeIcon icon={faPlus} /> New account</button></Link>
          </div>)
        }
      </div>
      
    </main>
  )
}

export default Home