import React from 'react';

//{video} says first object in argument's array has a property video
//onVideoSelect callback passed as prop from parent to VideoList to VideoListItem
const VideoListItem = ({video, onVideoSelect}) => {
  /*const video = props.video;
	 const onVideoSelect = props.onVideoSelect
	equivalent statement is ({videos, onVideoSelect})=>*/

  const imageUrl = video.snippet.thumbnails.default.url;

  return (

    <li onClick ={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <div className="media-heading">{video.snippet.defaultAudioLanguage}</div>
        </div>

        
      </div>

    </li>

  );
};

export default VideoListItem;
