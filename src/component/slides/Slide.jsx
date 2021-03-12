import React from 'react';

function Slide(props){
    return(
        <>
        <div className={`carousel-item ${ props.active }`}>
            <img src={props.imagesource} className="d-block w-100" alt="..."/>
        </div>
        </>
    );
}

export default Slide;