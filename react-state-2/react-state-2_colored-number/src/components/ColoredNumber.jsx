export default function ColoredNumber({ value }) {
  return (
    <h2 style={{ color: `hsl(${230 - (value / 100) * 230}deg 100% 50%)` }}>
      {value}
    </h2>
  );
}

export function Button({ onCalculate, calculateFactor, ariaLabel }) {
  return (
    <button
      type="button"
      className="counter__button"
      onClick={onCalculate}
      aria-label={ariaLabel}
    >
      {calculateFactor}
    </button>
  );
}
