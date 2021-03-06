// src/actions.js
import axios from "./axios";

export async function receiveFriendsWannabes() {
    const { data } = await axios.get("/wannabefriends");
    return {
        type: "RECEIVE_FRIENDS_WANNABES",
        friends: data,
    };
}

export async function acceptFriend(id) {
    const { data } = await axios.post("/acceptfriend/" + id);
    return {
        type: "ACCEPT_FRIEND",
        data: data.sender_id,
    };
}

export async function unfriend(id) {
    const { data } = await axios.post("/unfriend/" + id);
    return {
        type: "UNFRIEND",
        data: data.sender_id,
    };
}

export async function getChat(data) {
    console.log("do some getchat");
    console.log("getchat", data);
    return {
        type: "MESSAGES",
        data,
    };
}

export async function insertChatMessage(data) {
    console.log("insertchat", data);
    return {
        type: "MESSAGE",
        data,
    };
}
