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
                <Slide active="active" imagesource="https://pixabay.com/get/g78983a887b8ba5ef90476bea0e89a48a974a21102c6748374af9e311fc6bc103d0306f2e0f65ab3685e30996397db78364c42312995f1188c23b68ee392afbc2_1280.jpg" />
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