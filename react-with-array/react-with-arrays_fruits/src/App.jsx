import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1122, name: "Banana" },
    { id: 1222, name: "Apple" },
    { id: 2222, name: "Green apple" },
    { id: 3333, name: "Orange" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <div key={id}>
          <Card id={fruit.id} name={fruit.name} />
        </div>
      ))}
    </div>
  );
}
