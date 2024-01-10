import React from "react";

const orderManagementData = [
  {
    id: 1,
    product: "Pedigree",
    payment: "P1328SFFS001",
    category: "Food",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    view: "/images/eye.svg",
  },
  {
    id: 2,
    product: "Pedigree",
    payment: "P1328SFFS001",
    category: "Food",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    view: "/images/eye.svg",
  },
  {
    id: 3,
    product: "Pedigree",
    payment: "P1328SFFS001",
    category: "Food",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    view: "/images/eye.svg",
  },
  {
    id: 4,
    product: "Pedigree",
    payment: "P1328SFFS001",
    category: "Food",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    view: "/images/eye.svg",
  },

  {
    id: 5,
    product: "Pedigree",
    payment: "P1328SFFS001",
    category: "Food",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    view: "/images/eye.svg",
  },
];
function UserOrders() {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-[#F8CD5B] h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>ID</th>
              <th>Product</th>
              <th>Payment ID</th>
              <th>Category</th>
              <th>Date</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          {orderManagementData.map((item) => (
            <tbody className="w-full">
              <tr>
                <td td className="td__Name">
                  {item.id}
                </td>
                <td className="">{item.product}</td>
                <td className="table__body__text">{item.payment}</td>
                <td className="table__body__text">{item.category}</td>
                <td className="table__body__text">
                  <div>
                    <div> {item.date}</div>
                    {/* <div>{item.time}</div> */}
                  </div>
                </td>
                <td className="table__body__text">{item.price}</td>
                <td className="flex justify-center">
                  <img src={item.view} />
                </td>
                {/* <td>
                  <button className="td_Button">{item.status}</button>
                </td> */}
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
