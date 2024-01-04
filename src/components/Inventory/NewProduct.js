import React, { useState } from "react";

const data = [
  {
    name: "Product Name",
    plholder: "Enter product name",
  },
  {
    name: "Product ID",
    plholder: "Enter product ID",
  },
  {
    name: "Category",
    plholder: "Select product category",
  },
  {
    name: "Buying Price",
    plholder: "Enter buying price",
  },
  {
    name: "Quantity",
    plholder: "Enter product quantity",
  },
  {
    name: "Unit",
    plholder: "Enter product unit",
  },
  {
    name: "Expiry Date",
    plholder: "Enter expiry date",
  },
  {
    name: "Threshold Value",
    plholder: "Enter threshold value",
  },
];

function NewProduct({ isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    // <div className=" w-full rounded shadow-lg p-4">
    //   <form>
    <div className=" w-full max-w-lg rounded shadow-lg p-4 my-10 bg-white">
      <form>
        <div>
          <p className="text-base font-medium">New Product</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="h-20 w-20 border border-dashed  border-gray-400 "></div>
            <div className="text-center">
              <p className="text-gray-400">Drag image here</p>
              <p>or</p>
              <label
                for="image"
                class="cursor-pointer text-blue-300 font-bold py-2 px-4"
              >
                Browse Image
              </label>
              <input type="file" id="image" name="image" class="hidden"></input>
            </div>
          </div>
        </div>

        {data.map((item) => (
          <div className="grid grid-cols-12 my-5 ">
            <p
              for="email"
              className="col-span-4 self-center block text-base font-medium text-gray-700"
            >
              {item.name}
            </p>
            <input
              type="text"
              placeholder={item.plholder}
              class="border rounded w-full py-2 col-span-8 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        ))}

        <div className="flex justify-end space-x-5">
          <button
            // onClick={() => setIsOpen(false)}
            className="text-gray-500 py-2 px-4 rounded border focus:ring"
          >
            Discard
          </button>
          <button class="bg-orangePrimery text-white hover:bg-orange-600 py-2 px-4 rounded focus:outline-none focus:ring focus:bg-orange-400">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
