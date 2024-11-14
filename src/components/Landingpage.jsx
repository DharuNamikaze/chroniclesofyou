// components/LandingPage.js
import React from 'react';

const LandingPage = ({ startGame }) => {
  return (
    <div className="landing-page flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-10">Chronicles of You</h1>
        <p className="text-lg m-2">Embark on an epic adventure where every choice shapes your story.</p>
        <button
          className="py-3 px-6 mt-2 bg-blue-500 text-white rounded-full text-xl"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
