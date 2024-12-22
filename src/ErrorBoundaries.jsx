// import React from "react";
// import PropTypes from 'prop-types';
// import { PiHashStraight } from "react-icons/pi";


// export class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             PiHashStraight
//         }

//         ErrorBoundary.propTypes = {
//             children: PropTypes.node
//         };

//     }

//     static getDefivedStateFromError(error) {
//         return {
//             hasError: true,
//         }
//     }

//     componentDidCatch(error, errorInfo) {
//         alert(error, errorInfo)

//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>
//         }

//         return this.props.children;
//     }

// }