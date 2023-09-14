import React from "react";

function OrderHistory() {
  return (
    <div>
      <div>
        <p className="text-gray-400">Deliveries This Month</p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-2xl rounded">
            <div className="flex flex-col justify-center shadow-md rounded  p-5 space-y-2 ">
              <p className="text-base font-normal">Total Orders</p>
              <div className="flex justify-between ">
                <p className="text-2xl font-semibold text-blue-600">7,000</p>
                <div className="bg-green-200 text-green-900 text-sm font-medium self-center rounded-2xl px-2">
                  June,2023
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center shadow-md rounded  p-2 space-y-2">
              <p className="text-base font-normal">Delivered</p>
              <div className="flex justify-between ">
                <p className="text-2xl font-semibold text-blue-600">5,000</p>
                <div className="bg-green-200 text-green-900 text-sm font-medium self-center rounded-2xl px-2">
                  June,2023
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col justify-center shadow-md rounded  p-2 space-y-2">
              <p className="text-base font-normal">Total Cancellations</p>
              <div className="flex justify-between ">
                <p className="text-2xl font-semibold text-blue-600">2,000</p>
                <div className="bg-green-200 text-green-900 text-sm font-medium self-center rounded-2xl px-2">
                  June,2023
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
