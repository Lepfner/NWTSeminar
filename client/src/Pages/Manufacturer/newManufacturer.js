import React from "react";
import { Toaster } from "react-hot-toast";
const initialData = {
  name: "",
  price: "",
  image: "",
  type: "",
  desc: "",
  ingredients: "",
};

function NewManufacturer() {
  const updateData = (fields) => {
    //setFormData((prev) => {
    //  return { ...prev, ...fields };
    //});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full"
              onSubmit={handleSubmit}
            >
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">Name:</p>
              <input
                required
                value={initialData.name}
                onChange={(e) => updateData({ name: e.target.value })}
                type="text"
                placeholder="Name"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">City:</p>
              <input
                required
                value={initialData.name}
                onChange={(e) => updateData({ name: e.target.value })}
                type="text"
                placeholder="Price"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Image URL:
              </p>
              <input
                required
                value={initialData.name}
                onChange={(e) => updateData({ name: e.target.value })}
                type="text"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">Year:</p>
              <input
                required
                value={initialData.name}
                onChange={(e) => updateData({ name: e.target.value })}
                type="text"
                placeholder="Type"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Description:
              </p>
              <input
                required
                value={initialData.name}
                onChange={(e) => updateData({ name: e.target.value })}
                type="text"
                placeholder="Description"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <button
                type="submit"
                className="block bg-[#50251f] px-4 rounded-md p-2 my-2 text-white 
                                  hover:bg-[#331713]"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewManufacturer;
