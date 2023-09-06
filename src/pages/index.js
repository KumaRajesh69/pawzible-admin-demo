import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [data, setData] = useState();
  const router = useRouter();

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
            <div className="text-center space-y-2">
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
                  <div className="my-4">
                    <label for="username" className=" text-lg  text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Your Email"
                      className="mt-1 p-2 border w-full rounded-xl focus:outline-none focus:ring focus:ring-orange-200"
                    ></input>
                  </div>

                  <div className="mb-4">
                    <label
                      for="password"
                      className="block text-lg  text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      className="mt-1 p-2 border w-full rounded-xl focus:outline-none  focus:ring focus:ring-orange-200"
                    ></input>
                  </div>

                  <button
                    type="submit"
                    className="bg-orangePrimery w-full text-white
                     px-4 py-2 rounded-xl hover:bg-orange-400 focus:outline-none
                      focus:ring focus:ring-orange-300"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <button></button>
            <div>
              <p className="text-center">
                By Using the app, you agree to
                <span className="text-orangePrimery">Terms & Conditions.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.layout = null;
export default Home;
