import React from 'react';

const RichText = props => <p className="Paragraph" dangerouslySetInnerHTML={{ __html: props.richText }} />;

export default RichText;
