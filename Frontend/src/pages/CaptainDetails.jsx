import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      {/* Driver Info */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="Driver"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Shayan Khan</h4>
              <p className="text-sm text-gray-500">⭐ 4.9 | Karachi</p>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-bold text-gray-900">$200</h4>
            <p className="text-sm text-gray-600">Earned today</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 text-center mt-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition">
            <i className="ri-timer-2-line text-2xl text-blue-600 mb-1"></i>
            <h5 className="text-sm font-medium">Online Time</h5>
            <p className="text-gray-600 text-xs">3h 20m</p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition">
            <i className="ri-speed-up-line text-2xl text-green-600 mb-1"></i>
            <h5 className="text-sm font-medium">Trips</h5>
            <p className="text-gray-600 text-xs">12 Completed</p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition">
            <i className="ri-booklet-line text-2xl text-purple-600 mb-1"></i>
            <h5 className="text-sm font-medium">Ratings</h5>
            <p className="text-gray-600 text-xs">4.9 Avg</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
