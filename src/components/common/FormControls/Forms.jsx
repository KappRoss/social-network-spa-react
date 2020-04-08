import React from 'react';
import style from './Forms.module.css';

export const withFormElement = (Element) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return(
        <div className = {`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                <Element  {...input} {...props}/>      
            </div>
            <div>
            { hasError && <span>{meta.error}</span>}    
            </div>
        </div>
    )

}
