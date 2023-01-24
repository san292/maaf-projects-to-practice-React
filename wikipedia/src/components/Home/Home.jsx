import React from 'react';
import './Home.css';

const Home = ({ title, snippet, pageid }) => {
  return (
    <>
      <div className="container">
        <h1 className="container-title">{title}</h1>
        <h4 className="container-pageId">{pageid}</h4>
        <span
          className="container-span"
          dangerouslySetInnerHTML={{ __html: snippet }}
        ></span>
        <button> ...afficher plus</button>
      </div>
    </>
  );
};

export default Home;
