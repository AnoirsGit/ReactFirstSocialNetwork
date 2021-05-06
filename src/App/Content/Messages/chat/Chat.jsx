import React from "react";

export const ChatJsx = () => {
  return (
    <div className="w-2/3 p-8">
      <div className="chat">
        <div className="message">
          <div className="">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              className="rounded-full w-12"
              alt=""
            />
          </div>
          <div className="message-body">
                <p className="text-white text-xl leading-5">Name</p>
                <p className="text-gray-200 text-lg">Message</p>
                <p className="text-gray-400 text-sm float-right -mt-2">цук</p>
          </div>
        </div>
        <div className="message left"></div>
      </div>
    </div>
  );
};
