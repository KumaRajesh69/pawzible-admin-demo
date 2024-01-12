import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function DogCard({ setIsOpen }) {
  return (
    <div className="p-5">
      <div className="p-5 space-y-5">
        <div className="flex justify-between ">
          <p className="font-semibold text-xl text-orangePrimery">
            {" "}
            Dog Walking
          </p>
          <button onClick={() => setIsOpen(false)}>
            <XCircleIcon className="text-red-600 h-5" />
          </button>
        </div>
        <div>
          <div>
            <p className="font-semibold text-sm text-[#727272]">Sub-category</p>
            <select
              id="role"
              name="role"
              className="mt-1 p-2 w-full border rounded-md text-[#999999]"
            >
              <option value="user">Select Sub-category</option>
              <option value="admin">Select 2</option>
              <option value="admin">Select 3</option>
            </select>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-2">
              <div className="flex space-x-2 rounded-md bg-[#E8F4F7] px-2 py-1 w-max">
                <div className=" felx">
                  <p className="font-normal text-[#6A6A6A] text-base">
                    Nail clipping
                  </p>
                </div>
                <button>
                  <img src="images/x.svg" />
                </button>
              </div>{" "}
              <div className="flex space-x-2 rounded-md bg-[#E8F4F7] px-2 py-1 w-max">
                <div className=" felx">
                  <p className="font-normal text-[#6A6A6A] text-base">
                    Nail clipping
                  </p>
                </div>
                <button>
                  <img src="images/x.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm text-[#727272]">Price</p>
          <input
            type="text"
            placeholder="Price"
            className="mt-1 p-2 w-full border rounded-md h-12"
          />
        </div>{" "}
        <div>
          <p className="font-semibold text-sm text-[#727272]">Discount</p>
          <input
            type="text"
            placeholder="Price"
            className="mt-1 p-2 w-full border rounded-md h-12"
          />
        </div>{" "}
        <div>
          <p className="font-semibold text-sm text-[#727272]">Upload Image</p>
          <input
            type="text"
            placeholder="Click Here to Upload"
            className="mt-1 p-2 w-full border rounded-md h-12"
          />
        </div>
      </div>
      <button className="bg-orangePrimery w-full flex justify-center h-12 text-white items-center rounded-lg">
        Save
      </button>
    </div>
  );
}

export default DogCard;
