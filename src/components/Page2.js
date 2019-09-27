import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
export default class page2 extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>React SEO</title>
                    <meta name="description" content="testing react helmet Pages" />
                    <meta name="keywords" content="react,seo,helmet Pages" />
                </Helmet>
               
                <h1>This is page2</h1>
                <h2 hidden>This is Page 2</h2>
                <h3 hidden>This is Page 2</h3>
                <p hidden><b>This is Page 2</b></p>
                <p>This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2</p>
                
                <div className="container">
                <ul className="collection">
                <li className="collection-item"><Link to="facebook" >facebook</Link></li>
                <li className="collection-item"><Link to="instagram" >instagram</Link></li>
                <li className="collection-item"><Link to="twitter" >twitter</Link></li>
                </ul>
                
                </div>
            </div>
        )
    }
}
