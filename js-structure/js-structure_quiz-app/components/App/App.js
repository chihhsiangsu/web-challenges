import { CardList } from "../CardList/Cardlist.js";
import { Form } from "../Form/Form.js";
import { Header } from "../Header/Header.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
