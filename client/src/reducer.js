export default function (state = {}, action) {
    console.log("do something");
    if (action.type == "RECEIVE_FRIENDS_WANNABES") {
        state = {
            ...state,
            allMyFriends: action.friends,
        };
    }
    return state;
}
