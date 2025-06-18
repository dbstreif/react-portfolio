import './Projects.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./Navbar";
import Footer from "./Footer";


const RepoEmbed = ({ repoUrl, repoName }) => {
    const cardUrl = `https://gh-card.dev/repos/dbstreif/${ repoName }.png?fullname=`
  return (
    <div className="repo-card">
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <img src={cardUrl} alt={`GitHub card for dbstreif/${repoName}`} />
        </a>
    </div>
  );
};

const Projects = () => {
  const repos = [
    { name: 'SpaceX-API-PY', url: 'https://github.com/dbstreif/SpaceX-API-PY' },
    { name: 'RoomieAI', url: 'https://github.com/dbstreif/RoomieAI' },
    { name: 'Giggity', url: 'https://github.com/dbstreif/Giggity' },
    { name: 'gamehackingtemplate', url: 'https://github.com/dbstreif/gamehackingtemplate' },
    { name: 'heartbeatstyle-gossip', url: 'https://github.com/dbstreif/heartbeatstyle-gossip' },
    { name: 'RougeCompany', url: 'https://github.com/dbstreif/RogueCompany' },
    { name: 'ChristmasPI', url: 'https://github.com/dbstreif/ChristmasPI' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return (
        <>
        <Navbar/>
        <div style={{ width: '40%', margin: '0 auto', paddingTop: '300px', paddingBottom: '300px' }}>
          <Slider {...settings}>
            {repos.map((repo) => (
              <div key={repo.name}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  <h3>{repo.name}</h3>
                    <RepoEmbed repoUrl={repo.url} repoName={repo.name}/>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <Footer/>
        </>
        );
    };

export default Projects;
