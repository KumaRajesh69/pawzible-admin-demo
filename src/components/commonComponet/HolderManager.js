import React from "react";

function HolderManager() {
  return (
    <>
      <div className=" my-8 ">
        <div className="md:flex items-center  rounded-xl  shadow-lg  w-full md:h-44 h-full space-x-3 space-y-3">
          <div class="p-4 flex justify-center items-center">
            <img
              src="/images/Ellipse5.svg"
              alt="person"
              class="rounded-full shadow-md"
            />
          </div>
          <div className="md:flex items-end md:space-x-5 flex-1">
            <div className="space-y-5 ">
              <p className="text-xl font-normal">Good Morning,</p>
              <p className="text-3xl font-medium text-orangePrimery">
                Ethel Howard
              </p>
            </div>
            <div className="flex space-x-1 mt-2 md:mt-0">
              <img className="" src="/images/location.svg" />
              <p className="text-gray-700 text-base font-normal">
                Mumbai,India
              </p>
            </div>
            <div className="flex space-x-2 font-semibold text-base">
              <img src="/images/call.svg" />
              <p>Call</p>
            </div>
            <div className="flex space-x-2 font-semibold text-base">
              <img src="/images/sms.svg" />
              <p>Chat</p>
            </div>
          </div>
          <div className="px-10">
            <img src="/images/dog-foot.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HolderManager;
