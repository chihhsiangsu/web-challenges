import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function VolumeOne() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

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
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="The fellowship of the ring"
      />
    </>
  );
}
