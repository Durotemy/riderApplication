import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        <div className="py-4 px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-center flex-1">Add Rider</h2>
            <p className="text-2xl cursor-pointer ml-auto text-[#B80304]" onClick={closeModal}>
              X
            </p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Cost Per Km
              </label>
              <input
                type="text"
                placeholder="Cost Per Km"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Cost Per Km
              </label>
              <input
                type="text"
                placeholder="Cost Per Km"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[grey] text-white font-medium py-2 px-4 rounded-md flex mx-auto"
            >
              Create Rider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
