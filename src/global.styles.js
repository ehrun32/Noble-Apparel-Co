import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Open Sans Condensed", "system-ui", sans-serif;
        padding: 2rem 3rem;
        max-width: 100vw;
        color: rgb(33, 33, 33);
        transition: background-color 200ms ease 0s, color 300ms ease 0s;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;

        @media (max-width: 48em) {
            padding: 1rem;
        }
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}

    
`;
