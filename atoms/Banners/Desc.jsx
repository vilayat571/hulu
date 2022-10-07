import Headdiv from "./Headdiv";
import Pdiv from "./Pdiv";

export default function Desc({ item }) {
  return (
    <div className="p-2">
      <Headdiv item={item} />
      <Pdiv item={item} />
    </div>
  );
}
