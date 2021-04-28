// import Registration from "./registration";
// import Login from "./login";
// import Reset from "./reset";
// import { HashRouter, Route } from "react-router-dom";
// import ProfilePic from "./profile-pic";
// import { Profile } from "./profile.js";
import ReactPlayer from "react-player";
import { Component } from "react";
import axios from "./axios";
import React from "react";
// import  VolumeUpIcon  from "@material-ui/icons/VolumeUp";

//random commet

export default class Welcome extends Component {
    constructor() {
        super();
        this.player = React.createRef();
        this.state = {
            data: [],
            playing: true,
            playbackRate: 1.0,
            muted: true,
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ url: "https://www.youtube.com/watch?v=zca688Ecwpk" });
        this.setState({ muted: true });
    }

    handleUnmute(e) {
        console.log("event on mute:", e);
        this.setState({ muted: !this.state.muted });
    }

    handlePlayPause(e) {
        console.log("eonpause", e);
        this.setState({ playing: !this.state.playing });
    }

    handleSetPlaybackRate(e) {
        console.log("eonspeed", e);
        this.setState({ playbackRate: parseFloat(e.target.value) });
    }

    async handleTimeTravel(e) {
        console.log("click on time", e);
        console.log("player", this.player.current);
        const currentTime = await this.player.current.getCurrentTime();
        console.log("currentT", currentTime);
        if (currentTime) {
            this.player.current.seekTo(
                // parseFloat(e.target.value + currentTime)
                currentTime + +e.target.value
            );
        }
    }

    async handleTimeTravelTwo(e) {
        console.log("click on time", e);
        console.log("player", this.player.current);
        const currentTime = await this.player.current.getCurrentTime();
        console.log("currentT", currentTime);
        if (currentTime) {
            this.player.current.seekTo(
                // parseFloat(e.target.value + currentTime)
                currentTime + +e.target.value
            );
        }
    }

    async handleTimeTravelThree(e) {
        console.log("click on time", e);
        console.log("player", this.player.current);
        const currentTime = await this.player.current.getCurrentTime();
        console.log("currentT", currentTime);
        if (currentTime) {
            this.player.current.seekTo(
                // parseFloat(e.target.value + currentTime)
                currentTime + +e.target.value
            );
        }
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

    handleClickau(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlau", this.state)
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

    handleClickvi(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlaustria", this.state)
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

    handleClickbr(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlbrazil", this.state)
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

    handleClickch(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlchina", this.state)
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

    handleClickbo(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlcolom", this.state)
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

    handleClickha(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlcuba", this.state)
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

    handleClickpr(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlprague", this.state)
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

    handleClickden(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urldenmark", this.state)
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

    handleClickegypt(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlegypt", this.state)
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

    handleClickethi(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlethiopia", this.state)
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

    handleClickfin(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlfinland", this.state)
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

    handleClickber(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlberlin", this.state)
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

    handleClickathens(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlathens", this.state)
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

    handleClickbuda(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlbuda", this.state)
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

    handleClickindi(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlfindia", this.state)
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

    handleClickdub(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urldublin", this.state)
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

    handleClickisra(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlfisrael", this.state)
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

    handleClickita(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlrome", this.state)
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

    handleClickitatok(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urltokyo", this.state)
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

    handleClickjor(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urljordan", this.state)
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

    handleClickkuala(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlkuala", this.state)
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

    handleClickmx(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlmx", this.state)
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

    handleClickmonac(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlmonaco", this.state)
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

    handleClickams(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlams", this.state)
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

    handleClicklim(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urllima", this.state)
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

    handleClicklis(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urllisbon", this.state)
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

    handleClickru(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlru", this.state)
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

    handleClickser(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlser", this.state)
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

    handleClicksin(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlsin", this.state)
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

    handleClickbra(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlbratis", this.state)
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

    handleClickmad(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlmad", this.state)
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

    handleClickstock(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlstock", this.state)
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

    handleClickzu(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlzu", this.state)
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

    handleClickbang(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlthai", this.state)
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

    handleClickist(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlis", this.state)
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

    handleClickky(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlky", this.state)
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

    handleClickuk(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urluk", this.state)
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

    handleClickus(e) {
        console.log("click on e", e.target.lastChild.data);
        axios
            .get("/urlus", this.state)
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
            <div>
                <div id="nav">
                    <h2>Walk around</h2>
                    <div id="walk-contrainer">
                        <h3>Scroll down for more cities.</h3>
                        <p onClick={(e) => this.handleClickar(e)}>
                            Buenos Aires, Argentina
                        </p>
                        <p onClick={(e) => this.handleClickau(e)}>
                            Sydney, Australia
                        </p>
                        <p onClick={(e) => this.handleClickvi(e)}>
                            Vienna, Austria
                        </p>
                        <p onClick={(e) => this.handleClickbr(e)}>
                            São Paulo, Brazil
                        </p>
                        <p onClick={(e) => this.handleClickch(e)}>
                            Beijin, China
                        </p>
                        <p onClick={(e) => this.handleClickbo(e)}>
                            Bogota, Colombia
                        </p>
                        <p onClick={(e) => this.handleClickha(e)}>
                            Havana, Cuba
                        </p>
                        <p onClick={(e) => this.handleClickpr(e)}>
                            Prague, Czech Republic
                        </p>
                        <p onClick={(e) => this.handleClickden(e)}>
                            Copenhagen, Denmark
                        </p>
                        <p onClick={(e) => this.handleClickegypt(e)}>
                            Cairo, Egypt
                        </p>
                        <p onClick={(e) => this.handleClickethi(e)}>
                            Addis Abada, Ethiopia
                        </p>
                        <p onClick={(e) => this.handleClickfin(e)}>
                            Helsinki, Finland
                        </p>
                        <p onClick={(e) => this.handleClickber(e)}>
                            Berlin, Germany
                        </p>
                        <p onClick={(e) => this.handleClickathens(e)}>
                            Athens, Greece
                        </p>
                        <p onClick={(e) => this.handleClickbuda(e)}>
                            Budapest, Hungary
                        </p>
                        <p onClick={(e) => this.handleClickindi(e)}>
                            New Delhi, India
                        </p>
                        <p onClick={(e) => this.handleClickdub(e)}>
                            Dublin, Ireland
                        </p>
                        <p onClick={(e) => this.handleClickisra(e)}>
                            Tel Aviv, Israel
                        </p>
                        <p onClick={(e) => this.handleClickita(e)}>
                            Rome, Italy
                        </p>
                        <p onClick={(e) => this.handleClickitatok(e)}>
                            Tokyo, Japan
                        </p>
                        <p onClick={(e) => this.handleClick(e)}>
                            Niiata, Japan
                        </p>
                        <p onClick={(e) => this.handleClickjor(e)}>
                            Amman, Jordan
                        </p>
                        <p onClick={(e) => this.handleClickkuala(e)}>
                            Kuala Lumpur, Malaysia
                        </p>
                        <p onClick={(e) => this.handleClickmx(e)}>
                            Mexico City, Mexico
                        </p>
                        <p onClick={(e) => this.handleClickmonac(e)}>
                            Monte Carlo, Monaco
                        </p>
                        <p onClick={(e) => this.handleClickams(e)}>
                            Amsterdam, Netherlands
                        </p>
                        <p onClick={(e) => this.handleClicklim(e)}>
                            Lima, Peru
                        </p>
                        <p onClick={(e) => this.handleClicklis(e)}>
                            Lisbon, Portugal
                        </p>
                        <p onClick={(e) => this.handleClickru(e)}>
                            Moscow, Russia
                        </p>
                        <p onClick={(e) => this.handleClickser(e)}>
                            Belgrade, Serbia
                        </p>
                        <p onClick={(e) => this.handleClicksin(e)}>
                            Singapore, Singapore
                        </p>
                        <p onClick={(e) => this.handleClickbra(e)}>
                            Bratislava, Slovenia
                        </p>
                        <p onClick={(e) => this.handleClickmad(e)}>
                            Madrid, Spain
                        </p>
                        <p onClick={(e) => this.handleClickstock(e)}>
                            Stockholm, Sweden
                        </p>
                        <p onClick={(e) => this.handleClickzu(e)}>
                            Zurich, Switzerland
                        </p>
                        <p onClick={(e) => this.handleClickbang(e)}>
                            Bangkok, Thailamd
                        </p>
                        <p onClick={(e) => this.handleClickist(e)}>
                            Istanbul, Turkey
                        </p>
                        <p onClick={(e) => this.handleClickky(e)}>
                            Kyiv, Ukraine
                        </p>
                        <p onClick={(e) => this.handleClickuk(e)}>
                            London, United Kingdom
                        </p>
                        <p onClick={(e) => this.handleClickus(e)}>
                            New York, United States
                        </p>
                    </div>
                    <div id="stopgo">
                        <button id="stop" onClick={(e) => this.handleUnmute(e)}>
                            {this.state.muted ? "Sound on" : "Off"}
                        </button>
                    </div>
                    <div id="faster">
                        <h3 id="h3faster">Walk faster</h3>
                        <button
                            id="onex"
                            onClick={(e) => this.handleSetPlaybackRate(e)}
                            value={1}
                        >
                            1x
                        </button>
                        <button
                            id="onefivex"
                            onClick={(e) => this.handleSetPlaybackRate(e)}
                            value={1.5}
                        >
                            1.5x
                        </button>
                        <button
                            id="twox"
                            onClick={(e) => this.handleSetPlaybackRate(e)}
                            value={2}
                        >
                            2x
                        </button>
                    </div>

                    <div id="faster">
                        <h3 id="h3faster">Time travel</h3>
                        <button
                            id="onex"
                            onClick={(e) => this.handleTimeTravelThree(e)}
                            value={-10}
                        >
                            -10
                        </button>
                        <button
                            id="onefivex"
                            onClick={(e) => this.handleTimeTravelTwo(e)}
                            value={20}
                        >
                            +20
                        </button>
                        <button
                            id="twox"
                            onClick={(e) => this.handleTimeTravel(e)}
                            value={50}
                        >
                            +50
                        </button>
                    </div>
                    <div id="stopgo">
                        <button
                            id="stop"
                            onClick={(e) => this.handlePlayPause(e)}
                        >
                            {this.state.playing ? "Stop walking" : "Go"}
                        </button>
                    </div>
                    <div id="links">
                        <a
                            id="coffee"
                            href="https://www.buymeacoffee.com/gabrielescalona"
                            target="_blank"
                            rel="noreferrer"
                        >
                            | Buy me a coffee |
                        </a>
                        <a
                            href="https://www.linkedin.com/in/escalonalobo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            | Hire me |
                        </a>

                        <a
                            href="https://docs.google.com/spreadsheets/d/15MgW6Z9Zl5AqDXwxC3Macv8DppRsGz5zlTH6QxzJgmc/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            | Sources |
                        </a>
                    </div>
                </div>
                <div id="wrapper">
                    <div id="player">
                        <ReactPlayer
                            onReady={() => console.log("onReady")}
                            ref={this.player}
                            constrols="false"
                            url={this.state.url}
                            videoReady={this.videoReady}
                            playing={this.state.playing}
                            playbackRate={this.state.playbackRate}
                            loop="true"
                            width={"100%"}
                            height={"100%"}
                            muted={this.state.muted}
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
            </div>
        );
    }
}
