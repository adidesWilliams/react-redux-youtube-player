import React from 'react';

const VideoDetail = ({video}) => {

  //add check to make sure there is a video provided before the App component renders
  //since there's a return statement the no video function will terminate in the event that there is not a video
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoId = video.id.videoId;
  /*const url = 'https://www.youtube.com/embed/' + videoId; ES5*/
  //const url from iframe embed
  const url = `https://www.youtube.com/embed/${videoId}`; //ES6 : template strings. use backticks `` to inject variable into string. feels like swift
  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>

      </div>

    </div>

  );

};
export default VideoDetail;
