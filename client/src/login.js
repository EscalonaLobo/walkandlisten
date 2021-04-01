import { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <h1>This is our registration component</h1>
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
