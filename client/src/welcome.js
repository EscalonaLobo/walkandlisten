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
        console.log("click on e", e.target.lastChild.data);
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

    handleClickar(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlar", this.state)
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
                    <h2>Walk around</h2>
                    <h3>Cities</h3>
                    <div id="walk-contrainer">
                        <p onClick={(e) => this.handleClickar(e)}>
                            Buenos Aires, Argentina
                        </p>
                        <p>Sydney, Australia</p>
                        <p>Vienna, Austria</p>
                        <p>São Paulo, Brazil</p>
                        <p>Beijin, China</p>
                        <p>Bogota, Colombia</p>
                        <p>Havana, Cuba</p>
                        <p>Prague, Czech Republic</p>
                        <p>Copenhagen, Denmark</p>
                        <p>Cairo, Egypt</p>
                        <p>Addis Abada, Ethiopia</p>
                        <p>Helsinki, Finland</p>
                        <p>Berlin, Germany</p>
                        <p>Athens, Greece</p>
                        <p>Budapest, Hungary</p>
                        <p>New Delhi, India</p>
                        <p>Dublin, Ireland</p>
                        <p>Tel Aviv, Israel</p>
                        <p>Rome, Italy</p>
                        <p>Tokyo, Japan</p>
                        <p onClick={(e) => this.handleClick(e)}>
                            Niiata, Japan
                        </p>
                        <p>Amman, Jordan</p>
                        <p>Kuala Lumpur, Malaysia</p>
                        <p>Mexico City, Mexico</p>
                        <p>Monte Carlo, Monaco</p>
                        <p>Amsterdam, Netherlands</p>
                        <p>Lima, Peru</p>
                        <p>Lisbon, Portugal</p>
                        <p>Moscow, Russia</p>
                        <p>Belgrade, Serbia</p>
                        <p>Singapore, Singapore</p>
                        <p>Bratislava, Slovenia</p>
                        <p>Madrid, Spain</p>
                        <p>Stockholm, Sweden</p>
                        <p>Zurich, Switzerland</p>
                        <p>Bangkok, Thailamd</p>
                        <p>Istanbul, Turkey</p>
                        <p>Kyiv, Ukraine</p>
                        <p>London, United Kingdom</p>
                        <p>New York, United States</p>
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
