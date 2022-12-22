
import Displayvideo from "../Components/Displayvideo/Displayvideo"
import Main from "../Components/Main/Main";
import Comments from "../Components/Comments/Comments";
import Video_list from "../Components/Videolist/Videolist";
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const url = 'https://project-2-api.herokuapp.com'
    const {videoId} = useParams();
    const [apiKey, setApiKey] = useState('');
    const [videoList, setvideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState([]);
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        axios.get('https://project-2-api.herokuapp.com/register')
            .then(response => {
                setApiKey(response.data)
                console.log('apikey is',apiKey)
            })
            .catch(e=>{
                console.log('apikey error is', e)
            })
    }, []);
    useEffect(() => {
        // https://project-2-api.herokuapp.com/videos?api_key=${apiKey}
        axios.get(`http://localhost:8080/videos`)
            .then(response => {
                setvideoList(response.data)
                console.log('video list is',videoList)
                setDisplayList(response.data.filter((video) =>{
                    return video !==response.data[0]
                }))
                console.log(displayList)
            })
            .catch(e=>{
                console.log('video list error is', e)
            })
    }, [apiKey]);

    useEffect(() => {
        // https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}
        axios.get(`http://localhost:8080/videos/${videoId}`)
            .then(response => {
                setActiveVideo(response.data)
                console.log('active video is', activeVideo)
            })
            .catch(e=>{
                console.log("active video error is", e)
            })
    }, [apiKey, videoId]);
            
    const handleClickVideo = (video) => {
        navigate (`/videos/${video.id}`)
        setDisplayList(videoList.filter((obj)=>{
            return obj !==video
        }))
    };
    return (
        <>
            {!activeVideo && <p>Loading page....</p>}
            {activeVideo && (
                <>
                    <Displayvideo  activeVideo={activeVideo.image} />
                    <div className='brainflix'>
                        <div className='brainflix__subcontainer1'>
                            <Main title={activeVideo.title} channel={activeVideo.channel} timestamp={activeVideo.timestamp} views={activeVideo.views} likes={activeVideo.likes} description={activeVideo.description} />
                            <Comments commentlist={activeVideo.comments} />
                        </div>
                        <div className='brainflix__subcontainer2'>
                            <Video_list handleClickVideo={handleClickVideo} videolist={displayList} />
                        </div>
                    </div>
                </>
            )}
        </>
        
    )
};

export default Home;