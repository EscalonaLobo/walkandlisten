import { Component } from "react";
import Logo from "./logo";
import ProfilePic from "./profile-pic";
import Uploader from "./uploader";
import axios from "./axios";
import { Profile } from "./profile";
import { BrowserRouter, Route } from "react-router-dom";
import OtherProfile from "./otherprofile";

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

    showUploader() {
        this.setState({ uploaderVisible: true });
    }

    // hideUploader() {
    //     this.setState({ uploaderVisible: false });
    // }

    setProfilePic(newpic) {
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    profilepic: newpic,
                },
            };
        });
    }

    setBio(newBio) {
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    bio: newBio,
                },
            };
        });
    }

    render() {
        return (
            <section id="app">
                This is app
                <Logo />
                <ProfilePic {...this.state.user} />
                <BrowserRouter>
                    <div>
                        <Route
                            path="/"
                            render={() => {
                                return (
                                    <Profile
                                        {...this.state.user}
                                        setBio={(newBio) => this.setBio(newBio)}
                                    />
                                );
                            }}
                        />
                        <Route path="/user/:id" component={OtherProfile} />
                    </div>
                </BrowserRouter>
                <Uploader
                    setProfilePic={(newpic) => this.setProfilePic(newpic)}
                />
            </section>
        );
    }
}
