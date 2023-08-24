import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="w-max mt-5">
      <div className="text-2xl font-bold ">{title}</div>
      <div className="h-1 mt-1 bg-black rounded-full w-3/5"></div>
    </div>
  );
};

export default Heading;
