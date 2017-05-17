import React from 'react';
import './header.styl';

const  Header = (props) => {
    return (
        <div id="header">
            <input type="text" onChange={props.search} placeholder="The filter works"/>
        </div>
    )
};

export default Header;