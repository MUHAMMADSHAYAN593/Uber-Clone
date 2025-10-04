import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationPanel from '../components/LocationPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclepanelref = useRef(null)

  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const overlayRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  // Handle GSAP animations for bottom sheet
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.4,
        ease: "power3.out"
      });
      gsap.to(panelClose.current, {
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(overlayRef.current, {
        opacity: 0.5,
        pointerEvents: "auto",
        duration: 0.3
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        duration: 0.4,
        ease: "power3.inOut"
      });
      gsap.to(panelClose.current, {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3
      });
    }
  }, [panelOpen]);


  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])



  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5 z-20"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Map placeholder */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-9Ex1_ujjgEaEvQe3FHn_ME3lxR_jyMWzw&s"
          alt="Map Placeholder"
        />
      </div>

      {/* Overlay when panel is open */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 z-10 pointer-events-none"
        onClick={() => setPanelOpen(false)}
      ></div>

      {/* Bottom panel */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full z-20">
        {/* Search box */}
        <div className="h-[30%] p-6 bg-white relative shadow-lg">
          <h5
            ref={panelClose}
            onClick={() => setPanelOpen(!panelOpen)}
            className="absolute top-6 right-2 text-2xl opacity-0 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => { setPanelOpen(true); }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              onClick={() => { setPanelOpen(true); }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Expandable Panel */}
        <div
          ref={panelRef}
          className="bg-white h-0 overflow-y-auto rounded-t-xl shadow-2xl"
        >
          <LocationPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} />
        </div>
      </div>

      {/* Ride type card */}
      <div ref={vehiclepanelref} className='fixed z-60 bottom-0 translate-y-full bg-white p-5 w-full shadow-lg'>
        <h5 onClick={()=>{
          setVehiclePanelOpen(false);
        }}  className='p-1 text-center w-[93%] absolute top-0'><i className='ri-arrow-down-wide-line text-3xl'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div className='flex items-center border border-gray-800 rounded-xl p-4 my-3 justify-between'>
          <div className='flex items-center gap-3'>
            <img
              className='h-10'
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
              alt="Uber Go"
            />
            <div>
              <h4 className='font-semibold'>Uber Go <span className='ml-1 text-gray-500 text-sm'><i className='ri-user-3-fill'></i>4</span></h4>
              <p className='text-sm text-gray-600'>Affordable, compact rides</p>
            </div>
          </div>
          <div className='text-right'>
            <h5 className='font-medium'>2 mins away</h5>
            <h2 className='text-lg font-bold'>$190</h2>
          </div>
        </div>


        <div className='flex items-center border border-gray-800 rounded-xl p-4 my-3 justify-between'>
          <div className='flex items-center gap-3'>
            <img
              className='h-10'
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
              alt="Uber Go"
            />
            <div>
              <h4 className='font-semibold'>Uber Go <span className='ml-1 text-gray-500 text-sm'><i className='ri-user-3-fill'></i>4</span></h4>
              <p className='text-sm text-gray-600'>Affordable, compact rides</p>
            </div>
          </div>
          <div className='text-right'>
            <h5 className='font-medium'>2 mins away</h5>
            <h2 className='text-lg font-bold'>$190</h2>
          </div>
        </div>

      </div> 


    </div>
  );
};

export default Home;
