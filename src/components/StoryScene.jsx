'use client'
import React, { useState } from 'react';
import getStoryData from '../data/StoryData';
import LandingPage from '../components/Landingpage';
import MusicPlayer from '../components/MusicPlayer';

const StoryScene = () => {
  const [currentScene, setCurrentScene] = useState('landing');
  const [gameStarted, setGameStarted] = useState(false);
  const [fadeOutChoice, setFadeOutChoice] = useState(null); // Track which choice is fading out

  const backgroundMusicUrl = '/assets/sounds/bg-thriller.mp3'
  const startGame = () => {
    setGameStarted(true);
    setCurrentScene('intro');
  };

  if (!gameStarted) {
    return <LandingPage startGame={startGame} />;
  }

  const storyData = getStoryData();
  const sceneData = storyData[currentScene];

  if (!sceneData) {
    return <div>Loading scene...</div>;
  }

  const backgroundStyle = {
    backgroundImage: `url(${sceneData.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const handleChoice = (nextScene, sfx, index) => {
    const audio = new Audio(sfx);
    audio.play();
    setFadeOutChoice(index); // Mark the choice to fade out

    setTimeout(() => {
      setCurrentScene(nextScene); // Move to the next scene after fade-out
      setFadeOutChoice(null); // Reset fade-out choice for the next set of buttons
    }, 1000); // Match the duration of the CSS fade-out animation
  };

  return (
    <div style={backgroundStyle}>
      <MusicPlayer musicUrl={backgroundMusicUrl} isPlaying={gameStarted}/>
      <div className="scene-content">
        <p>{sceneData.text}</p>
        <div className="choices">
          {sceneData.choices.map((choice, index) => (
            <button
            key={index}
            className={`py-2 px-5 m-5 choice-button ${
              fadeOutChoice === index ? 'fade-out' : ''
            } ${index === 0 ? " hover:text-white hover:text-opacity-100 text-opacity-40 text-white font-bold" : " text-white font-bold"}`}
            onClick={() => handleChoice(choice.nextScene, choice.sfx, index)}
          >
            {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryScene;
