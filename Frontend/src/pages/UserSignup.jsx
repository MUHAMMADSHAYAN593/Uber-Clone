import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


const UserSignup = () => {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newuser = {
      fullname: {
        firstname: formData.firstname,
        lastname: formData.lastname
      },
      email: formData.email,
      password: formData.password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newuser);
    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
   
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  }





  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto px-4 py-4 flex-grow'>
        <img 
          className='w-10 mb-4' 
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
          alt="Uber Logo" 
        />
        
        <div className='space-y-4'>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <h3 className='text-base font-medium mb-1'>First Name</h3>
              <input 
                required 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                type="text"
                name="firstname"
                placeholder='John'
                value={formData.firstname}
                onChange={handleChange}
                minLength={3}
              />
            </div>
            <div className='flex-1'>
              <h3 className='text-base font-medium mb-1'>Last Name</h3>
              <input 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                type="text"
                name="lastname"
                placeholder='Doe'
                value={formData.lastname}
                onChange={handleChange}
                minLength={3}
              />
            </div>
          </div>

          <div>
            <h3 className='text-base font-medium mb-1'>Email</h3>
            <input 
              required 
              className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
              type="email"
              name="email"
              placeholder='email@example.com'
              value={formData.email}
              onChange={handleChange}
              minLength={10}
            />
          </div>

          <div>
            <h3 className='text-base font-medium mb-1'>Password</h3>
            <input 
              required 
              className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
              type="password"
              name="password"
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              minLength={6}
            />
          </div>

          <button 
            type="submit"
            className='bg-black text-white font-semibold rounded px-3 py-2 w-full text-base hover:bg-gray-800 transition-colors mt-3'
          >
            Create account
          </button>

          <p className='text-center text-sm text-gray-600 mt-4'>
            Already have an account? 
            <a href="/login" className='text-black font-medium ml-1 hover:underline'>
              Login Here
            </a>
          </p>
        </div>
      </form>
      <div className='max-w-md mx-auto px-4 py-4 mt-auto'>
        <p className='text-xs text-gray-500 text-center'>
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}

export default UserSignup
