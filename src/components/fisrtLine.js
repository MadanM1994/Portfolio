import "./firstline.css";
import { motion } from "framer-motion";

function FirstLine() {
  return (
    <div>
      <div className="firstline-container">
        <div className="row">
          <div className="col text-center firstline">
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: -100 }}
              transition={{ duration: 2 }}
            >
              Madan Mohan - Portfolio Website
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstLine;
