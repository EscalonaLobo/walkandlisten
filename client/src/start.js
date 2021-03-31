import ReactDOM from "react-dom";

import Registration from "./registration";

let elem;

if (location.pathname === "/welcome") {
    elem = <Welcome />;
} else {
    elem = <p>your logo component should go here</p>;
}

ReactDOM.render(<Registration />, document.querySelector("main"));
