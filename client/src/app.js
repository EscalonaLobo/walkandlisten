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

    render() {
        return (
            <section id="app">
                <h1>The Facebook Rip-off</h1>
                <div id="header">
                    <Logo />
                    <ProfilePic
                        {...this.state.user}
                        showUploader={() => this.showUploader()}
                    />
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
