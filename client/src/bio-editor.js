// import { response } from "express";
import { Component } from "react";
import axios from "./axios";

export default class BioEditor extends Component {
    constructor(props) {
        console.log("props in bioeditor", props);
        super(props);

        this.state = {
            // You may want to set some defaults here
            error: false,
            showEditor: false,
        };

        // May wanna bind some methods here
    }

    // toggleEditMode() {
    //     // To toggle the editMode state variable.
    // }

    handleBioChange(event) {
        console.log(event);
        // To keep track of the bio the user types
        this.setState(
            {
                [event.target.name]: [event.target.value],
            },
            () => console.log(this.state)
        );
    }

    submitBio() {
        // 1. Post the new bio the user typed (you should read it from this.state.draft)
        // 2. Set the new bio in the state of App
        console.log("click on save");
        axios
            .post("/userbio", this.state)
            .then((res) => {
                console.log(res);
                // this.props.setBio(res.data.bio);
                this.setState({ showEditor: false });
            })
            .catch((err) => console.log("err in post bio", err));
    }

    render() {
        return (
            <div id="bio-editor">
                <h1>Bio</h1>
                <textarea
                    onChange={() => this.handleBioChange(event)}
                    className="textArea"
                    name="bio"
                ></textarea>
                <button onClick={() => this.submitBio()}>Save</button>
            </div>
        );
    }
}
