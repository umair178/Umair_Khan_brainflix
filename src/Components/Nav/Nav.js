import './Nav.scss'
import img1 from '../../Assets/Logo/BrainFlix-logo.svg'
import img2 from '../../Assets/Images/Mohan-muruge.jpg'
import imgs from '../../Assets/Icons/search.svg'
function Nav() {
    return(
        <div className="nav">
            <div className="nav__logocontainer">
                <img className="nav__logo" src={img1} alt='play'></img>
            </div>
            <div className="nav__search-container">
                <div className='nav__searchbar-container'>
                    <input className="nav__searchbar-container--searchbar" placeholder="Search" type='text'></input>
                </div>
                <div>
                    <img className="nav__avatar" src={img2} alt="avatar"></img>
                </div>
            </div>
            <div className='nav__buttoncontainer'>
                <button className="nav__buttoncontainer--button">UPLOAD</button>
            </div>
            <div>
                <img className="nav__buttoncontainer--avatar" src={img2} alt="avatar"></img>
            </div>

        </div>

    )
}
export default Nav;