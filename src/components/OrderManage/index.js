import React from "react";

function OrderManage({ table }) {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Name</th>
              <th>Payment ID</th>
              <th>Category</th>
              <th>Sub-category</th>
              <th>Date & Time</th>
              <th>Price</th>
              <th>Track</th>
              <th>Status</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.payment}</td>
                <td className="table__body__text">{item.category}</td>
                <td className="table__body__text">{item.subcategory}</td>
                <td className="table__body__text">
                  <div>
                    <div> {item.date}</div>
                    <div>{item.time}</div>
                  </div>
                </td>
                <td className="table__body__text">{item.price}</td>
                <td className="table__body__text">
                  <img src={item.track} />
                </td>
                <td>
                  <button className="td_Button">{item.status}</button>
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

export default OrderManage;
