import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    /*add etag key to uniquely identify videos*/
    return (
			<VideoListItem onVideoSelect={props.onVideoSelect} //call back from App
  key={video.etag} 
	video={video}/>
);
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}

    </ul>

  );
};

export default VideoList;
