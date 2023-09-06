import React from "react";

function DetailsBlog() {
  return (
    <>
      <div className="my-10 mx-5 ">
        <div className="space-y-3 w-3/4">
          <div className="rounded-md shadow-md">
            <img src="/images/blog4.svg" />
          </div>
          <div className="space-y-2 p-3 rounded-lg shadow-md">
            <p className="text-base font-medium">Proin fermentum ut massa at</p>
            <p className="text-gray-500 font-normal text-sm">
              Proin lobortis tempus odio eget venenatis. Proin fermentum ut
              massa at bibendum. Proin bibendum non est quis egestas.
              Pellentesque at enim id enim tempus placerat. Etiam tempus gravida
              leo, et gravida justo bibendum non. Suspendisse vitae ...
            </p>
            <div className="flex space-x-3 text-gray-500 text-sm">
              <div className="flex space-x-1">
                <img src="/images/icon-msg.svg" />
                <p className="self-end">25</p>
              </div>
              <div className="flex space-x-1 ">
                <img src="/images/Icon-head.svg" />
                <p className="self-end">Amit Kumar</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 shadow-md rounded-lg">
            <div className="h-12 w-12 rounded-full flex justify-center items-center ">
              <img
                src="/images/ram-image.svg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium">Author Amit Kumar</p>
              <p className="font-normal text-gray-500">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora
              </p>
            </div>
          </div>
          <div>
            <p>Comments (1)</p>
            <div>
              <div className=" p-2 shadow-md ">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full flex justify-center items-center ">
                    <img
                      src="/images/ram-image.svg"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Author Amit Kumar</p>
                    <p className="font-normal text-gray-500">
                      November 26, 2016 at 8:20 am
                    </p>
                  </div>
                  <button className="text-blue-500 pr-2">Reply</button>
                </div>
                <p>very good service</p>
              </div>
            </div>
            <div className="my-5 space-y-4">
              <p>Leave a Comment</p>
              <div className=" text-gray-500 text-base font-normal space-y-3">
                <div className="flex space-x-5">
                  <div className=" w-full">
                    <p>First Name</p>
                    <input
                      type="text"
                      class="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div className=" w-full">
                    <p>Email address</p>
                    <input
                      type="text"
                      class="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
                <div>
                  <p>Message</p>
                  <input
                    type="text"
                    class="border w-full h-16 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-500">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <p for="terms" class="ml-2">
                    I agree to the terms and conditions laid out in the
                    <a href="#" className="text-blue-500 hover:underline ml-2">
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <p className="ml-2">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
              </div>
              <button className="bg-orangePrimery text-white h-10 w-1/3 rounded">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsBlog;
