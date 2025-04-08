import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function VolumeThree() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <ul>
        <li>
          <Link href="/volumes">All Volumes</Link>
        </li>
      </ul>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal}
          {": "}
          {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}
          {": "}
          {volume.books[1].title}
        </li>
      </ul>
      <img
        src="/images/the-return-of-the-king.png"
        width={140}
        height={230}
        alt="the return of the king"
      />
    </>
  );
}
