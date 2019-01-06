import React from 'react'
import {List} from 'semantic-ui-react'
import {Link} from 'react-scroll'

export default class About extends React.Component {

    aProps = {
        rel:'noopener noreferrer',
        target: '_blank'
    }
    projects = [
        {
            body: <span>Checkout the source code of this website <a {...this.aProps} href="https://github.com/harrisgeo88/me">here</a>. I wanted to play with <a {...this.aProps} href="https://semantic-ui.com">#semantic-ui</a></span>,
            icon: "fas fa-code"
        },
        {
            body: <span>Checkout my <a {...this.aProps} href="https://github.com/harrisgeo88/my-travel-map">travel map</a>. I build it for my talk at <a {...this.aProps} href="http://jsmonthly.org">JS Monthly London</a>.<br/> Topic? <b>State management in ReactJS</b> using <a {...this.aProps} href="https://mobx.js.org">#MobX</a>. Here is also the <a {...this.aProps} href="https://www.youtube.com/watch?v=0DPATD3yi6k">video</a> :)</span>,
            icon: "fas fa-globe-asia"
        },
        {
            body: <span>I have more cool projects on github! check them out <a {...this.aProps} href="https://github.com/harrisgeo88">here</a>...</span>,
            icon: "fab fa-github-square"
        },
        {
            body: <span>You can also check how I got most of my experience
                <Link to="xp" style={{paddingLeft: 5}} smooth={true} duration={500} className="active item">
                    here
                </Link>
                </span>,
            icon: "fab fa-github-square"
        },
    ]

    renderProjects = () => {
        return this.projects.map((project, i) => {
            return <List.Item key={i} style={{marginBottom: 20, color: "var(--light)"}}>
                <i className={project.icon} style={{paddingRight: 10}}/>{project.body}
        </List.Item>
        })
    }

    render() {
        return <div id="projects" className="section">
            <div id="projects" className="section-container">
                <h1 className="inverted">Projects</h1>
                <List animated verticalAlign='middle' size="large">
                    {this.renderProjects()}
                </List>
            </div>
        </div>
    }
}