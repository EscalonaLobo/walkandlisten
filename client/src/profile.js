import BioEditor from "./bio-editor";
import ProfilePic from "./profile-pic.js";

export function Profile(props) {
    console.log("props in profile", props);
    // All the props need to be passed down from <App />
    return (
        <section id={"profile"}>
            <h2>
                {props.first} {props.last}
            </h2>
            <ProfilePic
                firstName={props.first}
                lastName={props.last}
                profilepic={props.profilepic}
                showUploader={props.showUploader}
            />
            <BioEditor />
        </section>
    );
}
