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
        return <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Card   fluid
                            centered={false}
                            header={header}
                            description={description}
                            extra={extra}
                            meta={meta} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="responsive-row">
                <Grid.Column width={8}>
                    <Button circular onClick={() => this.click(true)} icon="arrow left"/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button circular onClick={() => this.click()} icon="arrow right"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

