export default function App() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <Button
        textcolor="red"
        color="blue"
        disabled
        text="Click Me"
        printClick={handleClick}
      />
      <Button
        textcolor="red"
        color="black"
        text="Click Me"
        printClick={handleClick}
      />
    </div>
  );
}

function Button({ textcolor, disabled, text, printClick, color }) {
  return (
    <button
      disabled={disabled}
      style={{ color: textcolor, backgroundColor: color }}
      //onClick={() => printClick()}
      onClick={printClick}
    >
      {disabled ? "Disabled" : text}
    </button>
  );
}
