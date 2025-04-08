import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Volumes Overview</h1>
      <ul>
        <li>
          <Link href="/volumes/TheFellowshipOfTheRing">
            Volume1: The Fellowship of The Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/TheTwoTowers">Volume2: The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/TheReturnOfTheKing">
            Volume3: The Return of The King
          </Link>
        </li>
      </ul>
    </>
  );
}
