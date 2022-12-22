
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
    // const [apiKey, setApiKey] = useState('');
    const [videoList, setvideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState([]);
    const [displayList, setDisplayList] = useState([]);

    // useEffect(() => {
    //     axios.get('https://project-2-api.herokuapp.com/register')
    //         .then(response => {
    //             setApiKey(response.data)
    //             console.log('apikey is',apiKey)
    //         })
    //         .catch(e=>{
    //             console.log('apikey error is', e)
    //         })
    // }, []);
    useEffect(() => {
        // https://project-2-api.herokuapp.com/videos?api_key=${apiKey}
        axios.get(`http://localhost:8080/videos`)
            .then(response => {
                const [displayVideo, ...listedVideos] = response.data;
                setvideoList(response.data);
                setDisplayList(listedVideos);
                // setActiveVideo(displayVideo);
            })
            .catch(e=>{
                console.log('video list error is', e)
            })
    }, []);

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
    }, [videoId]);
            
    const handleClickVideo = (selectedVideo) => {
        navigate (`/videos/${selectedVideo.id}`);
        setDisplayList(videoList.filter((video)=>{
            return video.id !== selectedVideo.id;
        }));
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