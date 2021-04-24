import { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";

export default class Registation extends Component {
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

    render() {
        const opts = {
            height: "1000",
            width: "1000",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                modestbranding: 1,
                showinfo: 0,
                playsinline: 1,
                rel: 0,
                iv_load_policy: 3,
            },
        };
        return (
            <div id="registration">
                <YouTube
                    videoId="xlQmXz7wzLE"
                    opts={opts}
                    onReady={this._onReady}
                    onPlay={this._onPlay}
                />
                <ReactPlayer
                    constrols="false"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    videoReady={this.videoReady}
                    playing={true}
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
                        facebook: {
                            appId: "12345",
                        },
                    }}
                />

                <div id="player">
                    <div id="nav">
                        <h1>Navigation</h1>
                    </div>
                </div>
            </div>
        );
    }
}
