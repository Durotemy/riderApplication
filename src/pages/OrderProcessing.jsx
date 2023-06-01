import React from "react";
const OrderProcessing = () => {
  return (
    <div className="w-11/12">
      <p className="text-2xl mt-4 ml-4">Orders Processing</p>
      <div className="mt-8">
        <p className="text-left ml-24 text-[green] font-bold">Fastest</p>
        <div className="shadow-lg bg-[white] flex justify-between items-center h-[100px] w-10/12 p-10 mx-auto border rounded">
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Rider Name
            </p>
            <p className="font-bold text-[green]">Emmanuel</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div>
            <button className="bg-[green] h-[40px] w-[100px] rounded shadow text-white font-bold">Assign</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-8">
        <p className="text-left ml-24 text-[green] font-bold">Cheapest</p>
        <div className="shadow-lg bg-[white] flex justify-between items-center h-[100px] w-10/12 p-10 mx-auto border rounded">
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Rider Name
            </p>
            <p className="font-bold text-[green]">Emmanuel</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div>
            <button className="bg-[green] h-[40px] w-[100px] rounded shadow text-white font-bold">Assign</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-8">
        <p className="text-left ml-24 text-[green] font-bold">Custom</p>
        <div className="shadow-lg bg-[white] flex justify-between items-center h-[100px] w-10/12 p-10 mx-auto border rounded">
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Rider Name
            </p>
            <p>
                <select className="border p-2">
                    <option>Emmanuel</option>
                    <option>Lawal</option>
                </select>
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Pick up Location
            </p>
            <p>51 doe street asaba</p>
          </div>
          <div>
            <button className="bg-[green] h-[40px] w-[100px] rounded shadow text-white font-bold">Assign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessing;
