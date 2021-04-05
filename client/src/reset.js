import { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Reset extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            step1: true,
            step2: false,
            step3: false,
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
            .post("/reset/step2", this.state)
            .then(({ data }) => {
                console.log("something in login");
                console.log(data);
                if (data.error) {
                    this.setState({
                        error: data.error,
                    });
                } else {
                    this.setState({
                        step1: false,
                        step2: true,
                        step3: false,
                    });
                }
            })
            .catch((err) => console.log("err in post click", err));
    }

    handleClick2(e) {
        e.preventDefault();
        console.log("clicked submit in reset");
        axios
            .post("/reset/step3", this.state)
            .then(({ data }) => {
                console.log("something reset");
                console.log(data);
                if (data.error) {
                    this.setState({
                        error: data.error,
                    });
                } else {
                    this.setState({
                        step1: false,
                        step2: false,
                        step3: true,
                    });
                }
            })
            .catch((err) => console.log("err in post click", err));
    }

    render() {
        return (
            <div>
                <h1>Reset password</h1>
                {this.state.error && <p>that's an mistake</p>}
                {this.state.step1 && (
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            onChange={(e) => this.handleChange(e)}
                        ></input>
                        <button onClick={(e) => this.handleClick(e)}>
                            Submit
                        </button>
                    </div>
                )}

                {this.state.step2 && (
                    <div>
                        <p>Please enter your code</p>
                        <input
                            type="text"
                            name="code"
                            placeholder="code"
                            onChange={(e) => this.handleChange(e)}
                        ></input>
                        <p>Please enter your new password</p>
                        <input
                            type="password"
                            name="newpassword"
                            placeholder="password"
                            onChange={(e) => this.handleChange(e)}
                        ></input>
                        <button onClick={(e) => this.handleClick2(e)}>
                            Submit
                        </button>
                    </div>
                )}

                {this.state.step3 && (
                    <div>
                        <p>Your password has been updated</p>
                        <Link to="/login">Log in here</Link>
                    </div>
                )}
            </div>
        );
    }
}
