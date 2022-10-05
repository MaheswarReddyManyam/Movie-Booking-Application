import React,{Component} from "react";
import './Header.css';
import ReactLogo from './logo.svg';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <img id="headerLogo" src={ReactLogo} alt="logo"/>
            </div>
        )
    }
}

export default Header;