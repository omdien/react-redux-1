import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/TestSlice";

const AddTest = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const updateTest = (e) => {
    e.preventDefault();
    dispatch(update({ title, price }));
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="p-4">
            <form onSubmit={updateTest}>
              <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Update Barang
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="title"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Harga
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
                <button className="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTest;
