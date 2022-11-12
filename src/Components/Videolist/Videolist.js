import './Videolist.scss'
import videos from '../../data/videos.json'
import videosdetails from '../../data/video-details.json'

//pass onclick handler on each video that uses video ID and pass ID to App.js
//

function Videolist(props){
    
    return(
        <div className='videos'>
            <p className='videos__title'>NEXT VIDEOS</p>
            {
                //use props.videos and remove import videos
                videosdetails.map(video =>{
                    return(
                        <div className='videos__container' onClick={()=> props.handleClickVideo(video)}>
                            <div className='videos__image-container'>
                                <img className='videos__image' src={video.image}></img>
                            </div>
                            <div className='videos__subcontainer1'>
                                <p className='videos__subtitle'>{video.title}</p>
                                <p className='videos__channel'>{video.channel}</p>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default Videolist;