export default function (state = {}, action) {
    if (action.type == "RECEIVE_FRIENDS_WANNABE") {
        state = {
            ...state,
            allMyFriends: action.friends,
        };
    }
    return state;
}
