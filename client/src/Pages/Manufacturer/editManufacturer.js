import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import checkToken from "../../api/checkAuth";

function ManufacturerForm({ isEditing }) {
  const navigate = useNavigate();
  const { manufacturerId } = useParams();

  const [manufacturerData, setManufacturerData] = useState({
    name: '',
    city: '',
    description: '',
    logo: '',
    year: 0,
  });

  useEffect(() => {
    const result = checkToken();
    if(!result){
      navigate("/")
    }
    const fetchManufacturerData = async () => {
      try {
        const response = await axios.get(`/manufacturer/${window.location.href.slice(39,65)}`);
        setManufacturerData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (isEditing) {
      fetchManufacturerData();
    }
  }, [isEditing, manufacturerId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManufacturerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(`/manufacturers/${window.location.href.slice(39,65)}`, manufacturerData);
      } else {
        await axios.post('/manufacturerCreate', manufacturerData);
      }
      navigate("/manufacturers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-pacifico w-full flex flex-col items-center justify-between">
      <Toaster />
      <div className="h-12 w-full bg-[#50251f] mb-8" />
      <div
        className="h-full flex flex-col justify-center max-w-[75%]
                     outline outline-[#50251f] outline-[1rem] rounded-xl z-0
                     w-[100%]"
      >
        <div className="w-full rounded-xl z-10">
          <div className="flex justify-center items-center">
            <form
              className="flex justify-center items-center flex-col lg:w-4/5 max-md:w-full"
              onSubmit={handleSubmit}
            >
              <p className="lg:text-3xl md:text-2xl sm:text-xl">Name:</p>
              <input
                required
                value={manufacturerData.name}
                onChange={handleInputChange}
                type="text"
                name="name"
                placeholder="Name"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl md:text-2xl sm:text-xl">City:</p>
              <input
                required
                value={manufacturerData.city}
                onChange={handleInputChange}
                type="text"
                name="city"
                placeholder="City"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl md:text-2xl sm:text-xl">
                Description:
              </p>
              <input
                required
                value={manufacturerData.description}
                onChange={handleInputChange}
                type="text"
                name="description"
                placeholder="Description"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl md:text-2xl sm:text-xl">
                Image URL:
              </p>
              <input
                required
                value={manufacturerData.logo}
                onChange={handleInputChange}
                type="text"
                name="logo"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl md:text-2xl sm:text-xl">Year:</p>
              <input
                required
                value={manufacturerData.year}
                onChange={handleInputChange}
                type="number"
                name="year"
                placeholder="Year"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <button
                type="submit"
                className="block bg-[#50251f] px-4 rounded-md p-2 my-2 text-white 
                                  hover:bg-[#331713]"
              >
                {isEditing ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditManufacturer() {
  return <ManufacturerForm isEditing />;
}

function NewManufacturer() {
  return <ManufacturerForm />;
}

export { NewManufacturer, EditManufacturer };
