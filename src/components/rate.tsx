interface Props {
  rate: string;
}

function Rate({ rate }: Props) {
  const arrayFill = Array(Number(rate)).fill("fill");
  const arrayEmpty = Array(5 - Number(rate)).fill("empty");

  return (
    <div className="flex-row rate">
      {arrayFill.map((_, index) => (
        <i className="fa-solid fa-star rate_fill" key={index} />
      ))}
      {arrayEmpty.map((_, index) => (
        <i className="fa-solid fa-star rate_empty" key={index} />
      ))}
    </div>
  );
}

export default Rate;
