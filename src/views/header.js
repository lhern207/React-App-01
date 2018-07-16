import React from 'react';
import classes from '../styles/styles.css'
/*
const user = {
    name:'Francis',
    lastname: 'Jones',
    age:16
}
*/

/*
const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}
*/

const Header = (props) => {
    return (
        <header>
            <div className={classes.logo}>Logo</div>
            <input type="text" onChange={props.keywords}/>
        </header>
    )
}

export default Header;