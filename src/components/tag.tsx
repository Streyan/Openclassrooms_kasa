interface Props {
  value?: string;
}

function Tag({ value }: Props) {
  return (
    <div className="flex-column tag">
      <p>{value}</p>
    </div>
  );
}

export default Tag;
