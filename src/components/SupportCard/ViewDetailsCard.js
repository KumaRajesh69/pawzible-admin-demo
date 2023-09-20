import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const data = [
  {
    name: "Customer name",
    value: "Margot Foster",
  },
  {
    name: "Ticket for product/service",
    value: "Consultation",
  },
  {
    name: "Email",
    value: "margotfoster@example.com",
  },
  {
    name: "Date",
    value: "31st may 2023",
  },
  {
    name: "Description",
    value:
      "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
  },
];

function ViewDetailsCard({ isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg ">
      <div className="flex justify-between items-center mx-5 my-2">
        <div className="flex justify-between items-center space-x-2 p-2">
          <p className="font-semibold text-xl ">Support</p>
          <div className="bg-orangePrimery text-white text-xs px-2 py-1 rounded-2xl">
            Ticket Id: 1002635
          </div>
        </div>
        <XCircleIcon
          onClick={() => setIsOpen(false)}
          className="text-red-500 h-7 w-7 cursor-pointer"
        />
      </div>
      <hr />
      <div className="flex flex-col mx-5 my-2 p-2">
        <div className="flex flex-col space-y-2">
          {data.map((each) => (
            <div>
              <p className="font-medium text-sm text-gray-500">{each.name}</p>
              <p className="font-normal text-sm w-4/5">{each.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between">
          <button className="border border-black rounded-lg px-10 py-2">
            Call
          </button>
          <button className="bg-orangePrimery text-white border rounded-lg px-10 py-2">
            Chat
          </button>
          <button className="border border-black  rounded-lg px-10 py-2">
            E-mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetailsCard;
