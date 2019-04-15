import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    body {
        margin: 0;
        padding: 0;
        color: ${theme.colors.text01};
    }

    a {
        color: dodgerblue;
    }

    ::selection {
        background: ${theme.colors.text01};
        color: #fff;
    }

    hr {
        margin: 0 0 1.5rem;
        padding: 0;
        background: ${theme.colors.text01};
        border: none;
        height: 1px;
        opacity: 0.7;
    }
`

export default GlobalStyle