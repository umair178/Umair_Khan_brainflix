import './Main.scss'
import img1 from '../../Assets/Icons/views.svg'
import img2 from '../../Assets/Icons/likes.svg'
import video_details from '../../data/video-details.json'

function Main(){
    return(
        <div>
            <div className='main'>
                <h1 className='main__title'>{video_details[0].title}</h1>
                <div className='main__container'>
                    <div className='main__subcontainer1'>
                        <p>{video_details[0].channel}</p>
                        <p className='main__date'>07/11/2021</p>
                    </div>
                    <div className='main__subcontainer1'>
                        <div className='main__subcontainer2'>
                            <div>
                                <img src={img1}></img>
                            </div>
                            <div className='main__views'>
                                <p className='main__views--count'>{video_details[0].views}</p>
                            </div>
                        </div>
                        <div className='main__subcontainer2'>
                            <div>
                                <img src={img2}></img>
                            </div>
                            <div className='main__likes'>
                                <p className='main__likes--count'>{video_details[0].likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>{video_details[0].description}</p>
        </div>
       
        
        

        
    
    )
}
export default Main;