import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function AddNew({ setIsOpen }) {
  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center">
        <p>Coupon Code</p>
        <button onClick={() => setIsOpen(false)}>
          <XCircleIcon className="h-8 text-red-600" />
        </button>
      </div>
      <div className="p-5">
        <form className="space-y-4">
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">Title</p>
            <input
              type="text"
              placeholder="Enter Your Title"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">Code</p>
            <input
              type="text"
              placeholder="Enter Your terms & condition"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">
              Discount Type
            </p>
            <select
              id="role"
              name="role"
              className="mt-1 p-2 w-full border rounded-md text-[#727272]"
            >
              <option value="user">Select</option>
              <option value="admin">Select 2</option>
              <option value="admin">Select 3</option>
            </select>
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">Discount</p>
            <input
              type="text"
              placeholder="Enter the discount"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">
              Specification
            </p>
            <input
              type="text"
              placeholder="Service Package"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">
              Upload Image
            </p>
            <input
              type="text"
              placeholder="Click Here to Upload"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">Description</p>
            <input
              type="text"
              placeholder="Enter Your description"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>{" "}
          <div className="">
            <p className=" text-sm font-semibold text-[#727272]">
              Terms & Condition
            </p>
            <input
              type="text"
              placeholder="Enter Your terms & condition"
              className="mt-1 p-2 w-full border rounded-md h-12"
            />
          </div>
          {/* <div class="mb-4">
            <label
              for="profileImage"
              class="block text-sm font-medium text-gray-600"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div> */}
        </form>
      </div>
      <button className="bg-orangePrimery w-full flex justify-center h-12 text-white items-center rounded-lg">
        Add
      </button>
    </div>
  );
}

export default AddNew;
