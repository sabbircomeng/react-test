import React from 'react';
import Slider from "react-slick";
import videoCardImg from '../assets/images/hm-video-session-item-img-1.jpg';

function HappyStory() {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <section className="happy-stories-sec-wrp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hm-team-member-head">
                            <h2 className="hm-team-member-head-title">Happy stories</h2>
                        </div>
                        <div className="happy-stories-slider-cntlr clearfix">
                            <div className="happy-stories-slider">
                                <Slider {...settings}>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                    <div className="happy-stories-slide-item">
                                        <div className="happy-stories-slide-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                            <span>we found love...</span>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HappyStory;





