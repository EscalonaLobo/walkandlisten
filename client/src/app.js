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
            console.log(res.data);
            this.setState({ user: res.data });
        });
    }

    setProfilePic(profilepic) {
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    profilepic,
                },
            };
        });
    }

    render() {
        return (
            <section id="app">
                This is app
                <Logo />
                <ProfilePic />
                <Uploader
                    setProfilePic={(profilepic) =>
                        this.setProfilePic(profilepic)
                    }
                />
            </section>
        );
    }
}
