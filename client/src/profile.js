import { BioEditor } from "./bio-editor.js";
import { ProfilePic } from "./profile-pic.js";

export function Profile(props) {
    // All the props need to be passed down from <App />
    return (
        <section id={"profile"}>
            <h2>
                {props.firstName} {props.lastName}
            </h2>
            <ProfilePic
                firstName={props.firstName}
                lastName={props.lastName}
                profilePic={props.profilePic}
                showUploader={props.showUploader}
            />
            <BioEditor bio={props.bio} setBio={props.setBio} />
        </section>
    );
}
