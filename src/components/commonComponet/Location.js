import React from "react";

function Location() {
  return (
    <>
      <div className="my-10 mx-5">
        <div className="md:flex justify-between">
          <div>
            <p className="text-gray-400">Address</p>
            <p className="w-3/4">
              Nakabadii chak, Mumbai, 144008, Maharastra, Near some mall
            </p>
          </div>
          <img src="/images/map.svg " />
        </div>
      </div>
    </>
  );
}

export default Location;
