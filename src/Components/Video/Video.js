import './Video.scss';
import videos from '../../data/videos.json'
import videos_details from '../../data/video-details.json'

function Video(){
    return(
        <div className='videos__container'>
            <div className='videos__image-container'>
                <img className='videos__image' src={video.image}></img>
            </div>
            <div className='videos__subcontainer1'>
                <p className='videos__subtitle'>{video.title}</p>
                <p className='videos__channel'>{video.channel}</p>
            </div>
        </div>

    )
}
export default Video;