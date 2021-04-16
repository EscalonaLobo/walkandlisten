import React, { useEffect } from "react";
import { receiveFriendsWannabes } from "./actions";
import { useDispatch, useSelector } from "react-redux";

export function Friends() {
    const dispatch = useDispatch();
    const friends = useSelector(
        (state) =>
            state.allMyFriends &&
            state.allMyFriends.filter((user) => user.accepted == true)
    );
    const wannabes = useSelector(
        (state) =>
            state.allMyFriends &&
            state.allMyFriends((user) => user.accepted == false)
    );

    // useEffect(() => {
    //     dispatchEvent(receiveFriendsWannabes());
    // }, []);

    return (
        <div>
            <h1>Friends</h1>
        </div>
    );
}
