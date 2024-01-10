import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function RegisterCard({ isOpen, setIsOpen }) {
  return (
    <div>
      {" "}
      <div className=" rounded-xl overflow-hidden  shadow-lg max-w-2xl w-full mx-auto">
        <div className="py-4 border-b px-8">
          <div className="flex flex-row justify-between ">
            <p className="text-xl font-bold">Register new user</p>
            <button onClick={() => setIsOpen(false)}>
              <XCircleIcon className="h-10 w-10 text-red-500 rounded-full p-1" />
            </button>
          </div>
        </div>
        <div className="px-8 pb-1 pt-2">
          <p className="py-1 font-semibold text-slate-500 text-sm">Name</p>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">Email</p>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">
            Phone number
          </p>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">Gender</p>
          <div className="flex space-x-4 items-center">
            <button className="flex items-center justify-center w-48 h-12 text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg focus:text-white focus:bg-orangePrimery">
              Male
            </button>
            <button className="flex items-center justify-center w-48 h-12  text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg  focus:text-white focus:bg-orangePrimery">
              female
            </button>
            <button className="flex items-center justify-center w-48 h-12  text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg  focus:text-white focus:bg-orangePrimery">
              Other
            </button>
          </div>
          <button className="bg-orangePrimery w-full h-12 rounded-2xl mb-4 mt-10 text-white text-xl font-bold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
