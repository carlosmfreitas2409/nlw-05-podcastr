import styled, { css } from 'styled-components';

interface PlayerButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
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
`;

export const CurrentEpisode = styled.div`
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
`;

export const EmptyPlayer = styled.div`
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
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
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

    &:hover:not(:disabled) {
      filter: brightness(0.95);
    }
  }
`;