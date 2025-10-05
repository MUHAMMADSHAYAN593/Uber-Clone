import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";
import CaptainFinishRide from '../components/CaptainFinishRide';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setfinishRidePanel] = useState(false)

    const finishRidepanleRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidepanleRef.current, {
                transform: 'translateY(0)',
            })
        } else {
            gsap.to(finishRidepanleRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel])

    return (
        <div className="h-screen w-full relative">

            {/* Header - Styled as a floating element */}
            <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-20">
                <img
                    className="w-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                />
                <Link
                    to="/captain-home"
                    className="h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
                >
                    <i className="ri-logout-box-r-line text-lg font-medium text-gray-800"></i>
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

            {/* Floating Bottom Panel - Redesigned */}
            <div onClick={() => {
                setfinishRidePanel(true)
            }} className="absolute bottom-0 left-0 w-full bg-yellow-400 p-6 rounded-t-3xl shadow-2xl z-10">
                <div className='relative flex items-center justify-between gap-4'>
                    {/* This button is now positioned relative to the panel's content */}
                    <button
                        onClick={() => {
                            
                        }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 p-1 rounded-full"
                    >
                        <i className="ri-arrow-up-s-line text-2xl text-gray-700"></i>
                    </button>

                    <h4 className='text-xl font-bold text-gray-900'>4 KM away</h4>

                    <button className='bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-800 transition'>
                        Complete Ride
                    </button>
                </div>
            </div>

            <div ref={finishRidepanleRef} className='fixed z-60 bottom-0 translate-y-full bg-white p-5 py-6 pt-12 w-full shadow-lg'>
                <CaptainFinishRide/>
            </div>

        </div>
    )
}

export default CaptainRiding