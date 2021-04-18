export default function ProfilePic(props) {
    console.log("props in profile", props);
    return (
        <div id="profilepic">
            <img
                id={"thepic"}
                src={props.profilepic || "smallcat.png"}
                onClick={() => props.showUploader()}
            ></img>
        </div>
    );
}
