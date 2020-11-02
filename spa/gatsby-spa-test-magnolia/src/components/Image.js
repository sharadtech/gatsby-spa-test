import React from "react"

const Image = props => {
  console.log("Image.js : props = ", props);
  return (
  <img className="Image" src={process.env.GATSBY_MGNL_DAM_RAW + props.image["@link"]} alt="Etiam Purus" />
  );
}

export default Image
