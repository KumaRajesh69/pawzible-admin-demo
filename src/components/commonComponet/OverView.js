import React from "react";
import HolderManager from "./HolderManager";

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

const data2 = [
  {
    name: "Dentist",
  },
  {
    name: "Surgical procedures",
  },
];

const data3 = [
  {
    doc: "Practice Certificate.pdf",
  },
  {
    doc: "ID Proof.pdf",
  },
];
function OverView() {
  return (
    <div>
      <HolderManager />
      <div className=" rounded-lg shadow-2xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 ">
          {data.map((item) => (
            <div>
              <p className="text-gray-600 font-normal text-lg">{item.name}</p>
              <p className="text-black font-normal text-lg">{item.value}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="my-4 font-medium text-lg">Specialisation :</p>
          <div className="text-base text-gray-500 font-normal">
            {data2.map((item) => (
              <li>{item.name}</li>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-base">Documents Uploaded:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 ">
            {data3.map((item) => (
              <div className="bg-[#EBEBEB] p-2 rounded-lg w-max">
                <a className="font-semibold text-base text-[#DC3E3E] cursor-pointer">
                  {item.doc}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
