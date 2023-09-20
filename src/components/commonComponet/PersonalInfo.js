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
  {
    name: "",
    value: "",
  },
];

function PersonalInfo() {
  return (
    <div>
      <HolderManager />
      <div className="grid md:grid-cols-5 gap-4 mx-5">
        {data.map((each) => (
          <div>
            <p className="text-gray-600">{each.name}</p>
            <p>{each.value}</p>
          </div>
        ))}
      </div>
      <div className="mx-4">
        <p className="my-3 font-semibold text-lg">Documents Uploaded</p>
        <hr />
      </div>
    </div>
  );
}

export default PersonalInfo;
