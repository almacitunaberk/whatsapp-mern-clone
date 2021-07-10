import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { AttachFile } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Tuna</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span className="chat-timestamp">01:00</span>
        </p>

        <p className="chat-message chat-reciever">
          <span className="chat-name">Tuna</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span className="chat-timestamp">01:00</span>
        </p>

        <p className="chat-message">
          <span className="chat-name">Tuna</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span className="chat-timestamp">01:00</span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
