import { AppProvider } from '../hooks';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';
import { Wrapper } from '../styles/pages/App';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </Wrapper>

      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp
