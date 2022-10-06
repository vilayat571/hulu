import {
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import HeaderItem from "../../atoms/Header/HeaderItem";
import hulu from "../../public/hulu.png";
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        alt={"logo appearcence"}
        width={200}
        height={100}
        src={hulu}
        className={"object-contain"}
      />
    </header>
  );
}
