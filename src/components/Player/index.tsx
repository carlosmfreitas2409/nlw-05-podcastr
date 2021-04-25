import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import { FiChevronDown } from 'react-icons/fi';

import 'rc-slider/assets/index.css';

import { usePlayer } from '../../hooks/usePlayer';
import { useDimensions } from '../../hooks/useDimensions';

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import {
  ButtonsContainer,
  Container,
  CurrentEpisode,
  EmptyPlayer,
  PlayerButton,
  Progress
} from './styles';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobileShowing, setIsMobileShowing] = useState(false);

  const { width } = useDimensions();

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    clearPlayerState
  } = usePlayer();

  useEffect(() => {
    if(!audioRef.current) {
      return;
    }

    if(isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if(hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  function handleMobilePlayer(event) {
    if(playRef.current.contains(event.target)) {
      event.stopPropagation();
      return;
    }

    if(!isMobileShowing && width <= 425) {
      setIsMobileShowing(true)
    }
  }

  const episode = episodeList[currentEpisodeIndex];
  
  return (
    <Container
      onClick={(e) => handleMobilePlayer(e)}
      isMobileShowing={isMobileShowing}
      initial={{ height: '4.75rem' }}
      animate={{ height: isMobileShowing || width > 1080 ? '100vh' : '4.75rem' }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 60,
        mass: 2.5
      }}
    >
      <header>
        {isMobileShowing &&
          <button className="backButton" onClick={() => setIsMobileShowing(false)}>
            <FiChevronDown size={32} color="#ffffff" />
          </button>
        }

        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      { episode ? (
        <CurrentEpisode isMobileShowing={isMobileShowing}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <div className="episodeDetails">
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </div>
        </CurrentEpisode>
      ) : (
      <EmptyPlayer isMobileShowing={isMobileShowing}>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <Progress isMobileShowing={isMobileShowing}>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            { episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        { episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            loop={isLooping}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={handleEpisodeEnded}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <ButtonsContainer isMobileShowing={isMobileShowing}>
          <PlayerButton
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            isActive={isShuffling}
          >
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </PlayerButton>

          <PlayerButton
            type="button"
            onClick={playPrevious}
            disabled={!episode || !hasPrevious}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </PlayerButton>

          <PlayerButton
            ref={playRef}
            type="button"
            disabled={!episode}
            onClick={togglePlay}
            className="playButton"
          >
            { isPlaying 
              ? <img src="/pause.svg" alt="Pausar" />
              : <img src="/play.svg" alt="Tocar" /> }
          </PlayerButton>

          <PlayerButton
            type="button"
            onClick={playNext}
            disabled={!episode || !hasNext}
          >
            <img src="/play-next.svg" alt="Tocar próxima" />
          </PlayerButton>

          <PlayerButton
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            isActive={isLooping}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </PlayerButton>
        </ButtonsContainer>
      </footer>
    </Container>
  );
}
