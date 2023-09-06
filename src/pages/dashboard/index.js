import React from "react";

function dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10">
      <div className="flex flex-col justify-center items-center shadow-lg rounded-xl p-5 w-full space-y-5">
        <img src="/images/Schedule.svg" className="h-20" />
        <p className="text-base font-medium">Invoicing</p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5">
        <img src="/images/Patient.svg" className="h-20" />
        <p className="text-base font-medium">Order Management</p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5">
        <img src="/images/check2.svg" className="h-20" />
        <p className="text-base font-medium">Manage Stakeholders</p>
      </div>
      <div className="flex flex-col justify-center items-center shadow-lg rounded-xl  p-5 w-full space-y-5">
        <img src="/images/pallete2.svg" className="h-20" />
        <p className="text-base font-medium">Analytics</p>
      </div>
    </div>
  );
}

export default dashboard;
