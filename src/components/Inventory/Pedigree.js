import React from "react";

const data = [
  {
    name: "Product Name",
    plholder: "Pedigree",
  },
  {
    name: "Product ID",
    plholder: "2835",
  },
  {
    name: "Category",
    plholder: "Food",
  },
  {
    name: "Buying Price",
    plholder: "599",
  },
  {
    name: "Quantity",
    plholder: "19",
  },

  {
    name: "Expiry Date",
    plholder: "11/12/22",
  },
  {
    name: "Availability",
    plholder: "In-stock",
  },
];

function Pedigree() {
  return (
    <div>
      <div className=" w-full max-w-lg rounded shadow-lg p-4 my-10">
        <form>
          <div>
            <p className="text-base font-medium">Pedigree</p>
            <div className="flex justify-center items-center space-x-2">
              <img src="/images/pedigree.svg" />
            </div>
          </div>

          {data.map((item) => (
            <div className="grid grid-cols-12 my-5 ">
              <p className="col-span-4 self-center  text-base font-medium text-gray-700">
                {item.name}
              </p>
              <p className="col-span-8 text-gray-400">{item.plholder}</p>
            </div>
          ))}

          <div className="flex justify-end space-x-5">
            <button className="bg-orangePrimery text-white hover:bg-orange-600 py-2 px-4 rounded focus:outline-none focus:ring focus:bg-orange-400">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pedigree;
