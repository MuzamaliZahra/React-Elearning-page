import React from 'react';


import './Home.css';

export const Home = () => {
  return (
    <div className='main'>
    
      <div className="container1">
        <h1>Welcome to NEXTLEVEL Platform</h1>
      <p>
  " Your gateway to a world of endless possibilities and personal growth. Dive into a realm of mentorship and guidance, where both mentors and mentees come together to unlock their true potential and ascend to new horizons. Join our vibrant community, connect with seasoned mentors, or embark on your journey as a mentee. Explore a universe of knowledge, foster collaboration, and embrace excellence. Customize your path, embark on a journey of learning, and nurture your growth with us "".
</p>

        <div className="options">
          <div className="option">
            <a href="/MentorPrfl">
              <i className="fa-solid fa-user"></i> &nbsp;Mentor
            </a>
          </div>
          <div className="option">
            <a href="/MenteeProfile">
              <i className="fa-regular fa-user"></i> &nbsp;Mentee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
