import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GrBike } from "react-icons/gr";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orderprocessing");
  };
  return (
    <main className="text-black w-full">
      <div className="w-full">
        <p className="ml-2 mt-4">DashBoard</p>
        <div className="flex  justify-between  w-full mx-auto mt-4">
          <div>
            <h1 className="ml-2 text-2xl font-bold">Hello Admin</h1>
          </div>
        </div>
        <div className="flex justify-around w-11/12 mx-auto mt-4">
          <div className="h-[150px] w-3/12 rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-blue-600 bg-transparent text-black shadow-lg">
            <IoPaperPlaneOutline className="text-4xl" color="black" />
            <p className="text-2xl">10</p>
            <p className="text-2xl">Ongoing orders</p>
          </div>
          <div className="h-[150px] w-3/12 rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-red-600 bg-transparent text-black shadow-lg">
            <HiOutlineSpeakerphone className="text-4xl" color="black" />
            <p className="text-2xl">20</p>
            <p className="text-2xl">pending orders</p>
          </div>
          <div className="h-[150px] w-3/12 rounded-xl flex flex-col items-center justify-center cursor-pointer  border border-green-600 bg-transparent text-black shadow-lg">
            <GrBike className="text-4xl" color="white" />
            <p className="text-2xl">40</p>
            <p className="text-2xl">Riders</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-12">
        <p className="text-2xl font-bold">Pending Orders </p>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead>
            <tr className="py-8">
              <th className="mx-auto px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Pick up Address
              </th>
              <th className="mx-auto px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Delivery Address
              </th>
              <th className="mx-auto px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Type
              </th>
              <th className="mx-auto px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Due date
              </th>
              <th className="mx-auto px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                {/* <button className="bg-[white] text-black py-4 px-6 border rounded">
                  Process
                </button> */}
                {/* <p className="mx-auto py-4">Status</p> */}
              </th>
            </tr>
          </thead>
          <tbody className="mx-auto bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
            <tr>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                10 yaba Lagos
              </td>
              <td className="text-center mx-auto px-6 py-4 whitespace-no-wrap border">
                2a Louise Solomon Cl,Lagos
              </td>
              <td className="text-center mx-auto px-6 py-4 whitespace-no-wrap border">
                Urgent
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                22-10-2023
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                <button
                  className="text-center p-3 bg-[#0080FF] text-white rounded"
                  onClick={handleClick}
                >
                  Process
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                10 yaba Lagos
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                2a Louise Solomon Cl,Lagos
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                Emergency
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                22-10-2023
              </td>
              <td className="text-center px-6 py-4 whitespace-no-wrap border">
                <button
                  className="text-center p-3 bg-[#0080FF] text-white rounded"
                  onClick={handleClick}
                >
                  Process
                </button>
              </td>
            </tr>

            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </main>
  );
};
