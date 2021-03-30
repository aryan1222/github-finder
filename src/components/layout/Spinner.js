import React from 'react';
import {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="LOADING..." style={spinnerStyle}/>
        </Fragment>
    )
}

const spinnerStyle = {
    width : '200px',
    margin : 'auto',
    display : 'block'
}

export default Spinner;