import './Main.scss'
import img1 from '../../Assets/Icons/views.svg'
import img2 from '../../Assets/Icons/likes.svg'
//import video_details from '../../data/video-details.json'

function Main(props){
   
    return(
        
        // function date(timestamp){
        //     const d = new Date(timestamp);
        //     return d.toLocaleDateString
        //     ('en-US', {day:"2-digit", month:"2-digit", year="numeric"})
        // }
        <div className='main'>
            <div className=''>
                <h2 className='main__title'>{props.title}</h2>
                <div className='main__container'>
                    <div className='main__subcontainer1'>
                        <p className='main__channel'> By {props.channel}</p>
                        <p className='main__date'>7/11/21</p>
                    </div>
                    <div className='main__subcontainer1'>
                        <div className='main__subcontainer2'>
                            <div>
                                <img src={img1}></img>
                            </div>
                            <div className='main__views'>
                                <p className='main__views--count'>{props.views}</p>
                            </div>
                        </div>
                        <div className='main__subcontainer2'>
                            <div>
                                <img src={img2}></img>
                            </div>
                            <div className='main__likes'>
                                <p className='main__likes--count'>{props.likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='main__description'>{props.description}</p>
        </div>
       
        
        

        
    
    )
}
export default Main;