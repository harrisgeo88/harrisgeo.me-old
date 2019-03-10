import React from "react";
import posed from "react-pose";

export default posed.div({
  attention: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 0
    }
  }
});
