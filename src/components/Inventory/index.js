import { AdjustmentsIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import CommonDialog from "../Dialogs/CommonDialog";
import NewProduct from "./NewProduct";
import Pedigree from "./Pedigree";

function Inventory({ table }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div>
      <div className="h-full mb-20 mt-5 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg bg-white">
        <div className="flex p-5">
          <p className="flex flex-1 text-xl font-medium">Products</p>
          <div className="flex space-x-6">
            <button
              className="bg-orangePrimery p-2 rounded-md text-white"
              onClick={() => setIsOpen(true)}
            >
              Add Product
            </button>
            <button className="p-2 rounded-md border flex space-x-2 text-stone-500">
              <AdjustmentsIcon className="rotate-90 h-5" />
              <p>Filters</p>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>ID</th>
              <th>Products</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Buying Price</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Availability</th>
              <th>Details</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td td className="td__Name">
                  {item.id}
                </td>
                <td className="">{item.products}</td>
                <td className="table__body__text">{item.category}</td>
                <td className="table__body__text">{item.subcategory}</td>
                <td className="table__body__text">{item.price}</td>
                <td className="table__body__text">{item.quantity}</td>
                <td className="table__body__text">{item.date}</td>
                <td className="table__body__text">{item.availability}</td>
                <td>
                  <button
                    className="td_Button first-letter:"
                    onClick={() => setDetailsOpen(true)}
                  >
                    {item.details}{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <NewProduct isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog>
      <CommonDialog isOpen={detailsOpen} setIsOpen={setDetailsOpen}>
        <Pedigree />
      </CommonDialog>
    </div>
  );
}

export default Inventory;
