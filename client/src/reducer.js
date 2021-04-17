export default function (state = {}, action) {
    console.log("do something");
    if (action.type == "RECEIVE_FRIENDS_WANNABES") {
        state = {
            ...state,
            allMyFriends: action.friends,
        };
    }

    if (action.type == "ACCEPT_FRIEND") {
        state = {
            ...state,
            allMyFriends: state.allMyFriends.map((friend) => {
                if (friend.id == action.acceptfriend) {
                    return {
                        ...friend,
                        accepted: true,
                    };
                } else {
                    return friend;
                }
            }),
        };
    }

    if (action.type == "UNFRIEND") {
        state = {
            ...state,
            friends: state.friends.filter(
                (friend) => friend.id !== action.data
            ),
        };
    }

    return state;
}
