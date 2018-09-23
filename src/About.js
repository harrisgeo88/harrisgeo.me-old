import React from 'react'
import {Link} from 'react-scroll'

export default class About extends React.Component {
    render() {
        let props = {
            target: "_blank"
        }
        return <div id="about" className="section">
            <div className="section-container ">
                <h1 className="">About me</h1>
                <p>
                    I have always been interested in both back & front end projects.
                    <br/>I have great experience with <b>UI</b> and <b>UX</b> designs but also with <b>Databases</b>, <b>APIs</b> and <b>Big Data</b>.

                    <br/>Check out some of my
                    <Link   to="projects"
                            style={{paddingLeft: 5}}
                            smooth={true}
                            duration={500}
                            className="active item">
                    projects</Link>
                    <br/><br/>
                    <a href="https://github.com/harrisgeo88" {...props}>
                        <i className="fab fa-github fa-2x ic"/>
                    </a>
                    <a href="https://www.linkedin.com/in/charilaos-georgakakis/" {...props}>
                        <i className="fab fa-linkedin-in fa-2x ic"/>
                    </a>
                    <a href="https://twitter.com/harrisgeo88" {...props}>
                        <i className="fab fa-twitter fa-2x ic"/>
                    </a>
                    <a href="https://www.instagram.com/harrisgeo88/" {...props}>
                        <i className="fab fa-instagram fa-2x ic"/>
                    </a>

                </p>
            </div>
        </div>
    }
}