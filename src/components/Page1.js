import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'
export default class page1 extends Component {
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>React SEO</title>
                    <meta name="description" content="testing react helmet Pages" />
                    <meta name="keywords" content="react,seo,helmet Pages" />
                </Helmet>
                <h1>This is Page 1</h1>
                <h2 hidden>This is Page 1</h2>
                <h3 hidden>This is Page 1</h3>
                <p hidden><b>This is Page 1</b></p>
                <p>Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'</p>

                <div className="container">
                <ul className="collection">
                <li className="collection-item"><Link to="google" >google</Link></li>
                <li className="collection-item"><Link to="yahoo" >yahoo</Link></li>
                <li className="collection-item"><Link to="amazon" >amazon</Link></li>
                </ul>
                </div>
            </div>    
        )
    }
}
