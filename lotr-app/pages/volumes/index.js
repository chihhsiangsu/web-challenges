import Link from "next/link";
import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes">All Volumes</Link>
        </li>
        {volumes.map(({ title }, index) => (
          <li key={index}>
            <Link href="/volumes/TheFellowshipOfTheRing">
              Volume{index + 1}: {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
