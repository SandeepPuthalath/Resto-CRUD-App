import React from "react";
import { instance } from "../../api/api";

const AddRestoForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    contact: "",
  });
  const [status, setStatus] = React.useState(false);
  const [message, setMessage] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    instance
      .post("/restaurant", formData)
      .then((res) => {
        console.log(res);
        setFormData({
          name: "",
          address: "",
          contact: "",
        });
        setMessage(res.data?.message)
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        {status && (
          <div className="flex flex-wrap -mx-3 mb-6 bg-green-50">
            <h3 className="text-xl text-green-600">{message}</h3>
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="name"
            >
              name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter the Resto Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="contact-info"
            >
              Contact info
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contact"
              name="contact"
              type="text"
              onChange={handleChange}
              placeholder="Enter the Mobile Number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-address"
            >
              Address
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-address"
              type="text"
              name="address"
              placeholder="Enter Address"
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="flex flex-wrap -mx-3 mb-6 justify-end">
          <button
            type="submit"
            className="px-4 py-2 focus:bg-blue-400 border bg-blue-200 focus:text-white rounded uppercase text-sm font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRestoForm;
