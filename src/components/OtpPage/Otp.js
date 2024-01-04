import React from "react";

function Otp() {
  return (
    <div>
      <div className="bg-white bg-opacity-75 p-10 rounded-[20px] w-full max-w-md">
        <div className="   flex flex-col  justify-center items-center w-full space-y-5">
          <p className="text-center font-bold text-xl ">Verfication</p>
          <p className="text-center text-sm font-medium text-[#727272] w-[80%]">
            Please check you message for a five-digit security code and enter it
            below.
          </p>
          <div className="bg-transparent flex flex-col  items-center justify-center">
            <form>
              <div class="flex space-x-4">
                {" "}
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  class="md:w-10 md:h-10 w-5 h-5 border rounded-full bg-white"
                />{" "}
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  class="md:w-10 md:h-10 w-5 h-5 border rounded-full bg-white"
                />{" "}
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  class="md:w-10 md:h-10 w-5 h-5 border rounded-full bg-white"
                />{" "}
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  class="md:w-10 md:h-10 w-5 h-5 border rounded-full bg-white"
                />{" "}
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  class="md:w-10 md:h-10 w-5 h-5 border rounded-full bg-white"
                />{" "}
                {/* <div class="w-10 h-10 bg-blue-700 border rounded-full flex items-center justify-center text-2xl font-semibold"></div> */}
              </div>
            </form>
          </div>{" "}
          <p className="font-light text-sm py-4 text-[#727272]">
            Waiting for OTP... 29 Sec
          </p>
          <button
            // onClick={handleClick}
            type="submit"
            class="w-[345px] bg-orangePrimery text-white py-2 px-4 rounded-2xl  hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Verify
          </button>
          {/* <button className="bg-blue-500 border py-2 px-6">Verify</button> */}
          <div className="flex text-base font-normal">
            If you didn’t receive a code!
            <a
              href="/"
              className="text-[#E9AC71] font-semibold px-2 hover:text-orange-700"
            >
              Resend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
