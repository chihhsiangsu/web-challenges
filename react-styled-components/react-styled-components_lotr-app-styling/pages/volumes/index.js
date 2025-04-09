import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { StyledTilte } from "@/Component/StyledTitle";

export default function Volumes() {
  return (
    <>
      <StyledTilte>The Lord of the Rings</StyledTilte>
      <p>{introduction}</p>
      <StyledTilte>All Volumes</StyledTilte>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
