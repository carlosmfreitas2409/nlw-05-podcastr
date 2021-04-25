import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface MobileProps {
  isMobileShowing: boolean;
}

interface PlayerButtonProps {
  isActive?: boolean;
}

export const Container = styled(motion.div)<MobileProps>`
  padding: 3rem 4rem;
  width: 26.5rem;
  height: 100vh;

  background: ${({ theme }) => theme.colors.primary.normal};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .backButton {
      position: absolute;
      left: 24px;

      background: transparent;
      border: 0;
      font-size: 0;
    }
  }

  strong {
    font-family: ${({ theme }) => theme.font.title};
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty .progress {
      opacity: 0.5;
    }
  }
    
  @media (max-width: 1080px) {
    width: 100%;
    height: 4.75rem;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    ${({ isMobileShowing }) => !isMobileShowing && css`
      flex-direction: row;
      justify-content: flex-start;

      header {
        display: none;
        visibility: hidden;
      }

      footer {
        align-self: center;
        margin-left: auto;
      }
    `}
  }

  ${({ isMobileShowing }) => !isMobileShowing ? css`
    @media (min-width: 425px) and (max-width: 1080px) {
      padding: 3rem 1.5rem;
    }

    @media (max-width: 425px) {
      padding: 3rem 1.5rem 3rem 0;
    }
  ` : css`
    padding: 3rem 3rem;
    z-index: 5;
  `}
`;

export const CurrentEpisode = styled.div<MobileProps>`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem ${({ theme }) => theme.font.title};
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }

  ${({ isMobileShowing }) => !isMobileShowing && css`
    @media (max-width: 1080px) {
      text-align: inherit;
      display: inline-flex;
      align-items: center;

      img {
        width: 3.68rem;
        height: 3.68rem;
        border-radius: 1rem;
      }

      .episodeDetails {
        flex: 1;
        width: 1%;
        margin-left: 1.25rem;
        padding-right: 1.5rem;
        display: grid;

        strong {
          margin-top: 0;
          font-size: 1rem;
          line-height: normal;
        }

        span {
          margin-top: 0.25rem;
          font-size: 0.813rem;
        }

        strong, span {
          max-width: 80%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    @media (max-width: 425px) {
      img {
        border-radius: 0;
        height: 100%;
        width: 6rem;
      }

      strong, span {
        max-width: 95%;
      }
    }
  `}
`;

export const EmptyPlayer = styled.div<MobileProps>`
  width: 100%;
  height: 20rem;

  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  border: 1.5px dashed ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 1.5rem;

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isMobileShowing }) => !isMobileShowing && css`
    @media (max-width: 1080px) {
      padding: 0;
      width: 3.68rem;
      height: 3.68rem;
      border-radius: 1rem;

      strong {
        display: none;
      }
    }

    @media (max-width: 320px) {
      margin-left: 1.5rem;
    }
  `}
`;

export const Progress = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  margin-bottom: 2.5rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;

    .emptySlider {
      width: 100%;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary.lighter};
      border-radius: 2px;
    }
  }

  ${({ isMobileShowing }) => !isMobileShowing && css`
    @media (max-width: 1080px) {
      margin-bottom: 0;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5.75rem;

      .rc-slider {
        padding: 7px 0 0;
      }

      span {
        display: none;
      }
    }
  `};
`;

export const ButtonsContainer = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  ${({ isMobileShowing }) => isMobileShowing && css`
    button.playButton {
      height: 4rem;
      width: 4rem;
    }

    button:not(.playButton) {
      display: block;
      visibility: visible;
    }
  `};
`;

export const PlayerButton = styled.button<PlayerButtonProps>`
  background: transparent;
  border: 0;
  font-size: 0;

  transition: filter 0.2s;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.7);
  }

  ${({ isActive }) => isActive && css`
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

    &:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }
  `}

  &.playButton {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.primary.light};
    z-index: 6;

    &:hover:not(:disabled) {
      filter: brightness(0.95);
    }
  }

  @media (max-width: 1080px) {
    &.playButton {
      width: 3.25rem;
      height: 3.25rem;
    }
  }
  
  @media (max-width: 810px) {
    &:not(.playButton) {
      display: none;
      visibility: hidden;
    }
  }
`;