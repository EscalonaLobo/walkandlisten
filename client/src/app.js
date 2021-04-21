import { Component } from "react";
import Logo from "./logo";
import ProfilePic from "./profile-pic";
import Uploader from "./uploader";
import axios from "./axios";
import { Profile } from "./profile";
import { BrowserRouter, Route } from "react-router-dom";
import OtherProfile from "./otherprofile";
import FindPeople from "./findpeople";
import { Friends } from "./friends";
import Chat from "./chat";

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

    hideUploader() {
        this.setState({ uploaderVisible: false });
    }

    setProfilePic(newpic) {
        this.setState((prevState) => {
            return {
                user: {
                    ...prevState.user,
                    profilepic: newpic,
                },
                uploaderVisible: false,
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

    logout(e) {
        e.preventDefault();
        axios.get("/logout").then((data) => {
            location.replace("/welcome");
        });
    }

    render() {
        return (
            <section id="app">
                <h1>🐯 Tigerbook 🐯</h1>
                <div id="header">
                    <Logo />
                    <ProfilePic
                        {...this.state.user}
                        showUploader={() => this.showUploader()}
                    />
                    <ul>
                        <li>
                            <a href="/friends">
                                Your tiger friends and requests
                            </a>
                        </li>
                        <li>
                            <a href="/users">Find new tigers</a>
                        </li>
                        <li>
                            <a href="/chat">Chat with tigers</a>
                        </li>
                    </ul>
                    <button id="btn-logout" onClick={(e) => this.logout(e)}>
                        Log out
                    </button>
                </div>

                <BrowserRouter>
                    <div>
                        <Route
                            exact
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
                        <Route path="/users/" component={FindPeople} />
                        <Route path="/friends/" component={Friends} />
                        <Route path="/chat/" component={Chat} />
                    </div>
                </BrowserRouter>
                {this.state.uploaderVisible && (
                    <Uploader
                        hideUploader={() => this.hideUploader()}
                        setProfilePic={(newpic) => this.setProfilePic(newpic)}
                    />
                )}
            </section>
        );
    }
}
