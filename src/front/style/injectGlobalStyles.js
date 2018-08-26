// @flow

// #region imports
import { injectGlobal } from "styled-components";
// #endregion

const injectGlobalStyle = () => injectGlobal`
  html, body {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }

  .invisible {
    opacity: 0;
  }

  .view-enter {
    opacity: 0;
    animation-name: fadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;
    animation-delay: 0s;
    animation-fill-mode: both;
   }

   @keyframes fadeIn {
     from {
       opacity: 0;
     }
     to {
       opacity: 1;
       transform: none;
     }
   }

   .card-shadows {
     box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
   }

   .background-cover {
     -webkit-background-size: cover;
     -moz-background-size: cover;
     background-size: cover;
   }
`;

export default injectGlobalStyle;
