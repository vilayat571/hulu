import {
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HeaderItem from "../../atoms/Header/HeaderItem";

function HeadItems() {
  return (
    <div className="flex flex-grow justify-evenly max-w-2xl lg:mt-8  ">
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={BoltIcon} />
      <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
      <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon} />
    </div>
  );
}

export default HeadItems;