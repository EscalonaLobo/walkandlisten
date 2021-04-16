// src/actions.js
import axios from "./axios";

export async function receiveFriendsWannabes() {
    const { data } = await axios.get("/wannabefriends");
    return {
        type: "RECEIVE_FRIENDS_WANNABES",
        friends: data,
    };
}

export async function acceptFriend() {
    const { data } = await axios.post();
    return {
        type: "ACCEPT_FRIEND",
    };
}

export function unfriend() {}
