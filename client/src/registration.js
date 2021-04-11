import { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Registation extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // console.log("input is doing something");
        // console.log(e.target.value);
        this.setState(
            {
                // first: e.target.value,
                [e.target.name]: e.target.value,
            }
            // () => console.log("this state", this.state)
        );
    }

    handleClick(e) {
        e.preventDefault();
        console.log("clicked register button");
        axios
            .post("/register", this.state)
            .then(({ data }) => {
                console.log("somethign");
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
            <div id="registration">
                <h2>Register today!</h2>
                <Link to="/login">Log in here</Link>
                {this.state.error && <p>that's an mistake</p>}
                <input
                    type="text"
                    name="first"
                    placeholder="name"
                    onChange={(e) => this.handleChange(e)}
                ></input>
                <input
                    type="text"
                    name="last"
                    placeholder="last"
                    onChange={(e) => this.handleChange(e)}
                ></input>
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
                <button onClick={(e) => this.handleClick(e)}>Register</button>
            </div>
        );
    }
}
