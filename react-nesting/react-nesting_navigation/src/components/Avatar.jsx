import { Image } from "./Image.jsx";
import avatar from "../img/logo.jpg";

export function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image alt="Avatar" src={avatar} />
    </button>
  );
}
