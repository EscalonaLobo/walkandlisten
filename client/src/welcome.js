import Registration from "./registration";
import Login from "./login";
import Reset from "./reset";
import { HashRouter, Route } from "react-router-dom";
import ProfilePic from "./profile-pic";
import { Profile } from "./profile.js";

export default function Welcome() {
    return (
        <div>
            <h1 id="welcome">Welcome to The Facebook Rip-off</h1>
            <HashRouter>
                <Route exact path="/" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/reset" component={Reset} />
                <Route path="/profile-pic" component={ProfilePic} />
                <Route path="/profile" component={Profile} />
            </HashRouter>
        </div>
    );
}
