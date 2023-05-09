import Project1 from "./Projects/project1";
import Project2 from "./Projects/project2";
import Project3 from "./Projects/project3";
import Project4 from "./Projects/project4";
import "./projects.css";
import { motion } from "framer-motion";

function Projects({ firstLine }) {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -150 }}
      transition={{ type: "tween", duration: 1 }}
    >
      <div>
        <Project1 />
      </div>
      <div>
        <Project2 />
      </div>
      <div>
        <Project3 />
      </div>
      <div>
        <Project4 />
      </div>
    </motion.div>
  );
}

export default Projects;

// import { Component } from "react";

// class project extends Component {
// constructor (props){
//     super()
// }
//   state = {};
//   render() {
// //     return
//  <div>
// <p> {this.props.xxx} </p>
// </div>;
//   }
// }

// export default Projects;
