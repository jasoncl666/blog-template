import React, {Component} from "react"
import Link from 'gatsby-link'

import '../css/Nav.css'

class Nav extends Component{

    render(){

        return(
            <div className="Nav">
                <div className="logo"></div>
                <div className="nav-list-box">
                    <div className="nav-list">
                        <Link>Home</Link>
                        <Link>Post</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                        <Link>Other</Link>
                    </div>
                </div>

            </div>
        )
    }
}


export default Nav
