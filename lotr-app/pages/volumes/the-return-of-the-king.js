import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

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
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        width={140}
        height={230}
        alt="the return of the king"
      />
    </>
  );
}
