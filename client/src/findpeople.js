import { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

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
                    <div id="findpeep-container" key={i}>
                        <Link to={"/user/" + friend.id}>
                            <img
                                id="findpeep-img"
                                src={friend.profilepic}
                            ></img>
                        </Link>
                        <p id="findpeep-p">
                            {friend.first} {friend.last}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
