import Image from "next/image";
import { brand } from "@/data/content";
export default function Brand() {
  return (
    <Image
      src={brand.logo}
      width={477}
      height={161}
      alt="ONN"
      className="brand-image"
    />
  );
}
