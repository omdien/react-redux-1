import React from "react";
import { useSelector } from "react-redux";

const ShowTest = () => {
  const { title, price } = useSelector((state) => state.test);  //destructuring
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="p-4">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                NAMA BARANG
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-10">
                HARGA BARANG
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {price}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTest;
