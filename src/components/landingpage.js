import React, {Component} from 'react';
import {Grid,Cell} from "react-mdl"

class Landing extends Component {
        render() {
                return (
                        <div style={{width:'100%',margin:'auto'}}>
                                <Grid className='landing-grid'>
                                        <Cell col={12}>
                                                <img
                                                        src = "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                                        alt = "avatar"
                                                        className = "avatar-img"

                                                />
                                                <div className="banner-text">
                                                        <h1>Full Stack web developer</h1>
                                                <hr/>
                                                <p>PYTHON | JAVA | REACT</p>
                                                <div className="social-links">
                                                        {/* LinkedIn */}
                                                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"></a>
                                                        <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                                        {/* GitHub */}
                                                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"></a>
                                                        <i className="fa fa-github-square"  aria-hidden="true"/>
                                                        {/* Freecodecamp */}
                                                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"></a>
                                                        <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                                        {/* Youtube */}
                                                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"></a>
                                                        <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                                </div>
                                                
                                                </div>
                                        </Cell>
                                </Grid>
                        </div>
                )
        }
}

export default Landing;