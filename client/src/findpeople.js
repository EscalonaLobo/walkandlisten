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
        let abort = false;
        (async () => {
            const { data } = await axios.get(`/users/friends/${query}`);
            console.log("findpeople data", data.rows);
            setFriends(data);
        })();
        return () => {
            abort = true;
        };
    }, [query]);

    console.log("friends", friends);

    return (
        <div>
            {!query && <h3>Our latest users</h3>}
            <input
                onChange={handleChange}
                placeholder="Find new friends"
            ></input>
            {friends.map((friend, i) => {
                return (
                    <div key={i}>
                        <p>{friend.first}</p>
                        <p>{friend.last}</p>
                        <p>{friend.bio}</p>
                    </div>
                );
            })}
        </div>
    );
}
