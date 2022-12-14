import './VideoUpload.scss'
import img1 from '../../Assets/Images/Upload-video-preview.jpg'
import { useRef } from 'react';
import axios from 'axios';
function Videoupload(){
    const formRef = useRef();
    const addVideo = (e) => {
        e.preventDefault();
        // Add video to the back-end server, and then update
        // the state with the response
        const new_video = {
            title: formRef.current.videotitle.value,
            description: formRef.current.videodescription.value,
        }
        console.log(new_video)
        axios.post("http://localhost:8080/videos", new_video).then((response)=>{
        })
        document.getElementById('form').reset()
    };
    
    return(
        <div>
        <h2 className="title">Upload Video </h2>
        <form ref={formRef} onSubmit={addVideo} method='post' id='form'>
            <div className='videoupload'>
                <div className='videoupload__container1'>
                    <p className='videoupload__thumbnail'>VIDEO THUMBNAIL</p>
                    <img src={img1} className='videoupload__image'></img>
                </div>
                <div className='upload__container'>
                    <div>
                        <upload className='upload__subcontainer1'>
                            <label for='videodetitle' className='upload__label'>
                                TITLE YOUR VIDEO
                            </label>
                            <input className='upload__input1' type='text'  name='videotitle' placeholder='Add a title to your video'></input>
                            <label for='videodescription' className='upload__label'>
                                ADD A VIDEO DESCRIPTION
                            </label>
                            <input className='upload__input2' type='text'  name='videodescription' placeholder='Add a description to your video'></input>
                            
                        </upload>
                    </div>
                </div>
            </div>
            
            <div className='upload__subcontainer2'>
                <div className='upload__cancel1'>
                    <button className='upload__cancel1--button'>CANCEL</button>
                </div>
                <div className='upload__publish'>
                    <button className='upload__publish--button' >PUBLISH</button>
                </div>
                <div className='upload__cancel2'>
                    <button className='upload__cancel2--button'>CANCEL</button>
                </div>
            </div>
        </form>
            
        </div>

    )
};
export default Videoupload;