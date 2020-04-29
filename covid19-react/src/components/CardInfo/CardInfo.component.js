import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


export class CardInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const classes = makeStyles({
            title: {
                fontSize: 14
            }
        })
        return (
            <Card>
                <CardContent>
                    <Typography className={classes.title}>
                        {this.props.titulo}
                    </Typography>
                    <Typography>
                        {this.props.content}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}