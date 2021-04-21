import io from "socket.io-client";
import { getChat, insertChatMessage } from "./actions";

export let socket;

export const init = (store) => {
    if (!socket) {
        socket = io.connect();

        socket.on("mostRecentMsgs", (msgs) => store.dispatch(getChat(msgs)));

        socket.on("addChatMsg", (msg) =>
            store.dispatch(insertChatMessage(msg))
        );
    }
};
