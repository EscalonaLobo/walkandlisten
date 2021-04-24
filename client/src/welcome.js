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
