import React from "react"

const Hero = props => {
  console.log("Hero.js : props = ", props);
  return (
    <picture>
      <source srcset={process.env.GATSBY_MGNL_DAM_RAW + props.desktopImage["@link"]} media="(min-width: 800px)" />
      <source srcset={process.env.GATSBY_MGNL_DAM_RAW + props.tabletImage["@link"]} media="(min-width: 600px)" />
      <source srcset={process.env.GATSBY_MGNL_DAM_RAW + props.mobileImage["@link"]} media="(min-width: 0px)" />
      <img className="hero-image" src={process.env.GATSBY_MGNL_DAM_RAW + props.desktopImage["@link"]} alt={props.alttext} />
    </picture>
  );
}

export default Hero