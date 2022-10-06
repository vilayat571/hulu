import {
BadgeCheckIcon,
CollectionIcon,
HomeIcon,
LightningBoldIcon,
SearchIcon,
UserIcon
} from '@heroicons/react/24/solid';

import Image from "next/image";
import HeaderItem from "../../atoms/Header/HeaderItem";
import hulu from "../../public/hulu.png";
export default function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title='Home' Icon={HomeIcon} />
      </div>
      <Image alt={"logo appearcence"} width={200} height={100} src={hulu} className={"object-contain"} />
    </header>
  );
}

