import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
        <Link to={'/home'} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full z-20">
        <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
      {/* Top Half - Map */}
      <div className="h-1/2 w-full relative">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-9Ex1_ujjgEaEvQe3FHn_ME3lxR_jyMWzw&s"
          alt="Map"
        />
        {/* Overlay info on map */}
        <div className="absolute top-5 left-5 bg-white shadow-md px-4 py-2 rounded-xl">
          <h3 className="text-sm font-medium text-gray-800">En Route</h3>
          <p className="text-xs text-gray-500">5 min remaining</p>
        </div>
      </div>

      {/* Bottom Half - Ride Details */}
      <div className="h-1/2 bg-white rounded-t-3xl -mt-4 p-5 shadow-2xl">
        {/* Top line to indicate draggable panel */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

        {/* Ride Info */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt="Driver"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Salman Khan</h4>
              <p className="text-sm text-gray-500">4.9 ★ | White Suzuki Alto</p>
            </div>
          </div>
          <div className="text-right">
            <h5 className="font-semibold text-gray-800">KA15AK00-0</h5>
            <p className="text-sm text-gray-500">2 min away</p>
          </div>
        </div>

        {/* Trip route details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <i className="ri-map-pin-2-fill text-green-600 text-xl"></i>
            <div>
              <h4 className="text-base font-medium text-gray-900">562/11-A</h4>
              <p className="text-sm text-gray-600">Qayyumabad, Karachi</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="ri-map-pin-user-fill text-red-600 text-xl"></i>
            <div>
              <h4 className="text-base font-medium text-gray-900">LuckyOne Mall</h4>
              <p className="text-sm text-gray-600">Rashid Minhas Rd, Karachi</p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-lg font-medium">Total Fare</span>
          <span className="text-xl font-bold text-gray-900">$190</span>
        </div>

        {/* Confirm Payment Button */}
        <button className="w-full bg-black text-white font-semibold text-lg py-3 rounded-lg shadow-md hover:bg-gray-900 transition">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
