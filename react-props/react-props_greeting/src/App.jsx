export default function App() {
  return <Greeting name="Coach" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
