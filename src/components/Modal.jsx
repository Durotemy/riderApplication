import React, { useEffect, useState } from "react";
import { addRiderinfo } from "../apiCalls";

const Modal = ({ closeModal }) => {
  const [addRider, setAddRider] = useState({
    name: "",
    phone: "",
    password: "",
    costPerKm: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await addRiderinfo(addRider);
        console.log("got here!",response)
        setAddRider(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const createRider = () => {
    setAddRider({
      name: "",
      phone: "",
      password: "",
      costPerKm: "",
    });
  };

  return (
    <div className=" fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        <div className="py-4 px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-center flex-1">Add Rider</h2>
            <p
              className="text-2xl cursor-pointer ml-auto text-[#B80304]"
              onClick={closeModal}
            >
              X
            </p>
          </div>
          <div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                value={addRider.name}
                type="text"
                placeholder="Name"
                onChange={(e) => setAddRider({ ...addRider, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                value={addRider.phone}
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setAddRider({ ...addRider, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Cost Per Km
              </label>
              <input
                value={addRider.costPerKm}
                type="text"
                placeholder="Cost Per Km"
                onChange={(e) => setAddRider({ ...addRider, costPerKm: e.target.value })}

                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input
                value={addRider.password}
                type="password"
                placeholder="Password"
                onChange={(e) => setAddRider({ ...addRider, password: e.target.value })}

                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[grey] text-white font-medium py-2 px-4 rounded-md flex mx-auto"
              onClick={createRider}
            >
              Create Rider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
