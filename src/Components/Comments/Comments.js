import './Comments.scss'
import img1 from '../../Assets/Images/Mohan-muruge.jpg'
import img2 from '../../Assets/Icons/delete-icon.svg'
import { useParams } from 'react-router-dom';
import {useRef} from 'react'


function Comments(props){
    const formRef = useRef();
    const {videoId} = useParams();
    if (!props.commentlist){
        return(<p>loading Comments....</p>)
    }
    return(
        <div className='form'>
            <p className='form__title'>{props.commentlist.length} Comments</p>
            <div className='form__container'>
                <div>
                    <img className='form__image' src={img1}></img>
                </div>
                <div className='form__subcontainer1'>
                    <form id='form' ref={props.formRef} onSubmit={props.handleaddcomment}>
                    <div>
                        <div className='form__subcontainer2' >
                            <label for='comment' className='form__label'>
                                JOIN THE CONVERSATION
                            </label>
                            <input className='form__input' type='text'  name='comment' placeholder='Add a new comment'></input>
                        </div>
                    </div>
                    <div className='form__button--container'>
                        <button className='form__button'>COMMENT</button>
                    </div>
                    </form>
                </div>
            </div>


            {/* comments */}
            {
                props.commentlist.map(comment =>{
                    return(
                        <div className='comments' key={Math.random()}>
                            <div className="comments__container"> 
                                <div className="comments__subcontainer1">
                                    <img className="comments__image" src="" alt=""></img>
                                        <div className="comments__subcontainer2"> 
                                        <div className="comments__subcontainer3">  
                                            <p className="comments__title" id="title">{comment.name}</p>
                                            <p className="comments__date"  id="date">{new Date(comment.timestamp).toLocaleDateString()}</p>                  
                                        </div>
                                        <div className='comments__subcontainer3'>
                                            <p className="comments__text" id="text">{comment.comment}</p>
                                            <form onSubmit={props.deletecomment}>
                                                <button>Delete</button>
                                            </form>
                                            {/* <img className='comments__image' src={img2}></img> */}
                                        </div>
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