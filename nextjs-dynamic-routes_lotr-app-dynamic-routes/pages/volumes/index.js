import { volumes } from "../../lib/data";
import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomBook(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ title, slug }, index) => (
          <li key={index}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          router.push(`/volumes/${getRandomBook(volumes).slug}`);
        }}
      >
        get random book
      </button>
    </>
  );
}
