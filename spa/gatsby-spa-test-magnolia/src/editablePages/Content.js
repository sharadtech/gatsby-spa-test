import React from 'react';
import { EditableArea } from '@magnolia/react-editor';
import { Helmet } from "react-helmet";
import { EditorContextHelper } from "@magnolia/react-editor";

const Content = props => {
  const { top, main, bottom, title } = props;
  console.log("Content.js : inEditorPreview : ", EditorContextHelper.inEditor());
  const authoringStyles = {
    display: EditorContextHelper.inEditor()?"block":"none"
  }

  return (
    <div className="content-page">
      <Helmet>
        <title>{title || props.metadata['@name']}</title>
      </Helmet>

      <div className="top">
        <div className="hint" style={authoringStyles}>[Top Area]</div>         
        {top && <EditableArea className="Area" content={top} />}  
      </div>

      <main>
        <div className="hint" style={authoringStyles}>[Main Area]</div>         
        {main && <EditableArea className="Area" content={main} />}  
      </main>

      <div className="bottom">
        <div className="hint" style={authoringStyles}>[Bottom Area]</div>
        {bottom && <EditableArea className="Area" content={bottom} />}  
      </div>    
    </div>
  ) 
};

export default Content;
