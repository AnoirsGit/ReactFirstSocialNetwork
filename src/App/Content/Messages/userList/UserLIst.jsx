import React from "react";

export const UserListJsx = () => {
  return (
    <div className="w-1/3 glassy h-full flex flex-col p-8">
      <div className="user-card">
        <div className="pr-5">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            className="rounded-full w-12"
            alt=""
          />
        </div>
        <div className="flex flex-col  w-full">
            <div className="flex justify-between mb-2">
                <p className="text-white text-xl">Anuar</p>
                <p className="text-gray-300 text-sm">time</p>
            </div>
            <div className="">
                <p className="text-white text-lg">Description</p>
            </div>
            <div className="">
                <p className="text-gray-300 text-lg">ewrgwergdfgsdfgsdh
                sdfgsdfgsfghsf</p>
            </div>
        </div>
      </div>
    </div>
  );
};
