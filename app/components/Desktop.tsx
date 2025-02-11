import Image from "next/image";
import Avatar from "@mui/material/Avatar"
import Slider from "@mui/material/Slider";
import React from "react";
import { MediumSecurity } from "./MediumSecurity";
import xl from "../../public/3xl.svg";
import aiOutlineCaretDown from "../../public/ai-outline-caret-down.svg";
import airbnbPng from "../../public/airbnb-png.png";
import frame2 from "../../public/frame-2.svg";
import frame3 from "../../public/frame-3.svg";
import frame4 from "../../public/frame-4.svg";
import frame5 from "../../public/frame-5.svg";
import frame1092 from "../../public/frame-109-2.svg";
import frame109 from "../../public/frame-109.svg";
import frame110 from "../../public/frame-110.svg";
import frame from "../../public/frame.svg";
import goSearch from "../../public/go-search.svg";
import gojekIndonesiaJpeg from "../../public/gojek-indonesia-jpeg.png";
import googleSvg from "../../public/google-svg.svg";
import image1 from "../../public/image.png";
import image from "../../public/image-1.svg";
import line3 from "../../public/line-3.svg";
import line4 from "../../public/line-4.svg";
import logo from "../../public/logo.svg";
import mdBusinessCenter from "../../public/md-business-center.svg";
import mdOutlineLocationOn from "../../public/md-outline-location-on.svg";
import mdOutlineMoney from "../../public/md-outline-money.svg";
import mdOutlineShortText from "../../public/md-outline-short-text.svg";
import monthly2 from "../../public/monthly-2.svg";
import monthly3 from "../../public/monthly-3.svg";
import monthly4 from "../../public/monthly-4.svg";
import monthly from "../../public/monthly.svg";
import rectangle9 from "../../public/rectangle-9.svg";
import spotifySvg from "../../public/spotify-svg.svg";
import "../globals.css";
import twitchJpeg from "../../public/twitch-jpeg.png";
import twitterPng0 from "../../public/twitter-png-0.png";
import vector2 from "../../public/vector-2.svg";
import vector from "../../public/vector.svg";

export const Desktop = () => {
    return (
        <div className="desktop">
            <div className="div">
                <div className="navbar">
                    <Image className="logo" alt="Logo" src={logo} />

                    <div className="menu-nav">
                        <div className="element">Find Job</div>

                        <div className="element-xl">Messages</div>

                        <div className="element-2">Hiring</div>

                        <div className="element-3">Community</div>

                        <div className="element-4">FAQ</div>

                        <div className="element-5">New York, NY</div>

                        <Image
                            className="md-outline-location"
                            alt="Md outline location"
                            src={mdOutlineLocationOn}
                        />

                        <Avatar
                            alt="Image"
                            src="https://avatars2.githubusercontent.com/u/6916170"
                        >
                            <div className="src">
                                https://avatars2.githubusercontent.com/u/6916170
                            </div>

                            <div className="name">TA</div>

                            <Image className="image" alt="Image" src={image1} />

                            <div className="avatar-badge" />
                        </Avatar>
                        <div className="settings">
                            <Image className="vector" alt="Vector" src={vector2} />
                        </div>

                        <div className="notifications">
                            <Image className="img" alt="Vector" src={vector} />
                        </div>
                    </div>

                    <div className="overlap-group">
                        <Image className="line" alt="Line" src={line3} />
                    </div>

                    <div className="filters-nav">
                        <div className="name-job">
                            <Image className="line-2" alt="Line" src={line4} />

                            <div className="element-6">Designer</div>

                            <div className="img-wrapper">
                                <Image className="img" alt="Go search" src={goSearch} />
                            </div>

                            <Image
                                className="ai-outline-caret"
                                alt="Ai outline caret"
                                src={aiOutlineCaretDown}
                            />
                        </div>

                        <div className="filter-wlocation">
                            <Image className="line-3" alt="Line" src={line4} />

                            <div className="element-7">Work Location</div>

                            <div className="img-wrapper">
                                <Image
                                    className="img-2"
                                    alt="Md outline location"
                                    src={mdOutlineLocationOn}
                                />
                            </div>

                            <Image
                                className="ai-outline-caret-2"
                                alt="Ai outline caret"
                                src={aiOutlineCaretDown}
                            />
                        </div>

                        <div className="filter-experience">
                            <Image className="line-4" alt="Line" src={line4} />

                            <div className="element-8">Experience</div>

                            <div className="img-wrapper">
                                <Image
                                    className="img-2"
                                    alt="Md business center"
                                    src={mdBusinessCenter}
                                />
                            </div>

                            <Image
                                className="ai-outline-caret-3"
                                alt="Ai outline caret"
                                src={aiOutlineCaretDown}
                            />
                        </div>

                        <div className="filter-month">
                            <Image className="line-5" alt="Line" src={line4} />

                            <div className="element-9">Per month</div>

                            <div className="element-10">Salary Range</div>

                            <Slider color="primary" disabled={false} size="medium" />
                            <div className="element-11">$1,200</div>

                            <div className="element-12">$600</div>

                            <div className="md-outline-money-wrapper">
                                <Image
                                    className="md-outline-money"
                                    alt="Md outline money"
                                    src={mdOutlineMoney}
                                />
                            </div>

                            <Image
                                className="ai-outline-caret-4"
                                alt="Ai outline caret"
                                src={aiOutlineCaretDown}
                            />
                        </div>
                    </div>
                </div>

                <div className="overlap">
                    <MediumSecurity />
                    <div className="main">
                        <div className="card-one">
                            <div className="frame">
                                <Image className="img-3" alt="Element monthly" src={monthly3} />

                                <div className="div-wrapper">
                                    <div className="details">Details</div>
                                </div>
                            </div>

                            <div className="overlap-group-2">
                                <div className="rectangle" />

                                <div className="frame-2">
                                    <div className="frame-3">
                                        <Image
                                            className="google-svg"
                                            alt="Google svg"
                                            src={googleSvg}
                                        />

                                        <div className="group">
                                            <Image className="frame-4" alt="Frame" src={frame} />
                                        </div>
                                    </div>

                                    <div className="text-wrapper-2">Senior Product Manager</div>

                                    <div className="frame-5">
                                        <Image className="img-3" alt="Frame" src={frame109} />

                                        <div className="element-reviews">( 42 Reviews )</div>
                                    </div>

                                    <div className="frame-6">
                                        <Image className="frame-7" alt="Frame" src={frame3} />

                                        <div className="california-ca">California, Ca</div>
                                    </div>

                                    <div className="frame-8">
                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Full Time</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Senior Level</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Remote</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-tw">
                            <div className="overlap-2">
                                <div className="frame-10">
                                    <Image className="img-3" alt="Element monthly" src={monthly2} />

                                    <div className="div-wrapper">
                                        <div className="details">Details</div>
                                    </div>
                                </div>

                                <div className="frame-11">
                                    <Image className="img-4" alt="Twitch jpeg" src={twitchJpeg} />

                                    <div className="group">
                                        <Image className="frame-12" alt="Frame" src={frame} />
                                    </div>
                                </div>

                                <div className="front-end-developer">Front End Developer</div>

                                <div className="frame-13">
                                    <Image className="img-3" alt="Frame" src={frame110} />

                                    <div className="element-reviews-2">( 27 Reviews )</div>
                                </div>

                                <div className="frame-14">
                                    <Image className="frame-7" alt="Frame" src={frame4} />

                                    <div className="new-york-NY">New York, Ny</div>
                                </div>

                                <div className="frame-15">
                                    <div className="frame-9">
                                        <div className="text-wrapper-3">Part Time</div>
                                    </div>

                                    <div className="frame-9">
                                        <div className="text-wrapper-3">Mid Level</div>
                                    </div>

                                    <div className="frame-9">
                                        <div className="text-wrapper-3">On Site</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-th">
                            <div className="frame-16">
                                <Image className="img-3" alt="Element monthly" src={monthly2} />

                                <div className="div-wrapper">
                                    <div className="text-wrapper-4">Details</div>
                                </div>
                            </div>

                            <div className="overlap-3">
                                <div className="rectangle-2" />

                                <div className="frame-17">
                                    <div className="frame-18">
                                        <Image className="img-5" alt="Spotify svg" src={spotifySvg} />

                                        <div className="group">
                                            <Image className="frame-12" alt="Frame" src={frame} />
                                        </div>
                                    </div>

                                    <div className="text-wrapper-2">
                                        Quality Assurance
                                        <br />
                                        engineer
                                    </div>

                                    <div className="frame-5">
                                        <Image className="img-3" alt="Frame" src={frame1092} />

                                        <div className="element-reviews">( 42 Reviews )</div>
                                    </div>

                                    <div className="frame-6">
                                        <Image className="frame-7" alt="Frame" src={frame4} />

                                        <div className="text-wrapper-5">Rome, It</div>
                                    </div>

                                    <div className="frame-19">
                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Full Time</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">On Site</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-fr">
                            <div className="overlap-4">
                                <div className="frame-20">
                                    <Image className="img-3" alt="Element monthly" src={monthly} />

                                    <div className="see-details-wrapper">
                                        <div className="text-wrapper-4">See Details</div>
                                    </div>
                                </div>

                                <div className="overlap-group-3">
                                    <div className="rectangle-3" />

                                    <div className="frame-21">
                                        <Image className="img-4" alt="Airbnb png" src={airbnbPng} />

                                        <div className="frame-wrapper">
                                            <Image className="frame-22" alt="Frame" src={frame2} />
                                        </div>
                                    </div>

                                    <div className="full-stack-developer">
                                        Full Stack
                                        <br />
                                        developer
                                    </div>

                                    <div className="frame-23">
                                        <Image className="img-3" alt="Frame" src={frame1092} />

                                        <div className="element-reviews">( 42 Reviews )</div>
                                    </div>

                                    <div className="frame-24">
                                        <Image className="frame-7" alt="Frame" src={frame4} />

                                        <div className="text-wrapper-5">San Fransisco, Ca</div>
                                    </div>

                                    <div className="frame-25">
                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Part Time</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Mid Level</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">On Site</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-fv">
                            <div className="overlap-4">
                                <div className="frame-26">
                                    <Image className="img-3" alt="Element monthly" src={monthly4} />

                                    <div className="frame-27">
                                        <div className="text-wrapper-4">See Details</div>
                                    </div>
                                </div>

                                <div className="overlap-group-4">
                                    <div className="rectangle-4" />

                                    <div className="frame-28">
                                        <Image
                                            className="twitter-png"
                                            alt="Twitter png"
                                            src={twitterPng0}
                                        />

                                        <div className="group-2">
                                            <Image className="frame-4" alt="Frame" src={frame} />
                                        </div>
                                    </div>

                                    <div className="user-interface">User Interface Designer</div>

                                    <div className="frame-29">
                                        <Image className="img-3" alt="Frame" src={frame109} />

                                        <div className="element-reviews-3">( 123 Reviews )</div>
                                    </div>

                                    <div className="frame-30">
                                        <Image className="frame-7" alt="Frame" src={frame4} />

                                        <div className="san-fransisco-ca">San Fransisco, Ca</div>
                                    </div>

                                    <div className="frame-31">
                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Full Time</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-3">Senior Level</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-sx">
                            <div className="frame-32">
                                <Image className="img-3" alt="Element monthly" src={monthly} />

                                <div className="frame-33">
                                    <div className="text-wrapper-4">See Details</div>
                                </div>
                            </div>

                            <div className="overlap-group-4">
                                <div className="rectangle-5" />

                                <div className="frame-34">
                                    <div className="frame-35">
                                        <Image
                                            className="img-5"
                                            alt="Gojek indonesia jpeg"
                                            src={gojekIndonesiaJpeg}
                                        />

                                        <div className="img-5">
                                            <div className="group-3">
                                                <Image className="frame-22" alt="Frame" src={frame2} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="user-experience">
                                        User Experience Designer
                                    </div>

                                    <div className="frame-5">
                                        <Image className="img-3" alt="Frame" src={frame1092} />

                                        <div className="element-reviews-4">( 89 Reviews )</div>
                                    </div>

                                    <div className="frame-6">
                                        <Image className="frame-7" alt="Frame" src={frame4} />

                                        <div className="dhaka-BD">Dhaka, Bd</div>
                                    </div>

                                    <div className="frame-36">
                                        <div className="frame-9">
                                            <div className="text-wrapper-6">Full Time</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-6">Mid Level</div>
                                        </div>

                                        <div className="frame-9">
                                            <div className="text-wrapper-6">On Site</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="other-filters">
                            <div className="element-13">Filters</div>

                            <div className="element-14">Working schedule</div>

                            <div className="frame-37">
                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={frame5} />

                                    <div className="text-wrapper-7">Full Time</div>
                                </div>

                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={image} />

                                    <div className="internship">Internship</div>
                                </div>

                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={frame5} />

                                    <div className="text-wrapper-8">Freelance</div>
                                </div>

                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={image} />

                                    <div className="contractual">Contractual</div>
                                </div>
                            </div>

                            <div className="element-15">Employment type</div>

                            <div className="frame-39">
                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={frame5} />

                                    <div className="text-wrapper-7">Full day</div>
                                </div>

                                <div className="frame-6">
                                    <Image className="frame-38" alt="Frame" src={image} />

                                    <div className="text-wrapper-9">Flexible schedule</div>
                                </div>

                                <div className="frame-40">
                                    <div className="frame-6">
                                        <Image className="frame-38" alt="Frame" src={frame5} />

                                        <div className="text-wrapper-10">Distant work</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-main">
                            <div className="element-16">Recommended Jobs</div>

                            <div className="overlap-5">
                                <div className="element-17">386</div>

                                <Image className="rectangle-6" alt="Rectangle" src={rectangle9} />
                            </div>
                        </div>

                        <div className="sort-by">
                            <Image className="element-18" alt="Element" src={xl} />

                            <Image
                                className="md-outline-short"
                                alt="Md outline short"
                                src={mdOutlineShortText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};