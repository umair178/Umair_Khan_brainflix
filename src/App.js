//import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main'
import Displayvideo from './Components/Displayvideo/Displayvideo'
import Videolist from './Components/Videolist/Videolist';
import Comments from './Components/Comments/Comments';
import { useState } from 'react';
import videosdetails from './data/video-details.json'


function App() {
  
  // const printindex = videosdetails.findIndex((video)=>{
  //   return video.id==="25ce5d91-a262-4dcf-bb87-42b87546bcfa"
  // })
  //console.log(printindex)
  
  const [activeVideo,setActiveVideo]= useState(videosdetails[0])
  const [nextVideo,setNextVideo] = useState(
    videosdetails.filter((video)=>{
      return video!==videosdetails[0]
    })
  )
 
  const handleClickVideo = (video)=>{
    console.log(video);
    setActiveVideo(video);
    
    const new_nextVideo = videosdetails.filter((obj)=>{
      return obj.id!==video.id
    })
    setNextVideo(new_nextVideo)
  }

  // const printid = videosdetails.filter((video)=>{
  //   return video.id!=="84e96018-4022-434e-80bf-000ce4cd12b8"
  // })
  // console.log(printid)
  
  return (
    <body>
      <Nav/>
      <Displayvideo  activeVideo={activeVideo.image} /> 
      <div className='brainflix'>
        <div className='brainflix__subcontainer1'>
          <Main title={activeVideo.title} channel={activeVideo.channel} views={activeVideo.views} likes={activeVideo.likes} description={activeVideo.description} />
          <Comments commentlist={activeVideo.comments}/>
        </div>
        <div className='brainflix__subcontainer2'>
          <Videolist handleClickVideo={handleClickVideo} videolist={nextVideo} />
        </div>
      </div>
    </body>
  );
}

export default App;
