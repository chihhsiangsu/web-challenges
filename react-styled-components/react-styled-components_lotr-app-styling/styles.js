import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
  /* Color styles */
  --color-earth: #282828;
  --color-clouds: #f1f1f1;
  --color-smoke: #d4d1cd;

  /* Font styles */
  --font-family: ${lora.style.fontFamily}, serif;
  /*
    use like:
    font: var(--font-body);
  */
  --font-headline-1: normal 700 44px/48px var(--font-family);
  --font-headline-2: normal 700 32px/41px var(--font-family);
  --font-title: normal 700 16px/20px var(--font-family);
  --font-caption: normal 500 12px/15px var(--font-family);
  --font-caption--italic: italic 400 12px/15px var(--font-family);
  --font-body: normal 400 16px/20px var(--font-family);

  /* Effect styles */
  /*
    use like:
    box-shadow: var(--box-shadow-book);
  */
  --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

  --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
}

  body {
    font-family: ${lora.style.fontFamily}, serif;
  }
`;
