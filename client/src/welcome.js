import Registration from "./registration";
import Login from "./login";
import Reset from "./reset";
import { HashRouter, Route } from "react-router-dom";
import ProfilePic from "./profile-pic";
import { Profile } from "./profile.js";
import ReactPlayer from "react-player";
import { Component } from "react";
import axios from "./axios";

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt();
        console.log(event.target);
    }

    _onPlay(event) {
        // access to player in all event handlers via event.target
        const player = event.target;
        console.log(event.target);
    }

    handleClick(e) {
        console.log("click on e", e);
        axios
            .get("/url")
            .then(({ data }) => {
                console.log("something in login");
                console.log(data);
                if (data) {
                    this.setState({
                        url: data.url,
                    });
                }
            })
            .catch((err) => console.log("err in post click", err));
    }

    render() {
        return (
            <div id="wrapper">
                <div id="nav">
                    <div id="walk-contrainer">
                        <button>Walk in Autralia</button>
                        <p onClick={(e) => this.handleClick(e)}>
                            Walk in Maulbourne
                        </p>
                        <p>Walk in Maulbourne</p>
                        <p>Walk in Maulbourne</p>
                        <p>Walk in Maulbourne</p>
                    </div>
                </div>
                <div id="player">
                    <ReactPlayer
                        constrols="false"
                        url="https://www.youtube.com/watch?v=rAeN7TdGq4o"
                        videoReady={this.videoReady}
                        playing={true}
                        width={"100%"}
                        height={"100%"}
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 0,
                                    playsinline: 1,
                                    rel: 0,
                                    iv_load_policy: 3,
                                    modestbranding: 1,
                                },
                            },
                        }}
                    />
                </div>
            </div>
        );
    }
}
