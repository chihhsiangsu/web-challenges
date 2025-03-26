export default function App() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <Button textcolor="red" disabled text="Click Me" printClick={handleClick} />
  );
}

function Button({ textcolor, disabled, text, printClick }) {
  return (
    <button style={{ color: textcolor }} onClick={() => printClick()}>
      {!disabled ? "disabled" : text}
    </button>
  );
}
