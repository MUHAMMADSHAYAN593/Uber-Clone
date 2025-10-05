import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePop = (props) => {


    const [OTP, setOTP] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        // Your form submission logic here
    }

    return (
        // Wrapper to create a full-screen overlay effect
        <div className='flex items-end z-50'>
            {/* Main Panel */}
            <div className="relative bg-white rounded-t-3xl shadow-lg pt-12 pb-6 px-6 w-full max-w-md mx-auto">

                {/* Collapse / Close Handle */}
                <button
                    onClick={() => { props.setConfirmedridePopPanel(false) }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-300 rounded-full"
                ></button>

                {/* Header */}
                <h3 className="text-xl font-bold text-center mb-5 text-gray-900">
                    Confirm This Ride to Start
                </h3>

                {/* Rider Info Banner */}
                <div className='flex justify-between items-center bg-yellow-400 p-3 rounded-xl mb-6'>
                    <div className='flex items-center gap-3'>
                        <img className='h-12 w-12 object-cover rounded-full border-2 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s" alt="Rider" />
                        <div>
                            <h3 className='text-md font-bold text-gray-800'>Shayan Khan</h3>
                            <p className='text-xs text-gray-700 font-medium'>Pickup is nearby</p>
                        </div>
                    </div>
                    <h5 className='text-lg font-bold text-gray-800'>2.2 KM</h5>
                </div>

                {/* Ride Details */}
                <div className="space-y-4">
                    {/* Pickup */}
                    <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="text-green-600 text-xl mt-1">
                            <i className="ri-map-pin-2-fill"></i>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">562/11-A</h3>
                            <p className="text-sm text-gray-500">Qayyumabad, Karachi</p>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="text-red-600 text-xl mt-1">
                            <i className="ri-map-pin-user-fill"></i>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">24B, Korangi</h3>
                            <p className="text-sm text-gray-500">Near Kapoor's Cafe, Karachi</p>
                        </div>
                    </div>

                    {/* Fare */}
                    <div className="flex items-start gap-4">
                        <div className="text-yellow-500 text-xl mt-1">
                            <i className="ri-currency-line"></i>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">$190</h3>
                            <p className="text-sm text-gray-500">Cash Payment</p>
                        </div>
                    </div>
                </div>

                {/* Actions Form */}
                <div className='mt-6'>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <input 
                        value={OTP}
                        onChange={(e)=>{
                            setOTP(e.target.value)
                        }}
                            type="text" 
                            placeholder='Enter OTP from customer' 
                            className="w-full px-4 py-3 mb-4 text-center font-semibold border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        />
                        <Link to={'/captain-riding'} className="flex justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-md transition">
                            Confirm
                        </Link>
                        <button type="button" onClick={() => { props.setConfirmedridePopPanel(false) }} className="mt-3 w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 rounded-xl shadow-md transition">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePop