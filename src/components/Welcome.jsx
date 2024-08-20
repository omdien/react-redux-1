import React from "react";
import AddTest from "./AddTest";
import ShowTest from "./ShowTest";

const Welcome = () => {
  return (
    <div className="container">
    <div className="flex justify-center">
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
