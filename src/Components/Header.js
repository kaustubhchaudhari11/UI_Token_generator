import { AppBar,Toolbar,Typography } from '@mui/material';

const Header = () =>{
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant = "h6" component= "div" sx = {{flexGrow:1}}>
                    Token Generator application
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;