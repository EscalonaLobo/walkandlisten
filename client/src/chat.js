import { useEffect, useRef } from "react";
import { socket } from "./socket";
import { useSelector } from "react-redux";

export default function Chat() {
    const elemRef = useRef();
    const chatMessages = useSelector((state) => (state && state.chat) || []);
    // this will be undefined for you right now!!
    console.log("here are my last 10 chat messages: ", chatMessages);

    // you'll want to run this useEffect everytime we get a newChatMsg
    useEffect(() => {
        console.log("chat hooks component has mounted");
        console.log("elementRef is: ", elemRef);
        console.log("scrollTop: ", elemRef.current.scrollTop);
        console.log("clientHeight: ", elemRef.current.clientHeight);
        console.log("scrollHeight: ", elemRef.current.scrollHeight);

        elemRef.current.scrollTop =
            elemRef.current.scrollHeight - elemRef.current.clientHeight;
    }, [chatMessages]);

    const keyCheck = (e) => {
        console.log(e);
        if (e.key === "Enter") {
            e.preventDefault(); // this will prevent going to the next line
            socket.emit("Add a message", e.target.value);
            e.target.value = ""; // clears input field after we click enter
        }
    };
    console.log(chatMessages);
    return (
        <div>
            <p className="chat-title">Welcome to Chat</p>
            <div className="chat-messages-container" ref={elemRef}>
                {chatMessages
                    .slice()
                    .reverse()
                    .map((msg) => (
                        <div id="chat-content" key={msg.id}>
                            <h4>
                                {msg.first} {msg.last} =>
                            </h4>
                            <p id="chat-msg">{msg.message}</p>
                        </div>
                    ))}
            </div>
            <textarea
                placeholder="Add your message here"
                onKeyDown={keyCheck}
            ></textarea>
        </div>
    );
}
