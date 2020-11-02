import React from 'react';

const Headline = props => {
    console.log("Headline.js : props = ",props);
    const CustomTag = props.tag;
    return (
    <CustomTag className="Headline">{props.text}</CustomTag>
    );
}

export default Headline;
