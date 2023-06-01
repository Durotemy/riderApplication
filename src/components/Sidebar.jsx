import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { MdOutlinePedalBike } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdOutlineFingerprint } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#0080FF] text-white w-2/12  h-screen">
      <div className="lg:px-4 lg:py-4 px-2 py-2 mt-20 flex space-x-4">
        <div>
          <MdDashboard className="lg:text-4xl text-2xl" color="white" />
        </div>
        <a href="/" className="lg:text-2xl md:text-1xl text-1xl font-semibold mt-1">
          DashBoard
        </a>
      </div>
      <nav className="">
        <ul className="space-y-3">
          <li className="lg:px-4 lg:py-4 px-2 py-2 cursor-pointer flex gap-4">
            <div>
              <FiTruck className="lg:text-4xl text-2xl" color="white" />
            </div>
            <a href="/order" className="lg:text-2xl text-1xl">
              Order
            </a>
          </li>
          <li className="lg:px-4 lg:py-4 px-2 py-2 cursor-pointer flex gap-4">
            <div>
              <MdOutlinePedalBike className="lg:text-4xl text-2xl" color="white" />
            </div>
            <a href="Rider" className="lg:text-2xl text-1xl">
              Rider
            </a>
          </li>
          <li className="lg:px-4 lg:py-4 px-2 py-2 cursor-pointer flex gap-4">
            <div>
              <FiSettings className="lg:text-4xl text-2xl" color="white" />
            </div>
            <a href="/settings" className=" lg:text-2xl text-1xl">
              Settings
            </a>
          </li>
          {/* <li className="px-4 py-4 cursor-pointer flex gap-4">
            <div>
              <FiSettings className="text-4xl" color="white" />
            </div>
            <a href="/orderprocessing" className=" text-2xl">
              OrderProcessing
            </a>
          </li> */}
        </ul>
        <div className="px-3 py-4 flex fixed bottom-0">
          <MdOutlineFingerprint className="lg:text-4xl text-2xl" color="white" />
          <p className="lg:px-3 lg:py-2 px-2 py-2 lg:text-2xl text-1xl">Logout</p>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
