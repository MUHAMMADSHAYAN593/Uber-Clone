import React, { useState } from 'react'

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',     
    password: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: '',
      vehicleType: 'car' // default value
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith('vehicle.')) {
      const vehicleField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          [vehicleField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', formData)
    // Clear form after submission
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      vehicle: {
        color: '',
        plate: '',
        capacity: '',
        vehicleType: 'car'
      }
    })
  }

  return (
    <div className='min-h-screen bg-white'>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto px-4 py-4'>
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

          <div className='bg-gray-50 p-3 rounded-lg space-y-2'>
            <h2 className='text-base font-bold'>Vehicle Information</h2>
            
            <div>
              <h3 className='text-base font-medium mb-1'>Vehicle Color</h3>
              <input 
                required 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                type="text"
                name="vehicle.color"
                placeholder='e.g., Black'
                value={formData.vehicle.color}
                onChange={handleChange}
              />
            </div>

            <div>
              <h3 className='text-base font-medium mb-1'>License Plate</h3>
              <input 
                required 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                type="text"
                name="vehicle.plate"
                placeholder='e.g., ABC-123'
                value={formData.vehicle.plate}
                onChange={handleChange}
              />
            </div>

            <div>
              <h3 className='text-base font-medium mb-1'>Vehicle Capacity</h3>
              <input 
                required 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                type="number"
                name="vehicle.capacity"
                placeholder='e.g., 4'
                value={formData.vehicle.capacity}
                onChange={handleChange}
                min="1"
              />
            </div>

            <div>
              <h3 className='text-base font-medium mb-1'>Vehicle Type</h3>
              <select 
                required 
                className='bg-[#eeeeee] rounded px-3 py-2 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                name="vehicle.vehicleType"
                value={formData.vehicle.vehicleType}
                onChange={handleChange}
              >
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className='bg-black text-white font-semibold rounded px-3 py-2 w-full text-base hover:bg-gray-800 transition-colors mt-3'
          >
            Sign Up
          </button>

          <p className='text-center text-sm text-gray-600 mt-4'>
            Already have an account? 
            <a href="/captain-login" className='text-black font-medium ml-1 hover:underline'>
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default CaptainSignup
