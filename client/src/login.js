import { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };
    }

    handleChange(e) {
        console.log("input is doing something");
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log("this state", this.state)
        );
    }

    handleClick(e) {
        e.preventDefault();
        console.log("clicked login button");
        axios
            .post("/login", this.state)
            .then(({ data }) => {
                console.log("something in login");
                console.log(data);
                if (data.success) {
                    location.replace("/");
                } else {
                    this.setState({
                        error: true,
                    });
                }
            })
            .catch((err) => console.log("err in post click", err));
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Link to="/">New user? Register here.</Link>
                {this.state.error && <p>that's an mistake</p>}
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={(e) => this.handleChange(e)}
                ></input>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => this.handleChange(e)}
                ></input>
                <button onClick={(e) => this.handleClick(e)}>Login</button>
            </div>
        );
    }
}
