import StackHolder from "@/components/StackeHolder";
import { useRouter } from "next/router";
import React from "react";
import RegisterCard from "./RegisterCard";
import Pet from "./pet";
import Overview from "./Overview";

function User({ table }) {
  const router = useRouter();

  const handleOnclick = (item) => {
    console.log("View Details on click");
    console.log(item);
    // console.log(item.name);

    // console.log(item.status);
    // if (item.status === "Approved") {
    //   console.log("yes");
    // } else {
    //   console.log("No");
    // }
    funPrintItem(item);
  };

  const funPrintItem = (xyz) => {
    console.log(xyz.id);
    printItemEmail(xyz.mail);
  };
  const printItemEmail = (abc) => {
    console.log(abc);
  };
  return (
    <div>
      <div className="h-full my-4 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Category</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {table.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td className="td__Name">{item.name}</td>
                <td className="">{item.phone}</td>
                <td className="table__body__text">{item.mail}</td>
                <td className="table__body__text">{item.gender}</td>

                <td className="table__body__text">{item.address}</td>
                <td className="table__body__text">{item.category}</td>
                <td>
                  <button className="td_Button">{item.status}</button>
                </td>
                <td>
                  {/* <button onClick={() => handleOnclick(item)}> */}
                  <a href={"/user"}>{"View Details"}</a>
                  {/* </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
