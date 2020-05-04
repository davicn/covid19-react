import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { DrawerApp } from '../DrawerApp/DrawerApp.component'



export class NavApp extends React.Component {
    constructor(props) {
        super(props)
        // state = {}
    }

    render() {
        const classes = makeStyles({ root: { flexGrow: 1 }, title: { flexGrow: 1 } })


        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Covid-19
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* <DrawerApp/> */}
            </div>
        )
    }
}