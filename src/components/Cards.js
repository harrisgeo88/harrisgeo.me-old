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
                <Grid.Column width={2} verticalAlign="middle">
                    <Button circular onClick={() => this.click(true)} icon='arrow left' />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Card   fluid
                            header={header}
                            description={description}
                            extra={extra}
                            meta={meta} />
                </Grid.Column>
                <Grid.Column width={2} verticalAlign="middle">
                    <Button circular onClick={() => this.click(false)} icon='arrow right' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

