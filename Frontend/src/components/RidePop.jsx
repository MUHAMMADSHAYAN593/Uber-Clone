import React from 'react'

const RidePop = (props) => {
    return (
        <div className="relative rounded-t-3xl shadow-lg px-5 pt-10 pb-6 w-full max-w-md mx-auto border border-gray-200">

            {/* Collapse / Close Arrow */}
            <button
                onClick={() => { props.setridePopPanel(false) }
                }
                className="absolute top-2 left-1/2 transform -translate-x-1/2 transition p-1 rounded-full z-[100]"
            >
                <i className="ri-arrow-down-wide-line text-2xl text-gray-700 z-[100]"></i>
            </button>

            {/* Header */}
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">
                NEW RIDE REQUEST
            </h3>

            <div className='flex justify-between items-center bg-yellow-400 p-3 rounded-xl'>
                <div className='flex items-center gap-4'>
                    <img className='h-10 w-10 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s" alt="" />
                    <h3 className='text-lg font-medium'>Shayan Khan</h3>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            {/* Ride Details */}
            <div className="space-y-4 mt-2">
                {/* Pickup */}
                <div className="flex items-start gap-4">
                    <div className="text-green-600 text-xl mt-1">
                        <i className="ri-map-pin-2-fill"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
                        <p className="text-sm text-gray-600">Qayyumabad, Karachi</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-start gap-4">
                    <div className="text-red-600 text-xl mt-1">
                        <i className="ri-map-pin-user-fill"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">24B, Korangi</h3>
                        <p className="text-sm text-gray-600">Near Kapoor's Cafe, Karachi</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-start gap-4">
                    <div className="text-yellow-500 text-xl mt-1">
                        <i className="ri-currency-line"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">$190</h3>
                        <p className="text-sm text-gray-600">Cash Payment</p>
                    </div>
                </div>
            </div>

            {/* Confirm Button */}
            <div className='flex items-center justify-between'>
                <button onClick={() => { props.setridePopPanel(false) , props.setConfirmedridePopPanel(true) }} className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition">
                Accept Ride
            </button>
            <button onClick={() => { props.setridePopPanel(false) }} className="mt-4 bg-gray-400 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition">
                Ignore Ride
            </button>
            </div>
        </div>
    )
}

export default RidePop
