import BioEditor from "./bio-editor";
import ProfilePic from "./profile-pic.js";

export function Profile(props) {
    console.log("props in profile", props);
    // All the props need to be passed down from <App />
    return (
        <div id={"profile"}>
            <p>
                {props.first} {props.last}
            </p>
            <section id={"profile-section"}>
                <ProfilePic
                    firstName={props.first}
                    lastName={props.last}
                    profilepic={props.profilepic}
                    showUploader={props.showUploader}
                />
                <BioEditor bio={props.bio} setBio={props.setBio} />
            </section>
        </div>
    );
}
