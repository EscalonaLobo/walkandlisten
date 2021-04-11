import Registration from "./registration";
import Login from "./login";
import Reset from "./reset";
import { HashRouter, Route } from "react-router-dom";
import ProfilePic from "./profile-pic";
import { Profile } from "./profile.js";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome to my SN!</h1>
            <HashRouter>
                <Route exact path="/" component={Registration} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/profile-pic" component={ProfilePic} />
                <Route exact path="/profile" component={Profile} />
            </HashRouter>
        </div>
    );
}
