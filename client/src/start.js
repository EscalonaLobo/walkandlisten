import ReactDOM from "react-dom";
import Welcome from "./welcome";
import { App } from "./app";
// import { init } from "./socket";

let elem;

if (location.pathname === "/welcome") {
    elem = <Welcome />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
