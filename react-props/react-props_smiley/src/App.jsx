export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? "I am Happy" + "😜" : "I am Sad" + "😢"}</div>;
}
