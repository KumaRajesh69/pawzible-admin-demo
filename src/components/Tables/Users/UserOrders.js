import React from "react";

const orderManagementData = [
  {
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Services",
    subcategory: "Dog Walking",
    date: "Aug 12, 2023",
    time: "3:45pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Pending",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:50pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Cancelled",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Services",
    subcategory: "Grooming",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Ongoing",
  },

  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
];
function UserOrders() {
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
          {orderManagementData.map((item) => (
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

export default UserOrders;
