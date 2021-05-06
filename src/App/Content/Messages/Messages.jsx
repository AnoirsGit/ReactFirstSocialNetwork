import React from "react";
import ChatComponent from "./chat/Chat.component";
import UserListComponent from "./userList/UserList.component"

export const MessagesJsx = ()=>{
    return (
        <div className="flex flex-row w-full h-full">
            <UserListComponent />
            <ChatComponent />
        </div>
    )
}