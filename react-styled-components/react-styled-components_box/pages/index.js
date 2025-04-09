import { BoxWithStyledComponents } from "@/components/BoxWithStyledComponents/index.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack="isBlack" />
    </div>
  );
}
