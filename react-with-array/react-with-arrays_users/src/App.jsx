import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      {USERS.map((user) => (
        <Fragment>
          <Title text="ClientBoard" />
          <div className="app__card-grid">
            <Card user={USERS[0]} />
          </div>
        </Fragment>
      ))}
    </main>
  );
}
