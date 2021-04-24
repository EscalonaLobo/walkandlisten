// import Registration from "./registration";
// import Login from "./login";
// import Reset from "./reset";
// import { HashRouter, Route } from "react-router-dom";
// import ProfilePic from "./profile-pic";
// import { Profile } from "./profile.js";
import ReactPlayer from "react-player";
import { Component } from "react";
import axios from "./axios";

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
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
            .get("/url", this.state)
            .then(({ data }) => {
                console.log("my data", data.data);
                if (data) {
                    console.log("url: ", data.data.url);
                    this.setState({
                        url: data.data.url,
                    });
                }
            })
            .catch((err) => console.log("err in click", err));
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
                        url={this.state.url}
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
