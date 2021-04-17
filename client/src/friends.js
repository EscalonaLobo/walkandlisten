import React, { useEffect } from "react";
import { receiveFriendsWannabes } from "./actions";
import { useDispatch, useSelector } from "react-redux";

export function Friends() {
    const dispatch = useDispatch();
    const friends = useSelector(
        (state) =>
            state.allMyFriends &&
            state.allMyFriends.filter((friend) => friend.accepted == true)
    );
    const wannabes = useSelector(
        (state) =>
            state.allMyFriends &&
            state.allMyFriends.filter((friend) => friend.accepted == false)
    );

    useEffect(() => {
        dispatch(receiveFriendsWannabes());
    }, []);

    console.log("friends", friends);
    console.log("wannabe", wannabes);

    return (
        <div>
            <h1>Friends</h1>
            {friends &&
                friends.map((friend) => (
                    <div key={friend.id}>
                        <p>
                            {friend.first} {friend.last}
                        </p>
                        <img
                            src={
                                friend.profilepic || "noun_profile_1222484.png"
                            }
                        ></img>
                    </div>
                ))}
            <h1>Wannabe Friends</h1>
            {wannabes &&
                wannabes.map((wannabe) => (
                    <div key={wannabe.id}>
                        <p>
                            {wannabe.first} {wannabe.last}
                        </p>
                        <img
                            src={
                                wannabe.profilepic || "noun_profile_1222484.png"
                            }
                        ></img>
                    </div>
                ))}
        </div>
    );
}
