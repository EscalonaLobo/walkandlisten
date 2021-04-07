import { Component } from "react";
import Logo from "./logo";
import ProfilePic from "./profile-pic";
import Uploader from "./uploader";
import axios from "./axios";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            uploaderVisible: false,
        };
    }

    componentDidMount() {
        console.log("app mounted");
        axios.get("/user").then((res) => {
            console.log("data fetched");
            console(res.data);
            this.setState({ user: res.data });
        });
    }

    render() {
        return (
            <section id="app">
                This is app
                <Logo />
                <ProfilePic />
                <Uploader />
            </section>
        );
    }
}
