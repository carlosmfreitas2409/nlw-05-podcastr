import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';

export function Header() {
  const { currentTheme, toggleTheme } = useTheme();

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <Container>
      <Link href="/">
        {currentTheme === 'light' ? (
          <img src="/logo-dark.svg" alt="Podcastr" />
        ) : (
          <img src="/logo-light.svg" alt="Podcastr" />
        )}
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <div className="leftSide">
        <time>{currentDate}</time>

        <button type="button" onClick={toggleTheme}>
          {currentTheme === 'light' ? (
            <FiMoon size={24} color="#808080" />
          ) : (
            <FiSun size={24} color="#d0d2d6" />
          )}
        </button>
      </div>
    </Container>
  );
}
