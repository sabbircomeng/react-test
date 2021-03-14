import React from 'react';
import Slider from "react-slick";
import videoBg from '../assets/images/hm-video-session-btm-bg.jpg';
import videoCardImg from '../assets/images/hm-video-session-item-img-1.jpg';
import videoCardPlay from '../assets/images/play-button.png';

function VideoSession() {
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
        <section className="hm-video-session-sec-wrp">
            <div className="hm-team-member-head">
                <h2 className="hm-team-member-head-title">Video Session's </h2>
            </div>
            <div className="hm-video-session-btm inline-bg" style={{ background: `url(${videoBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hm-video-session-wrp">
                                <div className="HmVideoSlider">
                                    <Slider {...settings}>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                        <div className="hm-video-session-item">
                                            <div className="hm-video-session-item-img-cntlr">
                                                <div className="hm-video-session-item-img inline-bg" style={{ background: `url(${videoCardImg})` }}>
                                                </div>
                                                <a href="https://youtu.be/9No-FiEInLA" target="_blank" data-fancybox="gallery" className="overlay-link"></a>
                                                <span><img src={videoCardPlay} alt="images" /></span>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default VideoSession;





