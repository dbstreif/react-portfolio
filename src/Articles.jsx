import './Articles.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Articles = () => {
  const articles = [
    { name: 'heartbeat_style_gossip', url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292289305123663872' },
    { name: 'heartbeat_style_gossip2', url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292289305123663872' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
  };

    return (
        <>
        <Navbar/>
        <div style={{ width: '60%', margin: '0 auto' }}>
          <Slider {...settings}>
            {articles.map((article) => (
              <div key={article.name}>
                <iframe 
                    src={article.url} 
                    height="598" 
                    width="500"
                    frameBorder="0" 
                    allowFullScreen 
                    title={article.name}
                    style={{ border: 'none', borderRadius: '8px' }}  // Optional: border radius for aesthetics
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
        <Footer/>
        </>
        );
};

export default Articles;
