import axios from "axios";
import { Component } from "react";

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            url: null,
        };
    }

    handleChange(e) {
        console.log(e.target.files[0]);
        this.state.file = e.target.files[0];
    }

    handleClick() {
        console.log("click on upload");
        let formData = new FormData();
        formData.append("file", this.state.file);
        console.log("onclick", this.state.file);
        console.log(formData);
        axios
            .post("/picupload", formData)
            .then((data) => {
                console.log("post made pic");
                this.state.url = data.data.url;
                this.props.setProfilePic(data.data.url);
            })
            .then(console.log(this.state));
    }

    render() {
        return (
            <div>
                <div>Uploader</div>
                <input
                    onChange={(e) => this.handleChange(e)}
                    type="file"
                    name="file"
                    accept="image/*"
                />
                <button onClick={() => this.handleClick()}>
                    Upload profile pic
                </button>
            </div>
        );
    }
}
