import React, { useState } from 'react'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', { email, password })
  }

  return (
    <div className='min-h-screen p-7 bg-white'>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8'>
            <img 
              className='w-16 mb-10' 
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
              alt="Uber Logo" 
            />
            
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-medium mb-2'>What's your Email?</h3>
                <input 
                  required 
                  className='bg-[#eeeeee] rounded px-4 py-3 border border-gray-300 w-full text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                  type="email" 
                  placeholder='email@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <h3 className='text-xl font-medium mb-2'>Enter your Password</h3>
                <input 
                  required 
                  className='bg-[#eeeeee] rounded px-4 py-3 border border-gray-300 w-full text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                  type="password" 
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button 
                type="submit"
                className='bg-black text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-800 transition-colors mt-4'
              >
                Login
              </button>

              <p className='text-center text-gray-600 mt-6'>
                Register As a Captain
                <a href="/captain-signup" className='text-black font-medium ml-1 hover:underline'>
                  Sign up
                </a>
              </p>
              
              <a 
                href="/signup" 
                className='block w-full text-center bg-orange-700 hover:bg-orange-600 text-white font-semibold rounded px-4 py-3 text-lg transition-colors mt-6'
              >
                Sign up as a User
              </a>
            </div>
        </form>
    </div>
  )
}

export default CaptainLogin