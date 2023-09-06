import React from "react";

function RegisterCard() {
  return (
    <div>
      {" "}
      <div className="mt-10  rounded-xl overflow-hidden  shadow-lg max-w-2xl w-full mx-auto">
        <div className="py-4 border-b px-8">
          <div className="flex flex-row justify-between ">
            <p className="text-xl font-bold">Register new user</p>
            <button className="">
              <span class="material-symbols-outlined bg-red-600 text-white rounded-full p-1">
                close
              </span>
            </button>
          </div>
        </div>
        <div className="px-8 pb-1 pt-2">
          <p className="py-1 font-semibold text-slate-500 text-md">Name</p>
          <input
            type="text"
            name="username"
            class="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">Email</p>
          <input
            type="text"
            name="username"
            class="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">
            Phone number
          </p>
          <input
            type="text"
            name="username"
            class="w-full px-4 py-3 border rounded-lg "
          ></input>
        </div>
        <div className="px-8 py-1">
          <p className="py-1 font-semibold text-slate-500 text-md">Gender</p>
          <div className="flex justify-between items-center">
            <button class="flex items-center justify-center w-48 h-12 text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg focus:text-white focus:bg-orangePrimery">
              Male
            </button>
            <button class="flex items-center justify-center w-48 h-12  text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg  focus:text-white focus:bg-orangePrimery">
              female
            </button>
            <button class="flex items-center justify-center w-48 h-12  text-slate-500 text-md border border-[#D9D9D9]  bg-white font-semibold rounded-lg  focus:text-white focus:bg-orangePrimery">
              Other
            </button>
          </div>
          <button className="bg-orangePrimery w-full h-12 rounded-lg mb-4 mt-10 text-white text-xl font-bold">
            Register
          </button>
        </div>
        {/* <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Button
        </button> */}
      </div>
    </div>
  );
}

export default RegisterCard;