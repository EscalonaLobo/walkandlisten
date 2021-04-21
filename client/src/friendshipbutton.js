// friendshipButton.js
import axios from "./axios";
import { useState, useEffect } from "react";
// import { friendButton } from "./hooks/button.js";

export function FriendshipButton(props) {
    const [buttonText, setButtonText] = useState("");
    // const [friendshipStatus, setfriendshipStatus] = useEffect(null);

    useEffect(() => {
        console.log("useeffect running");
        (async () => {
            const { data } = await axios.get(`/friendship/${props.friendId}`);
            console.log("friendship status", data);
            if (!data.length) {
                setButtonText("Send friendship request");
            } else if (data[1].some((req) => req.accepted)) {
                setButtonText("End friendship");
            } else if (data[1].some((req) => req.recipient_id == data[0])) {
                setButtonText("Accept friendship");
            } else if (data[1].some((req) => req.sender_id == data[0])) {
                setButtonText("Cancel request");
            }
        })();
    });

    async function handleClick() {
        // console.log("it clicked");
        const { data } = await axios.post(`/friendship/${props.friendId}`, {
            buttonText,
        });
        console.log("data in post", data);
        if (data.delete) {
            console.log(data);
            setButtonText("Send friendship request");
        } else if (data.request) {
            setButtonText("End request");
        } else if (data.accepted) {
            setButtonText("End friendship");
        }
    }

    // you need pass to FriendshipButton the id of the user that the btn is being rendered on
    // otherProfile will render the friendship button component and otherProfile KNOWS the
    // id (this.props.match.params.id) of the user;
    // so we need to pass that down to friendshipButton via the props

    // in useEffect we will want to make a request to the server to find out our
    // relationship status with the user we are looking at! and set the btn Text accordingly

    // on clicking the button we want to make a request to the server and update the
    // relationship in our db, and once that happened successfully, we want to update
    // our btn text to reflect this change in relationship status

    //
    return (
        <>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    );
}
