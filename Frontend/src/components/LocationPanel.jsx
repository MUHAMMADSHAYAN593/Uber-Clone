import React from 'react'
import 'remixicon/fonts/remixicon.css';



const LocationPanel = (props) => {

  const recentLocations = [
    { id: 1, label: "Home", address: "24B, Near Kapoor's Cafe, Korangi Karachi", icon: "ri-home-4-fill" },
    { id: 2, label: "Work", address: "Ocean Tower, Clifton Block 2, Karachi", icon: "ri-briefcase-4-fill" },
    { id: 3, label: "Saved Place", address: "LuckyOne Mall, Rashid Minhas Rd, Karachi", icon: "ri-bookmark-3-fill" },
  ];
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Suggested Locations
      </h3>

      {/* Recent / Saved locations */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {recentLocations.map((loc) => (
          <div
            key={loc.id}
          onClick={() => {props.setVehiclePanel(true) , props.setPanelOpen(false)}}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <div className="bg-[#eee] h-12 w-12 flex items-center justify-center rounded-full text-xl text-gray-700">
              <i className={loc.icon}></i>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">{loc.label}</span>
              <span className="text-sm text-gray-600">{loc.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPanel;
