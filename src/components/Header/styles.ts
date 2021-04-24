import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.light};

  img {
    cursor: pointer;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.background.light};
  }

  .leftSide {
    margin-left: auto;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;
      font-size: 0;
    }

    time {
      text-transform: capitalize;
      margin-right: 1.25rem;
    }
  }
`;