import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

const PendingOrder = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Perform any additional logic based on the selected option
    // Navigate to the desired page based on the selected option
    if (selectedValue === "Ongoing Orders") {
      navigate("/order");
    } else if (selectedValue === "Unpending Orders") {
      navigate("/unpending-orders");
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between mt-8">
          <p className="text-2xl">Orders</p>
          <p className="mt-8 border p-2 flex rounded">
            <div className="">
              <IoMdNotificationsOutline className="text-2xl" color="black" />
            </div>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="Ongoing Orders">Ongoing Orders</option>
              <option value="Unpending Orders">Unpending Orders</option>
            </select>
          </p>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="">
            <tr className="">
              <th className="px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Pick up Address
              </th>
              <th className="px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Delivery Address
              </th>
              <th className="px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Type
              </th>
              <th className="px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Due Date
              </th>
              <th className="px-6 py-6 bg-[#0080FF]  text-xs leading-4 font-lg text-white uppercase tracking-wider border">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                10 yaba Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                2a Louis Solomon CL, Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                Urgent
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                2022-07-09
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-center">
                {/* <button
                className="text-center p-3 bg-[#0080FF] text-white rounded "
                onClick={handleClick}
              >
                Process
              </button>{" "} */}
                <p className="text-[orange]">Ongoing</p>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                {" "}
                10 yaba Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                {" "}
                2a Louis Solomon CL, Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                Emergency
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                2022-07-09
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                <p className="text-[green]">Completed</p>
                {/* <button
                className="text-center p-3 bg-[#0080FF] text-white rounded"
                onClick={handleClick}
              >
                Process
              </button>{" "} */}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                {" "}
                10 yaba Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                {" "}
                2a Louis Solomon CL, Lagos
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                Emergency
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                2022-07-09
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border text-center">
                <p className="text-[#0080FF]">Delivered</p>
                {/* <button
                className="text-center p-3 bg-[#0080FF] text-white rounded"
                onClick={handleClick}
              >
                Process
              </button>{" "} */}
              </td>
            </tr>

            {/* I can add more table rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingOrder;
