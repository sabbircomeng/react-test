import React from 'react';
import Slider from "react-slick";
import member from '../assets/images/hm-team-member-slide-item-img-1.png';

function PremiumMembers() {
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
        <section className="hm-team-member-sec-wrp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hm-team-member-wrp">
                            <div className="hm-team-member-head">
                                <h2 className="hm-team-member-head-title">Premium Members</h2>
                            </div>
                            <div className="hm-team-member-slider-cntlr clearfix">
                                <div className="HmTeamMemberSlider">
                                    <Slider {...settings}>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
                                            </div>
                                        </div>
                                        <div className="hm-team-member-slide-item">
                                            <img src={member} alt="" />
                                            <div className="hm-team-member-slide-item-dsc">
                                                <h6> ID : HM-ECF250CA183</h6>
                                                <span>0 Follower(s) 0 Follower</span>
                                                <a href="#"> Full Profile</a>
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
export default PremiumMembers;


