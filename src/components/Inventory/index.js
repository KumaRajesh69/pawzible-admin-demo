import React from "react";

function Inventory({ table }) {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
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
                  <button className="td_Button">{item.details} </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Inventory;
