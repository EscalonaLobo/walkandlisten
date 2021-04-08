import { response } from "express";
import { Component } from "react";
import axios from "./axios";

export default class BioEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // You may want to set some defaults here
            error: false,
            showEditor: false,
        };

        // May wanna bind some methods here
    }

    toggleEditMode() {
        // To toggle the editMode state variable.
    }

    handleBioChange(event) {
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
        axios.post("/userbio", this.state).then((res) => {
            console.log(res);
            this.props.setBio(response.data.bio);
            this.setState({ showEditor: false });
        });
    }

    render() {
        return (
            <section id={"bio-editor"}>
                {/*
                 Lots of rendering logic here, depending on whether:
                 1. You are in edit mode or not
                 2. If you are not in edit mode: whether a bio already exists
                 */}
            </section>
        );
    }
}
