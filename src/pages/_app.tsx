import { PlayerProvider } from '../hooks/PlayerContext';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';
import { Wrapper } from '../styles/pages/App';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </Wrapper>

      <GlobalStyle />
    </PlayerProvider>
  );
}

export default MyApp
