import './Comments.scss'
import img1 from '../../Assets/Images/Mohan-muruge.jpg'
//import videosdetails from '../../data/video-details.json'


function Comments(props){
    return(
        <div className='form'>
            <p className='form__title'>{props.commentlist.length} Comments</p>
            <div className='form__container'>
                <div>
                    <img className='form__image' src={img1}></img>
                </div>
                <div className='form__subcontainer1'>
                    <div>
                        <form className='form__subcontainer2'>
                            <label for='comment' className='form__label'>
                                JOIN THE CONVERSATION
                            </label>
                            <input className='form__input' type='text'  name='comment' value='' placeholder='Add a new comment'></input>
                        </form>
                    </div>
                    <div className='form__button--container'>
                        <button className='form__button'>COMMENT</button>
                    </div>
                </div>
            </div>


            {/* comments */}
            {
                props.commentlist.map(comment =>{
                    return(
                        <div className='comments'>
                            <div className="comments__container"> 
                                <div className="comments__subcontainer1">
                                    <img className="comments__image" src="" alt=""></img>
                                        <div className="comments__subcontainer2"> 
                                        <div className="comments__subcontainer3">  
                                            <p className="comments__title" id="title">{comment.name}</p>
                                            <p className="comments__date"  id="date">7/11/22</p>                  
                                        </div>
                                            <p className="comments__text" id="text">{comment.comment}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Comments;