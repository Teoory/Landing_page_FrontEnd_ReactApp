import React, { useEffect, useState } from 'react';
import BannerBackground from "../Assets/BannerBackground.png";
import BannerImage from "../Assets/ben2.png";
import AboutBackGround from "../Assets/about-background.png"
import AboutImage from "../Assets/aboutImage.png"
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { OfferData } from '../Datas/OfferData';
import { AiFillStar } from "react-icons/ai";

import { TestimontialData } from '../Datas/TestimontialData';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const newTimer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimontialData.length);
        }, 5000);
        setTimer(newTimer);

        return () => {
            clearInterval(newTimer);
        };
    }, []);

    const handleNext = () => {
        clearInterval(timer);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimontialData.length);
    };

    const handlePrev = () => {
        clearInterval(timer);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TestimontialData.length) % TestimontialData.length);
    };

    const testimonial = TestimontialData[currentIndex];
    return (
    <>
    <div className="home-container">
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your Favourite fashions
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />{" "}
                </button>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
    {/* About */}
    <div className="about-section-container" id='about'>
        <div className="about-background-image-container">
            <img src={AboutBackGround} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Model Your Fashion <br /> With Us
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button">
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>
    </div>
    {/* Offer Scetion */}
    <div className="work-section-wrapper" id='offer'>
        <div className="work-section-top">
            <p className="primary-subheading">Offer</p>
            <h1 className="primary-heading">What We Offer</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="work-section-bottom">
            {OfferData.map((data, index) => (
                <div className="work-section-info" key={index}>
                    <div className="info-boxes-img-container">
                        <img src={data.Image} alt="" />
                    </div>
                    <h2>{data.Title}</h2>
                    <p>{data.Text}</p>
                </div>
            ))}
        </div>
    </div>
    {/* Testimontial */}
    <div className="work-section-wrapper" id='testimontial'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={testimonial.profilePic} alt="" />
            <p>{testimonial.content}</p>
            <div className="testimonials-stars-container">
                {[...Array(testimonial.starRating)].map((_, starIndex) => (
                    <AiFillStar key={starIndex} />
                ))}
                {[...Array(5 - testimonial.starRating)].map((_, starIndex) => (
                    <AiFillStar key={starIndex} color="gray" />
                ))}
            </div>
            <h2>{testimonial.name}</h2>
            <div className='handleButtons'>
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button onClick={handleNext} disabled={currentIndex === TestimontialData.length - 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    {/* Contact */}
    <div className="contact-page-wrapper" id='contact'>
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="mail@mail.com" />
            <button className="secondary-button">Submit</button>
        </div>
    </div>
    </>
  ) 
}

export default HomePage