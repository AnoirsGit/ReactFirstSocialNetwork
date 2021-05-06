import { React } from "react";
import ProfileComponent from "./Profile/Profile.component";
import MessagesComponent from "./Messages/Messages.component"
export const ContentJsx = () =>{
    return (
        <div className="w-full">
            {/* <ProfileComponent /> */}
            <MessagesComponent />
        </div>
    )
}