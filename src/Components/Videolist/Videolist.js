import './Videolist.scss'

function Videolist(props){
    
    return(
        <div className='videos'>
            <p className='videos__title'>NEXT VIDEOS</p>
            {
                props.videolist.map(video =>{
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