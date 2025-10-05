import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css";
import CaptainDetails from './CaptainDetails';
import RidePop from '../components/RidePop';
import ConfirmRidePop from '../components/ConfirmRidePop';

const CaptainHome = () => {

  const [ridePopPanel, setridePopPanel] = useState(true)
  const [ConfirmedridePopPanel, setConfirmedridePopPanel] = useState(false)

  const ridePopPanelRef = useRef(null) 
  const ConfirmenRideridePopPanelRef = useRef(null) 

  useGSAP(function () {
    if (ridePopPanel) {
      gsap.to(ridePopPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridePopPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopPanel])

  useGSAP(function () {
    if (ConfirmedridePopPanel) {
      gsap.to(ConfirmenRideridePopPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ConfirmenRideridePopPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ConfirmedridePopPanel])

  return (
    <div className="h-screen w-full relative">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-20">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      {/* Map Section (Full Screen) */}
      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-9Ex1_ujjgEaEvQe3FHn_ME3lxR_jyMWzw&s"
          alt="Map"
        />
      </div>

      {/* Floating Bottom Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-3xl shadow-lg z-10">
        <CaptainDetails/>
      </div>

      <div ref={ridePopPanelRef} className='fixed z-60 bottom-0  bg-white p-5 py-6 pt-12 w-full shadow-lg'>
        <RidePop setridePopPanel={setridePopPanel} setConfirmedridePopPanel={setConfirmedridePopPanel}/>
      </div>
      <div ref={ConfirmenRideridePopPanelRef} className='fixed z-60 bottom-0 h-screen bg-white p-5 py-6 pt-12 w-full shadow-lg'>
        <ConfirmRidePop setConfirmedridePopPanel={setConfirmedridePopPanel} setridePopPanel={setridePopPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;