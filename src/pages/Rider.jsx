import React, { useState } from "react";
import Modal from "../components/Modal";

const Rider = () => {
  const [openModal, setOpenModal] = useState(false);

  const OpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between">
        {openModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <Modal closeModal={closeModal} />
          </div>
        )}
        <div className="mt-8 w-full">
          <p className="text-2xl">Riders</p>
          <div className="mt-12 flex justify-end">
            <button
              className="bg-[#0080FF] h-[50px] w-[130px]  text-white rounded"
              onClick={OpenModal}
            >
              Add Riders
            </button>
          </div>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200 w-10/12 mx-auto mt-8">
        <thead className="">
          <tr className="">
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              N/0
            </th>
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Name
            </th>
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Coverage Area
            </th>
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Cost per Km
            </th>
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              Created On
            </th>
            <th className="px-6 py-6 bg-[#0080FF] text-left text-xs leading-4 font-lg text-white uppercase tracking-wider border">
              <p>Status</p>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">1</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Lagos</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Ibadan</td>
            <td className="px-6 py-4 whitespace-no-wrap border">100 per Km</td>
            <td className="px-6 py-4 whitespace-no-wrap border">22-10-23</td>
            <td className="px-6 py-4 whitespace-no-wrap border text-[orange]">Disable</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">2</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Kenya</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Nigeria</td>
            <td className="px-6 py-4 whitespace-no-wrap border">100 per Km</td>
            <td className="px-6 py-4 whitespace-no-wrap border">22-10-23</td>
            <td className="px-6 py-4 whitespace-no-wrap border text-[green]">Enable</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">3</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Lagos</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Ibadan</td>
            <td className="px-6 py-4 whitespace-no-wrap border">100 per Km</td>
            <td className="px-6 py-4 whitespace-no-wrap border">22-1--23</td>
            <td className="px-6 py-4 whitespace-no-wrap border text-[orange]">Disable</td>
          </tr>

          {/* Add more table rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Rider;
