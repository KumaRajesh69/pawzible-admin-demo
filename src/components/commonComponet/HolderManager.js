import React from "react";

function HolderManager() {
  return (
    <>
      <div className="mx-5 my-8">
        <div className="flex items-center  rounded-xl overflow-hidden  shadow-lg  w-full h-44 space-x-3">
          <div class="p-4 flex ">
            <img
              src="/images/Ellipse5.svg"
              alt="person"
              class="rounded-full shadow-md"
            />
          </div>
          <div className="flex items-end space-x-5 flex-1">
            <div className="space-y-5 ">
              <p className="text-xl font-normal">Good Morning,</p>
              <p className="text-3xl font-medium text-orangePrimery">
                Ethel Howard
              </p>
            </div>
            <div className="flex space-x-1">
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
