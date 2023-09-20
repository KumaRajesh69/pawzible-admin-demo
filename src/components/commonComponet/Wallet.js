import React from "react";

function Wallet() {
  return (
    <>
      <div className="my-10 ">
        <div className=" w-full  shadow-md rounded-lg bg-white p-5 md:p-10">
          <div className="md:flex justify-between space-y-5 md:space-y-0">
            <div className=" space-y-5">
              <p className="text-lg text-gray-400 font-normal">
                Total earnings
              </p>
              <p className="text-3xl font-semibold">₹15,500.00</p>
            </div>
            <div className=" space-y-2">
              <p className="text-lg text-gray-400 font-normal">
                Total Outstanding balance
              </p>
              <p className="text-2xl font-semibold">₹5,500.00</p>
              <button className="bg-orangePrimery w-full font-normal text-sm text-white p-2 rounded-lg ">
                Notify Accounts
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-3 my-5">
          <p className="text-base font-medium">Recent activity</p>
          <div className="bg-gray-200 w-full py-1 px-4 rounded-md">
            <p className="text-xs font-normal">25 Feb 2023</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="shadow-md rounded-lg p-2 flex items-center">
              <div className="h-10 w-12 rounded-md bg-orange-300 flex justify-center items-center ">
                CM
              </div>
              <div className="flex justify-between w-full mx-3">
                <div>
                  <p className="text-lg font-medium">Cerona Metayer</p>
                  <p className="text-sm font-normal text-gray-500">
                    25 Feb - Payment received
                  </p>
                </div>
                <p className="text-xl font-semibold text-green-500">₹500</p>
              </div>
            </div>
            <div className="shadow-lg rounded-lg p-2 flex items-center">
              <div className="h-10 w-12 rounded-md text-white bg-green-500 flex justify-center items-center ">
                AK
              </div>
              <div className="flex justify-between w-full mx-3">
                <div>
                  <p className="text-lg font-medium">Arun Kumar</p>
                  <p className="text-sm font-normal text-gray-500">
                    25 Feb - Payment received
                  </p>
                </div>
                <p className="text-xl font-semibold text-green-500">₹700</p>
              </div>
            </div>
            <div className="shadow-lg rounded-lg p-2 flex items-center">
              <div className="h-10 w-12 rounded-md text-white bg-violet-500 flex justify-center items-center ">
                M
              </div>
              <div className="flex justify-between w-full mx-3">
                <div>
                  <p className="text-lg font-medium">Mehjabeen Memon</p>
                  <p className="text-sm font-normal text-gray-500">
                    25 Feb - Payment received
                  </p>
                </div>
                <p className="text-xl font-semibold text-green-500">₹1500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
