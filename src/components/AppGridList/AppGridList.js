import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function AppGridList({ userData, type }) {
  return (
    <div className="flex flex-wrap justify-center items-baseline py-10 bg-gray-100">
      {userData.map((data) => {
        return type === "type_2" ? (
          <div className="flex flex-col m-3 bg-white shadow-lg rounded-lg w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <div className="flex flex-col items-center px-5 py-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={data.avatar}
                alt={`${data.username.split(" ")[0]} image`}
              />
              <h5 className="mb-1 mt-1 text-base font-bold text-center text-gray-900 dark:text-white">
                {data.username}
              </h5>
              <span className="text-sm text-center text-gray-500 dark:text-gray-400">
                {data.description}
              </span>
              <span className="mt-2 text-center text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full capitalize">
                {data.role}
              </span>
            </div>
            <div className="flex w-full">
              <div className="flex flex-1 w-1/2 items-center py-2 justify-center border cursor-pointer">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-500 text-base">Email</span>
              </div>
              <div className="flex flex-1 w-1/2 items-center py-2 justify-center border cursor-pointer">
                <PhoneIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-500 text-base">Call</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col m-3 bg-white shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center px-5 py-10">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h5 className="mr-4 text-base font-bold text-center text-gray-900 dark:text-white">
                    {data.username}
                  </h5>
                  <span className="text-center text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full capitalize">
                    {data.role}
                  </span>
                </div>
                <span className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                  {data.description}
                </span>
              </div>
              <img
                className="w-12 h-12 rounded-full shadow-lg"
                src={data.avatar}
                alt={`${data.username.split(" ")[0]} image`}
              />
            </div>
            <div className="flex w-full">
              <div className="flex flex-1 w-1/2 items-center py-2 justify-center border cursor-pointer">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-500 text-base">Email</span>
              </div>
              <div className="flex flex-1 w-1/2 items-center py-2 justify-center border cursor-pointer">
                <PhoneIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-500 text-base">Call</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
