import axios from "axios";
const getRiders = "https://onebox.lifebanktest.com/api/dispatch/riders";
const addRider = "https://onebox.lifebanktest.com/api/dispatch/add/rider";

const getRidersList = async () => {
  const response = await axios.get(getRiders);
  return response.data;
};
const addRiderinfo = async (rider) => {
  const response = await axios.post(addRider, rider);
  return response.data;
};
export { getRidersList, addRiderinfo };
