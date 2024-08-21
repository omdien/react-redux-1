import React from "react";
import AddTest from "./AddTest";
import ShowTest from "./ShowTest";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { buka } = useSelector((state) => state.closeOpen); //destructuring
  return (
    // <div className="w-full p-5 mx-auto border columns-2 rounded-2xl">
    //   <h1>Selamat Datang</h1>
    //   <h2>Silahkan Tambahkan dan Tampilkan Data</h2>
    // </div>
    <div className={`${buka ? "ml-72" : "ml-16"} duration-500`}>
      <div className="justify-between sm:flex">
        <div className="basis-1/2">
          <AddTest />
        </div>
        <div className="basis-1/2">
          <ShowTest />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
