import React from "react";
import "./SidebarChat.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat-info">
        <h2>Room for Name</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default SidebarChat;
