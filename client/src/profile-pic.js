export default function ProfilePic(props) {
    console.log("props in profile", props);
    return (
        <div>
            <div>Profile Pic</div>
            <img src={props.url}></img>
        </div>
    );
}
