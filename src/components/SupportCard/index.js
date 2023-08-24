import React from "react";

const SupportCard = ({ item }) => {
  return (
    <div className="p-4 rounded-md shadow bg-white  space-y-3">
      <div className="flex justify-between space-x-3">
        <div className="flex space-x-2">
          <img src={item.image} className="w-10" />
          <div>
            <div className="text-base font-medium">{item.name}</div>
            <div className="text-gray-500 text-sm">{item.email}</div>
          </div>
        </div>
        <div className="text-gray-500 text-xs">{item.date}</div>
      </div>
      <div className="h-px w-full bg-gray-300 my-3"></div>
      <p className="text-gray-500 text-sm font-">{item.para}</p>
      <button className="bg-orange-300 w-full h-8 text-white rounded">
        {item.buton}
      </button>
    </div>
  );
};

export default SupportCard;
