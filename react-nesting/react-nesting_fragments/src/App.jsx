import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <mian className="flex-container">
      <Boxes color="#007bff" />
      <Boxes color="#fc3" />
      <Boxes color="#ff3333" />
    </mian>
  );
}

function Boxes({ color }) {
  return (
    <>
      <div className="box" style={{ backgroundColor: color }}></div>
    </>
  );
}
