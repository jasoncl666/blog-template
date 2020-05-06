import React, {Component} from "react"
import Link from 'gatsby-link'

import "../css/Card.css"

class Card extends Component {

    render(){

        const {
            image
        } = this.props

        return(
            <div className="Card">

                {/* <div className="card-img">
                    <img src={image}></img>
                </div> */}
                <img src={image}></img>
                <div className="card-main">
                    <h4 className="card-category">category</h4>
                    <h2 className="card-title">Title</h2>
                    <div className="card-brief"></div>
                    <div className="card-bottom"></div>
                </div>

            </div>
        )
    }
}

export default Card