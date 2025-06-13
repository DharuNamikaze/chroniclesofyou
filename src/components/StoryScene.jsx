'use client'
import React, { useState, useEffect } from 'react';
import getStoryData from '../data/StoryData';
import LandingPage from '../components/Landingpage';
import MusicPlayer from '../components/MusicPlayer';

const StoryScene = () => {
  const [currentScene, setCurrentScene] = useState('landing');
  const [gameStarted, setGameStarted] = useState(false);
  const [fadeOutChoice, setFadeOutChoice] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null); // To manage sound effect audio
  
  const backgroundMusicUrl = '/assets/sounds/bg-love.mp3';

  const startGame = () => {
    setGameStarted(true);
    setCurrentScene('intro');
  };

  useEffect(() => {
    // Clean up currentAudio when component unmounts
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    };
  }, [currentAudio]);

  if (!gameStarted) {
    return <LandingPage startGame={startGame} />;
  }

  const storyData = getStoryData();
  const sceneData = storyData[currentScene];

  if (!sceneData) {
    return <div className='h-full max-auto flex justify-center items-center text-center'>Loading scene...</div>;
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
    boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 9)',
  };
  

  const handleChoice = (nextScene, sfx, index) => {
    // Stop current sound effect if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new sound effect
    const audio = new Audio(sfx);
    audio.play();
    setCurrentAudio(audio); // Update current audio to the new one

    setFadeOutChoice(index);

    setTimeout(() => {
      setCurrentScene(nextScene); // Move to the next scene after fade-out
      setFadeOutChoice(null);
    }, 1000);
  };

  return (
    <div style={backgroundStyle} className=''>
      <MusicPlayer musicUrl={backgroundMusicUrl} isPlaying={gameStarted}/>
      <div className="scene-content  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-10">
        <p className=''>{sceneData.text}</p>
        <div className="choices">
          {sceneData.choices.map((choice, index) => (
            <button
              key={index}
              className={`py-2 px-5 m-5 choice-button text-white drop-shadow-[0_0_2px_black] bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ${
                fadeOutChoice === index ? 'fade-out' : ''
              } ${index === 0 ? "hover:text-white text-opacity-40 text-white font-bold" : "hover:text-white hover:text-opacity-100 text-opacity-40 text-white font-bold"}`}
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
