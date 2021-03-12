import React from 'react';
import logo from '../../assets/images/logo.png';

function Menu() {
    return (
        <>
        <div className="menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="hm-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Bridesmaids<span className="sr-only">(current)</span></a>
                    </li>		      
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Groomsmen<span className="sr-only">(current)</span></a>
                    </li>		      
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Gallery<span className="sr-only">(current)</span></a>
                    </li>		      
                    </ul>	
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login<span className="sr-only">(current)</span></a>
                    </li>		      
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Help!<span className="sr-only">(current)</span></a>
                    </li>	      
                    </ul>			    
                </div>
                </nav>
            </div>
            </div>
        </>
    );
}
export default Menu;