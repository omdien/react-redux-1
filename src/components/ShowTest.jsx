import React from "react";
import { useSelector } from "react-redux";

const ShowTest = () => {
  const { title, price } = useSelector((state) => state.test);  //destructuring
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="p-4">
            <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
              <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                NAMA BARANG
              </h2>
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                {title}
              </h1>
              <h2 className="mt-10 mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                HARGA BARANG
              </h2>
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
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
