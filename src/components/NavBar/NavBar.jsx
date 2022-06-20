import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';
// import ReactAudioPlayer from 'react-audio-player';
import "./NavBar.css";
import Logo from "../Logo/Logo";
import AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";


export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }
    return (
    <nav>
        <Logo />
        <div className="navText"><div></div>
            <div className="link1">
                <Link to="/plantss">Plant a Virtual Garden</Link>
            </div>
            &nbsp; | &nbsp;
            <div className="link2">
                <Link to="/plants/info">Plant Information</Link>
            </div>
            &nbsp; | &nbsp;
            <div className="name">
                <span>Welcome {props.user.name}</span>
            </div>
            &nbsp; | &nbsp;
            <div className="link3">
                <Link to="" onClick={handleLogOut}>Logout</Link>
            </div>
        </div>
    </nav>);
}