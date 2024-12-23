interface Props {
  value?: string;
}

function Tag({ value }: Props) {
  return (
    <div className="tag">
      <p>{value}</p>
    </div>
  );
}

export default Tag;
