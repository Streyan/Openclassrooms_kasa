interface Props {
  rate: string;
}

function Rate({ rate }: Props) {
  return (
    <div className="flex-column rate">
      {rate}
      <div className="flex-column rate_full"></div>
      <div className="flex-column rate_empty"></div>
    </div>
  );
}

export default Rate;
