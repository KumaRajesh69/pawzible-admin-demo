import Link from "next/link";
import React from "react";

function OrderManagementTable2({ table }) {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Name</th>
              <th>Payment ID</th>
              <th>Specialization</th>
              <th>Disease</th>
              <th>Hospital</th>
              <th>Date & Time</th>
              <th>Price</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.payment}</td>
                <td className="table__body__text">{item.specialization}</td>
                <td className="table__body__text">{item.disease}</td>
                <td>{item.hospital}</td>
                <td className="table__body__text">
                  <div>
                    <div> {item.date}</div>
                    <div>{item.time}</div>
                  </div>
                </td>
                <td className="table__body__text">{item.price}</td>
                <td>
                  <button className="td_Button">{item.status}</button>
                </td>
                <td className="table__body__text">
                  <button className="text-orangePrimery">{item.details}</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* </div> */}
      </div>
    </div>
  );
}

export default OrderManagementTable2;
