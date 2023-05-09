import React from "react";
import { motion } from "framer-motion";
import "./home.css";

function Home({ firstLine }) {
  const [bounce, setBounce] = React.useState(false);

  return (
    <div>
      <div className="box-1">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <img src="" alt="Profile Pic" className="profile-pic" />
          </div>
          <motion.div
            className="col-md-6 home-content"
            animate={{ y: -0 }}
            initial={{ y: 100 }}
            transition={{ type: "spring", duration: 3 }}
          >
            <h2 className="h1-line">Hi, I Am Your UI Devloper</h2>
            <h4>Web Designer. Web Developer. UI/UX Expert.</h4>
          </motion.div>
        </div>
      </div>
      <div className="wrapper">
        <motion.div className="container" whileHover={{ scale: 1.1 }}>
          <motion.div
            className="box-text"
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{ duration: 2 }}
          >
            <p>
              As a portfolio, I showcase my skills as a technology and product
              enthusiast with a focus on developing rich web applications and
              web service applications using a range of technologies such as
              HTML, CSS, Javascript, Bootstrap, Typescript, Angular, React,
              React Native, Vue, Java, J2EE, SQL, AWS, JQuery, AJAX, and other
              tools/frameworks. I have actively collaborated with teams on
              various ongoing development projects. I enjoy taking on
              challenging paths as a developer, as they provide exponential
              opportunities to learn and grow. My career growth has been driven
              by tackling these challenges head-on and developing effective,
              robust, and scalable solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
