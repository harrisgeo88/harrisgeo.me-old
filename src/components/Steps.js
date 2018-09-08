import React from 'react'
import {Step, Icon} from 'semantic-ui-react'

export default class Steps extends React.Component {
    
    onClick = (i,j) => {
        let {onClick} = this.props
        if (onClick)
            onClick(i)
    }

    renderSteps = () => {
        let {roles, selected} = this.props

        if (roles) {
            return roles.map((role,i) => {
                let active = i === selected
                let {icon, header, meta} = role
                return <Step key={i} active={active} onClick={() => this.onClick(i)}>
                    <Icon name={icon} />
                        <Step.Content>
                            <Step.Title>{header}</Step.Title>
                            <Step.Description>{meta}</Step.Description>
                        </Step.Content>
                    </Step>
            })
        }
    }
    
    render() {
        return <div>
            <Step.Group size='small'>
                {this.renderSteps()}
            </Step.Group>
        </div>
    }
}