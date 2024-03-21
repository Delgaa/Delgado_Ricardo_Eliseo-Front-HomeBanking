import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
    const [userData, setUserData] = useState({email: '', password: ''});
    const [errorMessageEmail, setErrorMessageEmail] = useState(null);
    const [errorMessagePass, setErrorMessagePass] = useState(null);
    const dispatch = useDispatch();
    const {login} = authActions;
    const navigate = useNavigate();
    localStorage.removeItem('token');

    const handLeSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login', userData)
        .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Signed in successfully",
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(login(res.data))
            navigate('/home')
        }).catch(err => {

            if (err.response.data === 'Email not registered' || err.response.data === 'Email has no content') {
                setErrorMessageEmail(err.response.data);
            }
            if (err.response.data === 'Password incorrect' || err.response.data === 'Password has no content') {
                setErrorMessagePass(err.response.data);
            }
        })
    }

    const handleDataChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    return (
        <main className='w-full min-h-screen flex flex-1 items-center justify-center'>
                <div className='flex flex-col gap-2 items-center justify-center w-[300px] md:w-1/2 xl:w-[600px] h-[400px] bg-slate-600 rounded-2xl'>
                    <h2 className=' pt-6 pl-4 text-3xl text-center md:pt-2 italic text-[#93b3e2]'>Mind<span className='italic'>Bank</span></h2>
                    <form onSubmit={handLeSubmit} className='flex flex-col gap-2 items-center'>
                        <label className='flex flex-col gap-2'>
                            Email:
                            <input className='bg-gray-50 border md:w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="email" name='email' onChange={handleDataChange}/>
                            {
                                errorMessageEmail && <p className='text-red-400 font-medium'>{errorMessageEmail}</p>
                            }
                        </label>
                        <label className='flex flex-col gap-2'>
                            Password:
                            <input className='bg-gray-50 border md:w-[300px]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="password" name='password' onChange={handleDataChange}/>
                            {
                                errorMessagePass && <p className='text-red-400 font-medium'>{errorMessagePass}</p>
                            }
                        </label>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Login</button>
                    </form>
                    <p className='italic'>Don't have an account? <Link to="/signup" className='text-[#93b3e2]'>SingUp</Link></p>
                </div>
        </main>
    );
};

export default SignIn;