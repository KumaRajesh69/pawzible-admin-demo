import CommonDialog from "@/components/Dialogs/CommonDialog";
import React, { useState } from "react";
import ServiceProviderCard from "../OrderCard/ServiceProviderCard";

function ServiceProviderTable({ table }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Payment ID</th>
              <th>Name</th>
              <th>Service</th>
              <th>Location</th>
              <th>Date & Time</th>
              <th>Price</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td className="">{item.id}</td>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="text-[#6A6A6A] text-lg font-medium">
                  {item.work}
                </td>{" "}
                <td className="text-[#6A6A6A] text-lg font-medium">
                  {item.address}
                </td>
                <td className="table__body__text">
                  <div>
                    <div> {item.date}</div>
                    <div>{item.time}</div>
                  </div>
                </td>
                <td className="text-[#6A6A6A] text-lg font-medium">
                  {item.price}
                </td>
                <td>
                  <button className="td_Button">{item.status}</button>
                </td>
                <td className="text-center ">
                  <button onClick={() => setIsOpen(true)}>
                    <p className="font-bold text-lg text-orangePrimery">
                      View Details
                    </p>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* </div> */}
      </div>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <ServiceProviderCard isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog>
    </div>
  );
}

export default ServiceProviderTable;
