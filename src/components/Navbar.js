import React from 'react'
import {Menu, Visibility } from 'semantic-ui-react'
import {Link} from 'react-scroll'



export default class Navbar extends React.Component {
    
    state = {primary: false}

    primary = () => {
        this.setState({primary: true})
    }

    secondary = () => {
        this.setState({primary: false})
    }

    render() {
        let {primary} = this.state
        let props = {
            className: primary ? 'item' : 'item-reversed',
            spy: true,
            smooth: true,
            duration: 500
        }
        return <Visibility style={{height: '100%'}} onBottomPassed={this.primary} onBottomPassedReverse={this.secondary} once={false}>
            <Menu   fixed={primary ? 'top' : null}
                    size="large"
                    className={!primary ? 'fixed-top' : ''}
                    secondary={!primary}>
                    <Link to="intro" {...props} className={primary ? "active item" : 'item-reversed'}>HARRIS GEO</Link>
                    <Menu.Menu position='right'>
                        <Link to="intro" {...props}>Intro</Link>
                        <Link to="about" offset={1} {...props}>About</Link>
                        <Link to="xp" {...props}>Experience</Link>
                        <Link to="projects" {...props}>Projects</Link>
                    </Menu.Menu>
            </Menu>
            {this.props.children}
            <div className={primary ? "footer" : "footer-inverted"}>
                    © 2018, Harris Geo. All Rights Reserved.
            </div>
        </Visibility>
    }
}