import Image from "next/image";
import hulu from "../../public/hulu.webp";
export default function Imglogo() {
  return (
    <Image
      alt={"logo appearcence"}
      width={200}
      height={100}
      src={hulu}
      className={"object-contain lg:mb-6"}
    />
  );
}
