import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Hello</h2>
      <label htmlFor="input">Type something</label>
      <input id="input"></input>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Hello">
        What is Hello meaning?
      </a>
    </article>
  );
}
