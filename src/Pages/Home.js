
import Displayvideo from "../Components/Displayvideo/Displayvideo"
import Main from "../Components/Main/Main";
import Comments from "../Components/Comments/Comments";
import Video_list from "../Components/Videolist/Videolist";
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";
import {useRef} from 'react';

function Home() {
    const navigate = useNavigate();
    const url = 'https://project-2-api.herokuapp.com'
    const {videoId} = useParams();
    const formRef = useRef();
    // const [apiKey, setApiKey] = useState('');
    const [videoList, setvideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [commentList, setCommentList] = useState([]);


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
    }, []);

    useEffect(() => {
        // https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}
        axios.get(`http://localhost:8080/videos/${videoId}`)
            .then(response => {
                setActiveVideo(response.data)
                setCommentList(response.data.comments)
                console.log('active video is', activeVideo)
            })
            .catch(e=>{
                console.log("active video error is", e)
            })
    }, [ videoId]);
            
    const handleClickVideo = (video) => {
        navigate (`/videos/${video.id}`)
        setDisplayList(videoList.filter((obj)=>{
            return obj !==video
        }))
    };
    const handleaddcomment = (e)=>{
        e.preventDefault()
        console.log('clicked')
        const new_comment = {
            comment: formRef.current.comment.value
        }
        console.log(new_comment)
        document.getElementById('form').reset()
        axios.post(`http://localhost:8080/videos/${videoId}`, new_comment).then(response=>{
            console.log(response)
            axios.get(`http://localhost:8080/videos/${videoId}`).then(response=>{
                setCommentList(response.data.comments)
            })

        })
    };
    const deletecomment = (e, comment)=>{
        e.preventDefault()
        console.log(comment)

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
                            <Comments deletecomment={deletecomment} handleaddcomment={handleaddcomment} commentlist={commentList} formRef={formRef}/>
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