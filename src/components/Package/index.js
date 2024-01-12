import React, { useState } from "react";
import CommonDialog from "../Dialogs/CommonDialog";
import ViewDetailsCard from "../SupportCard/ViewDetailsCard";
import DogCard from "./DogCard";

function PackagePage({ table }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-full my-5 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Category</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Discount</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td
                  onClick={() => setIsOpen(true)}
                  className="font-medium text-xl cursor-pointer"
                >
                  {item.name}
                </td>
                <td>
                  <div className="flex  space-x-2 text-lg font-normal text-[#6A6A6A]">
                    <div className="border rounded-md p-0.5 px-1">
                      {item.subcategory1}
                    </div>{" "}
                    <div className="border rounded-md p-0.5 px-1">
                      {item.subcategory2}
                    </div>
                  </div>
                </td>
                <td className="">{item.price}</td>
                <td className="text-[#6A6A6A]">{item.discount}</td>
                <td>
                  <div className="flex space-x-5 justify-center text-lg font-normal text-[#6A6A6A]">
                    <button className="">
                      <img src={item.add} />
                    </button>{" "}
                    <button className="">
                      <img src={item.dlt} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <DogCard isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog>
    </div>
  );
}

export default PackagePage;
