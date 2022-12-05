import './Displayvideo.scss';




function Displayvideo(props){
    return(
        <div className='video'>
            <video className='video__content' poster={props.activeVideo} controls></video>
        </div>  
    )
}
export default Displayvideo;