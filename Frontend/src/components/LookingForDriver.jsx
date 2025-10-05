import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <div className="relative bg-white rounded-t-3xl shadow-lg px-5 pt-10 pb-6 w-full max-w-md mx-auto border border-gray-200">
      
      {/* Collapse / Close Arrow */}
      <button
        onClick={() => {props.setvehicleFound(false)}
        }
        className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-200 hover:bg-gray-300 transition p-1 rounded-full z-[100]"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-700 z-[100]"></i>
      </button>

      {/* Header */}
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">
        Looking for a Driver...
      </h3>

      {/* Vehicle Image */}
      <div className="flex justify-center mb-6">
        <img
          className="h-24 w-auto"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
          alt="Car"
        />
      </div>

      {/* Ride Details */}
      <div className="space-y-4">
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

    </div>
    </div>
  )
}

export default LookingForDriver
