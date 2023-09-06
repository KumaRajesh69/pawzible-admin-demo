import React from "react";
const data = [
  {
    image: "/images/innocent-cat.svg",
    nam: "Jacky",
    mth: " Scottish Fold | 6Month",
    button: " View EMR",
  },
  {
    image: "/images/innocent-cat.svg",
    nam: "Jacky",
    mth: " Scottish Fold | 6Month",
    button: " View EMR",
  },
];
function Pet() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 ">
      {data.map((item) => (
        <div className=" bg-gray-200 rounded p-4 shadow-lg">
          <div className=" flex space-x-2 ">
            <div className="bg-orangePrimery rounded p-1 ">
              <img src="/images/innocent-cat.svg" />
            </div>
            <div>
              <p className="text-sm font-medium">Jacky</p>
              <p className="text-xs font-normal text-gray-500">
                Scottish Fold | 6Month
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-3 py-1 rounded bg-orangePrimery text-white text-xs font-normal">
              View EMR
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pet;
