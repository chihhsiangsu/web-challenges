import { Image } from "./Image.jsx";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <a href="#">
      <Image alt="logo" src={logo} />
    </a>
  );
}
