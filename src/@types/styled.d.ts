import 'styled-components';

import { light } from '../styles/themes';

export type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}