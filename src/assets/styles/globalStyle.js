import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
    @font-face {
        font-family: 'press_start_2pregular';
        src: url('./assets/fonts/pressstart2p-regular-webfont.woff2') format('woff2'),
             url('./assets/fonts/pressstart2p-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    
    }
* { padding: 0; margin: 0;}
  html, body, #root, main{
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }
  .banner-section{
    background: url("./assets/images/Background.png");
    width: 100%;
    height: 100%;
    overflow: auto
  }
  .minting-table-image{
    background: url("./assets/images/Table1.png");
    min-width: 680px;
    width: 680px;
    height: 400px;
    background-size: 100% 100%;
    margin: auto;
  }
  .estate-table-image{
    background: url("./assets/images/Table2.png");
    min-width: 680px;
    width: 680px;
    height: 200px;
    background-size: 100% 100%;
    margin: auto;
  }
  .estate-table2-image{
    background: url("./assets/images/Table3.png");
    min-width: 680px;
    width: 680px;
    height: 400px;
    background-size: 100% 100%;
    margin: auto;
  }

  .orange-txt{
    color: #ffa700;
  }
  @media only screen and (max-width: 768px){
    .title-image{
        width: 100%;
    }
  }

`;
