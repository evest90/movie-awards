import { createGlobalStyle } from 'styled-components';
import RobotoWoff from './roboto-v27-latin-regular.woff';
import RobotoWoff2 from './roboto-v27-latin-regular.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${RobotoWoff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoWoff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`