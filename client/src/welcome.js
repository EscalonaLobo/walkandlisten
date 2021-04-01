import Registration from "./registration";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome to my SN!</h1>
            <Registration />
        </div>
    );
}

// import Registration from "./registration";
// import { HashRouter, Route } from "react-router-dom";

// export default function Welcome() {
//     return (
//         <div>
//             <h1>welcome to my sn</h1>
//             <HashRouter>
//                 <div>
//                     <Route exact path="/" component={Registration} />
//                     <Route exact path="login" component={login} />
//                     <Registration />
//                 </div>
//             </HashRouter>
//         </div>
//     );
// }
