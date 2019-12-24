import React, {Component} from 'react';
import '../App.css';

function Nav(props) {
    return(
        <span className={ (props.type == 'Next')? 'nav next':'nav prev'} onClick={()=>props.incDecSlide(props.type)}>
            {props.type}
        </span>
    )
}
export default Nav;