import React from 'react';
import preloader from '../../../assets/imges/reloader.svg'

let Preloader = (props) => {
    return (
        <div style = { {backgroundColor: 'white'}}>
            <img src = {preloader} />        
        </div>
    )
} 

export default Preloader;