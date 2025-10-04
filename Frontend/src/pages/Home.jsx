import React from 'react'
import HomeImg from '../assets/Home.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-full flex flex-col justify-between' style={{ backgroundImage: `url(${HomeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='p-8'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        </div>
        <div className='w-full px-4 pb-4'>
          <div className='bg-white p-8 rounded-t-lg max-w-md mx-auto'>
            <h2 className='text-3xl font-bold mb-6'>Get Started with Uber</h2>
            <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-4 text-lg font-medium rounded'>Continue</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
