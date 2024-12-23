import Tag from "./tag";

interface Props {
  tags: string[];
}

function Tags({ tags }: Props) {
  return (
    <div className="flex-row tags">
      {tags.map((tag) => (
        <Tag value={tag} key={tag} />
      ))}
    </div>
  );
}

export default Tags;
