import './Displayvideo.scss';
import img1 from '../../Assets/Icons/play.svg'
import img2 from '../../Assets/Icons/pause.svg'
import img3 from '../../Assets/Icons/volume_up.svg'
import img4 from '../../Assets/Icons/volume_off.svg'
import img5 from '../../Assets/Icons/scrub.svg'
import img6 from '../../Assets/Icons/fullscreen.svg'
import img7 from '../../Assets/Icons/publish.svg'





//add a prop 


function Displayvideo(props){
    //props.changeActiveVideo(props.id)
    return(
        <div className='video'>
            <video className='video__content' poster={props.activeVideo} controls></video>
        </div>  
    )
}
export default Displayvideo;