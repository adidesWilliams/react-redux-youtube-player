import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDA709xqviH9RbGkI94fz6PquEJLSL8680'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      //when app boots up video is an empty array and selected video is null
      videos: [],
      selectedVideo: null

    };
    //when component is first rendered to the DOM, videoSearch will be iniitiated
    this.videoSearch('surfboards');

  }
  //search function moved into constructor to immediately present the user with data
  videoSearch(term) {
    //YTSearch({key: API_KEY, term: 'surfboards'}, ((videos) => this.setState({videos: videos}))) the key is videos and the value is videos

    YTSearch({
      key: API_KEY,
      term: term,
         }, (videos) => {
      this.setState({
        //after call to youtube, pass list of videos to videos and first video to selectedVideo
        videos: videos,
        selectedVideo: videos[0]

      });
    });

  }

  render() {
    //passing videoSearch(term) function into debounce, which returns a function that will only be called every 300ms
    //that is then assigned to the videoSearch constant which is then passed to onSearchTermChange in SearchBar
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>

        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}  //pass callback to video_list and video_list_item; this function just update the app's state. it takes a video then updates VideoSelect
          videos={this.state.videos}/>
      </div>
    );
  }

}
ReactDOM.render(
  <App/>, document.querySelector('.container'))
