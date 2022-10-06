export default function HeaderItem({title,Icon}) {
  return (
    <div>
      <Icon className={"w-6 h-6"} />
      <p>{title}</p>
    </div>
  );
}
