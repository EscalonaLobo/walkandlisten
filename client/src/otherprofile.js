import { Component } from "react";
import axios from "./axios";

export default class OtherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // console.log("it mounted", this.state);
        axios
            .get(`/user/${this.props.match.params.id}.json`)
            .then(({ data }) => {
                if (data.getProfile) {
                    console.log("something");
                    this.props.history.push("/");
                } else {
                    this.setState(data);
                    // console.log(this.state);
                }
            })
            .catch((err) => console.log("error in mount", err));
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.first} {this.state.last}
                </h1>
                <p>{this.state.bio}</p>
            </div>
        );
    }
}
