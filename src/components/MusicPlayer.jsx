// components/MusicPlayer.jsx
import React, { useEffect, useRef } from 'react';

const MusicPlayer = ({ musicUrl, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src={musicUrl} type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
