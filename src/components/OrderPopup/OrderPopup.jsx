import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <form
                action="https://getform.io/f/lakmozxa"
                method="POST"
                name="myForm"
              >
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                  pattern="[A-Za-z]{3,}"
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                    disabled={false}
                    onclick="alert('Button clicked!')"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
