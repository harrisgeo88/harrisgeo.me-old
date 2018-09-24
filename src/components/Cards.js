import React from 'react'
import {Card, Grid, Button} from 'semantic-ui-react'

export default class Cards extends React.Component {
    
    click = (previous = false) => {
        let {onClick, selected, roles} = this.props

        if (onClick) {
            let all = roles.length - 1
            let nextPage = 0
            if (previous)
                nextPage = selected === 0 ? all : selected - 1
            else
                nextPage = selected === all ? 0 : selected + 1

            onClick(nextPage)
        }
    }

    render() {
        let {roles, selected} = this.props
        let {header, description, extra, meta} = roles[selected]
        return <Grid centered padded>
            <Grid.Row>
                <Card   fluid
                        id="role-content"
                        centered={true}
                        header={header}
                        description={description}
                        extra={extra}
                        meta={meta} />
            </Grid.Row>
            <Grid.Row className="responsive-row">
                <Grid.Column mobile={8} floated="right">
                    <Button circular style={{float: 'left'}} onClick={() => this.click(true)} icon="arrow left"/>
                </Grid.Column>
                <Grid.Column mobile={8} floated="right">
                    <Button circular style={{float: 'right'}} onClick={() => this.click()} icon="arrow right"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

