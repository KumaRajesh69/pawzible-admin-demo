import HolderManager from "@/components/commonComponet/HolderManager";
import React from "react";

const data = [
  {
    name: "Email Address",
    value: "shubham@gmail.com",
  },
  {
    name: "Gender",
    value: "Female",
  },
  {
    name: "Phone Number",
    value: "+91 826072467",
  },
  {
    name: "Current Status",
    value: "Approved",
  },
  {
    name: "Gender",
    value: "Male",
  },
  {
    name: "Address",
    value: "Nakabadii chak, Mumbai",
  },
];

function Overview() {
  return (
    <div>
      <HolderManager />
      <div className="flex flex-col">
        <div className="grid grid-cols-5 space-x-2">
          {data.map((item) => (
            <div>
              <p className="text-gray-600 font-normal text-lg">{item.name}</p>
              <p className="text-black font-normal text-lg">{item.value}</p>
            </div>
          ))}
        </div>

        <div>
          <img src="/images/location2.svg" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
