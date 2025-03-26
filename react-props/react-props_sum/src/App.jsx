export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  return (
    <hi>
      {valueA} + {valueB} = {valueA + valueB}
    </hi>
  );
}
