import React, { useState } from "react";
import TermCondition from "./TermCondition";
import CommonDialog from "../Dialogs/CommonDialog";

function Cms({ table }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Name</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Terms and Conditions</th>
              <th>Status</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.title}</td>
                <td className="table__body__text">{item.amount}</td>
                <td className="table__body__text">{item.category}</td>
                <td className="table__body__text">{item.date}</td>
                <td>
                  <button className="" onClick={() => setIsOpen(true)}>
                    {item.term}
                  </button>
                </td>
                <td>
                  <button className="td_Button">{item.status} </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <TermCondition isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog>
    </div>
  );
}

export default Cms;
