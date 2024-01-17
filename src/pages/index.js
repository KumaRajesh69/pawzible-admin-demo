import VendorInvoice from "@/components/AccountManagement/VendorInvoice";
import CommonDialog from "@/components/Dialogs/CommonDialog";
import Otp from "@/components/OtpPage/Otp";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [data, setData] = useState();
  const router = useRouter();

  // const [tab, setTab] = useState(1);
  // const [isOpen, setIsOpen] = useState(false);

  // const handelOnClick = (number) => {
  //   setTab(number);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login clicked");
    router.push("/dashboard");
  };

  return (
    <div className="h-screen">
      <div className="grid grid-col-1 md:grid-cols-2 h-screen">
        <div className="h-screen hidden md:flex flex-col">
          <div className=" flex-1 flex justify-center items-center">
            <img src="/images/3dpetcat2.svg" className="h-[50vh]" />
          </div>
          <div>
            <div className="bg-orangePrimery flex flex-col justify-center items-center h-[25vh] space-y-5">
              <div className="text-center text-white text-4xl font-semibold">
                <p>Welcome back</p>
                <p>Hooman!</p>
              </div>
              <p className="text-sm 2xl:text-lg font-normal text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full bg-slate-50">
          <div className=" p-10 w-full max-w-lg">
            <div className="text-center space-y-1">
              <p className="text-xl font-semibold text-black">
                Welcome to Pawzible
              </p>
              <p className="text-lg font-normal text-gray-600">
                Please enter your email and password to login
              </p>
            </div>

            <div>
              <div>
                <form onSubmit={handleSubmit}>
                  {/* <form> */}
                  <div className="my-6">
                    <div class="relative mb-6">
                      <span class="absolute inset-y-0 bg-[#D9D9D9] rounded-s-2xl left-0 flex items-center border border-gray-400 px-3">
                        <span class="text-black font-medium text-lg">+91</span>
                      </span>
                      <input
                        type="number"
                        // appearance="none"
                        className="w-full pl-16 pr-4 py-2 border rounded-2xl h-12 focus:outline-none focus:border-gray-400"
                        placeholder="Enter Mobile No."
                      />
                    </div>
                  </div>

                  <button
                    // onClick={() => setIsOpen(true)}
                    // onClick={() => handelOnClick()}
                    type="submit"
                    className="bg-orangePrimery text-xl font-bold w-full text-white h-12
                     px-4 py-2 rounded-xl hover:bg-orange-400 focus:outline-none
                      focus:ring focus:ring-orange-300 tracking-wider"
                  >
                    OTP
                  </button>
                </form>
              </div>
            </div>
            <div class="flex items-center my-4 px-8 justify-center md:justify-start">
              <input
                type="checkbox"
                id="rememberMe"
                className="form-checkbox h-4 w-4 text-blue-500 rounded-2xl"
              />
              <label
                for="rememberMe"
                className="ml-2 text-base font-normal text-gray-700"
              >
                Remember me!
              </label>
            </div>
            <div>
              <p className="text-center">
                By Using the app, you agree to
                <span className="text-orangePrimery px-1">
                  Terms & Conditions.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <Otp isOpen={isOpen} setIsOpen={setIsOpen} />
      </CommonDialog> */}
    </div>
  );
}

Home.layout = null;
export default Home;
