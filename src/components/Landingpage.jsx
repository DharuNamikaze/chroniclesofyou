// components/LandingPage.js
import React from 'react';

const LandingPage = ({ startGame }) => {
  return (
    <>
    <div className="landing-page">
      <h1 className="text-4xl font-bold mt-10 text-center">Chronicles of You</h1>
      <p className="text-lg m-4 text-center">Embark on an epic adventure where every choice shapes your story.</p>
      <button
        className="py-3 px-6 mt-4 flex text-center bg-blue-500 text-white rounded-full text-xl"
        onClick={startGame}
      >
        Start Game
      </button>
    </div>
    </>
    
  );
};

export default LandingPage;