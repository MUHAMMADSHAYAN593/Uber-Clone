import React from "react";
import "remixicon/fonts/remixicon.css";

const WaitForDriver = (props) => {
  return (
    <div className="bg-white rounded-t-3xl shadow-lg w-full max-w-md mx-auto p-5 border border-gray-200">
      {/* Top Header */}
      <button
        onClick={() => {props.setwaitingForDriver(false)}
        }
        className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-200 hover:bg-gray-300 transition p-1 rounded-full z-[100]"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-700 z-[100]"></i>
      </button>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Meet at the pickup point
        </h3>
        <div className="bg-black text-white text-sm font-medium px-3 py-1 rounded-md">
          2 min
        </div>
      </div>

      {/* Driver Info */}
      <div className="flex items-center gap-4 mb-5">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Driver"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">KA15AK00-0</h4>
          <p className="text-sm text-gray-600">White Suzuki S-Presso LXI</p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <i className="ri-star-fill"></i>
            <span className="text-gray-700 font-medium">4.9</span>
          </div>
        </div>
        <img
          className="w-16 h-12 rounded-lg object-cover border"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
          alt="Car"
        />
      </div>

      {/* Message Box */}
      <div className="bg-gray-100 rounded-xl flex items-center justify-between px-4 py-2 mb-5">
        <input
          type="text"
          placeholder="Send a message..."
          className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-500"
        />
        <i className="ri-send-plane-fill text-gray-600"></i>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mb-5">
        <div className="flex flex-col items-center text-gray-700">
          <div className="bg-gray-200 p-3 rounded-full mb-1">
            <i className="ri-shield-user-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Safety</span>
        </div>

        <div className="flex flex-col items-center text-gray-700">
          <div className="bg-gray-200 p-3 rounded-full mb-1">
            <i className="ri-share-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Share trip</span>
        </div>

        <div className="flex flex-col items-center text-gray-700">
          <div className="bg-gray-200 p-3 rounded-full mb-1">
            <i className="ri-phone-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Call driver</span>
        </div>
      </div>

      {/* Pickup Location */}
      <div className="border-t pt-4">
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-2-fill text-green-600 text-xl"></i>
          <div>
            <h3 className="text-base font-medium text-gray-900">562/11-A</h3>
            <p className="text-sm text-gray-600">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
