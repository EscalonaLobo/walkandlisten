export default function ProfilePic(props) {
    console.log("props in profile", props);
    return (
        <div id="profilepic">
            <img
                src={props.profilepic || "noun_profile_1222484.png"}
                onClick={() => props.showUploader()}
            ></img>
        </div>
    );
}
