import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slide from './Slide';


function Sliders(){
    const [data, setData] = useState({ hits: [] }); 
    useEffect(async () => {
        const result = await axios(
        'https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo',
        );
    
        setData(result.data);
    });
  
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <Slide active="active" imagesource="https://pixabay.com/get/gccb882a97c47b185355c82743c77b1e16723adc6e4c4ccacaea3218f5fab3b011a15645ac421ce7c930e58658a46835566ab7201b34e993b8af003bdf6d8fd2a_1280.jpg" />
                {data.hits.map(item => (
                <Slide imagesource={item.largeImageURL} />
                ))}
                </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>   
    );
}

export default Sliders;