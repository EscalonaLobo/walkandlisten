import Registration from "./registration";
import Login from "./login";
import Reset from "./reset";
import { HashRouter, Route } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome to my SN!</h1>
            <HashRouter>
                <Route exact path="/" component={Registration} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/reset" component={Reset} />
            </HashRouter>
        </div>
    );
}
