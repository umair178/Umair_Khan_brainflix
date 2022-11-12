//import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main'
import Displayvideo from './Components/Displayvideo/Displayvideo'
import Videolist from './Components/Videolist/Videolist';
import { useState } from 'react';
import videosdetails from './data/video-details.json'
import xyz from './data/videos.json'


function App() {
  console.log(videosdetails)

  const printid = videosdetails.filter((video)=>{
    return video.id==="c05b9a93-8682-4ab6-aff2-92ebb4bbfc14"
  })
  console.log(printid)

  const printindex = videosdetails.findIndex((video)=>{
    return video.id==="25ce5d91-a262-4dcf-bb87-42b87546bcfa"
  })
  console.log(printindex)
  

  const [activeVideo,setActiveVideo]= useState(videosdetails[0])

  const handleClickVideo = (video)=>{
    
    //event.preventDefault();
    let video_ID = video.id;
    console.log(video_ID);
    return video_ID;

  }
  const changeActiveVideo = (video_id) => {
    printindex = videosdetails.findIndex((video)=>{
      return video.id==={handleClickVideo}
    })
    
    setActiveVideo(videosdetails[printindex])
  }

 
  return (
    <body>
      <Nav/>
      <Displayvideo thumbnail={activeVideo.image} activeVideo={activeVideo.image}/> 
      <Main/>
      <Videolist handleClickVideo={handleClickVideo} />
    </body>
  );
}

export default App;
