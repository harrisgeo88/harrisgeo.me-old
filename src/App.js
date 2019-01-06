import React from 'react'
import Intro from './Intro'
import About from './About'
import XP from './XP'
import Projects from './Projects'
import Navbar from './components/Navbar'


export default class App extends React.Component {

    state = {context2: null, contextRef: null}
    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
        return <div className="container">
            <Navbar>
                <Intro />
            </Navbar>
            <About />
            <Projects />
            <XP />
        </div>
    }
}