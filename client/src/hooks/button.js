import { useEffect, useState } from "react";

export function friendButton() {
    const [buttonText, setButtonText] = useState("");

    useEffect(() => {
        if (friendshipStatus == "none") {
            setButtonText("Request friendship");
        } else if (friendshipStatus == "pending") {
            setButtonText("Pending friendship");
        } else if (friendshipStatus == "friends") {
            setButtonText("Cancel friendship");
        } else if (friendshipStatus == "reqSent") {
            setButtonText("Cancel request");
        } else if (friendshipStatus == "reqReceived") {
            setButtonText("Accept request");
        }
    });
    return [buttonText, setButtonText];
}
