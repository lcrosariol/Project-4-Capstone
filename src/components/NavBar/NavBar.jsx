import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';
import "./NavBar.css";
import Logo from "../Logo/Logo";



export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }
    return (
    <nav>
        <Logo />
        <div className="navText">
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
        <iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Flau-ren5%2Fnaureproject4%2F" frameborder="0" ></iframe>
    </nav>
    );
}