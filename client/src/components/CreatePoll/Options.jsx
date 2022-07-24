// main libraries
import React from 'react';

// component
import TextOptions from './TextOptions/TextOptions';
import PhotoOptions from './PhotoOptions/PhotoOptions';
import VideoOptons from './VideoOptions/VideoOptions';

const Options = (props) => {
  switch (props.type) {
    case 'text':
      return <TextOptions options={props.options} setOptions={props.setOptions} />;
    case 'photo':
      return <PhotoOptions photoOptions={props.photoOptions} setPhotoOptions={props.setPhotoOptions} />;
    // case 'video':
    //   return <VideoOptons />;
    default:
      return null;
  }
};

export default Options;
