import React, { useState } from "react";
import VendorInvoice from "./VendorInvoice";
import CommonDialog from "../Dialogs/CommonDialog";

const data = [
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
  {
    name: "Vendor Invoice",
    id: "#001",
    date: "20th sept 2022",
    edit: "Edit",
    preview: "Preview",
  },
];

function Templates() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row w-full justify-end my-4">
        <button className=" bg-orangePrimery rounded-md p-2 text-white">
          Create a new template
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {data.map(() => (
          <div className="bg-white w-full rounded-lg shadow-lg">
            <div className="p-5">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Vendor Invoice</p>
                <div className="bg-orangePrimery rounded-2xl py-1 px-2 text-white text-xs">
                  #001
                </div>
              </div>
              <p className="text-sm font-normal text-gray-500">
                20th sept 2022
              </p>
            </div>
            <hr />
            <div className="flex justify-center">
              <button className=" flex-1 border-r  py-2 px-5 text-sm font-medium">
                Edit
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className=" flex-1  py-2 px-5 text-sm font-medium"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <VendorInvoice isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog>
    </div>
  );
}

export default Templates;
