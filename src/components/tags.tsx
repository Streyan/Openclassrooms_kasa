import Tag from "./tag";

interface Props {
  tags: string[];
}

function Tags({ tags }: Props) {
  return (
    <div className="flex-column dropdowns">
      {tags.map((tag) => (
        <Tag value={tag} />
      ))}
    </div>
  );
}

export default Tags;
