import React from "react";
import NewProduct from "./NewProduct";

function InvoiceManagement({ table }) {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>ID</th>
              <th>Name</th>
              <th>Payment ID</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Price</th>
              <th>Category</th>
              <th>Invoice</th>
              <th>Send Invoice</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td>{item.id}</td>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.payment}</td>
                <td className="table__body__text">{item.phone}</td>
                <td className="table__body__text">{item.product}</td>
                <td className="table__body__text">{item.price}</td>
                <td className="table__body__text">{item.category}</td>
                <td>
                  <button className="td_Button">
                    <img className="rounded-full" src={item.invoice} />
                  </button>
                </td>
                <td>
                  <button>
                    <img className="rounded-full" src={item.sendinvoice} />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default InvoiceManagement;
