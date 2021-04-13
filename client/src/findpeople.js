import { useState, useEffect } from "react";
import axios from "./axios";

export default function FindPeople() {
    const [query, setQuery] = useState("");
    const [friends, setFriends] = useState([]);

    let handleChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        console.log("useEffect is running");
        (async () => {
            const { data } = await axios.get(`/users/friends/${query}`);
            console.log("findpeople data", data);
            setFriends(data);
        })();
    }, [query]);

    console.log("friends", friends);

    return (
        <div>
            <input
                onChange={handleChange}
                placeholder="Find new friends"
            ></input>
            {/* {friends.map((friend, i) => {
                return (
                    <div key={i}>
                        <p>{friend.first}</p>
                    </div>
                );
            })} */}
        </div>
    );
}
