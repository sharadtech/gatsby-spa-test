import React from 'react';

const Cta = props => {
    console.log("CTA.js : props = ",props);
    return (
    <a className="cta" href={props.ctalink} >{props.ctatext}</a>
    );
}

export default Cta;