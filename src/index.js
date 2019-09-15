import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
// import App from "./component/app.component.js";

// class CarList extends Component {
//     render() {
//         console.log(this.props);
        
//         const { list } = this.state;

//            return (
//             <div>
//                 <h3>Car list</h3>
//                 {/* <ul>
//                     {data.map(i => (
//                         <li>{i.value}</li>
//                     ))}
//                 </ul> */}
//             </div> 
//             )}
// }


// ReactDOM.render(<CarList />, document.querySelector("#root"));

// class Index extends React.Component {
//     render() {
//         return (
//             <div className="wrapper">
//                 <App />
//             </div>
//         )
//     }
// }


ReactDOM.render(<App />, document.querySelector("#root"));