import React from "react";

function ServiceProvider({ table }) {
  return (
    <div>
      <div className="h-full my-4 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>Profile</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Services</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          {table.map((item) => (
            <tbody className="w-full">
              <tr>
                <td>
                  <img className="rounded-full" src={item.profile} />
                </td>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.phone}</td>
                <td className="table__body__text">{item.mail}</td>
                <td className="table__body__text">{item.gender}</td>

                <td className="table__body__text">{item.address}</td>
                <td className="table__body__text">{item.services}</td>

                <td>
                  <button className="td_Button">{item.status}</button>
                </td>
                <td>
                  <a href={"/serviceprovider"}>{"View Details"}</a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ServiceProvider;
