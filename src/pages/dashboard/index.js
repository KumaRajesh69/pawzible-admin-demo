import React from "react";

function dashboard() {
  return (
    <div className=" w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
        <a
          href={"/account-management"}
          className="flex flex-col bg-white justify-center items-center shadow-lg rounded-xl p-5 w-full space-y-5"
        >
          <img src="/images/Schedule.svg" className="h-20" />
          <p className="text-base font-medium">Invoicing</p>
        </a>
        <a
          href={"/order-management"}
          className="flex flex-col bg-white justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5"
        >
          <img src="/images/Patient.svg" className="h-20" />
          <p className="text-base font-medium">Order Management</p>
        </a>
        <a
          href={"/stakeholder-management"}
          className="flex flex-col bg-white justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5"
        >
          <img src="/images/check2.svg" className="h-20" />
          <p className="text-base font-medium">Manage Stakeholders</p>
        </a>
        <a
          href={"/analytics"}
          className="flex flex-col bg-white justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5"
        >
          <img src="/images/pallete2.svg" className="h-20" />
          <p className="text-base font-medium">Analytics</p>
        </a>
      </div>
    </div>
  );
}

export default dashboard;
