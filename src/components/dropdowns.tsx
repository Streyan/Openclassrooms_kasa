import Dropdown from "./dropdown";

interface Props {
  dropdowns: { title: string; text: string }[];
}

function Dropdowns({ dropdowns }: Props) {
  return (
    <div className="flex-column dropdowns">
      {dropdowns.map((dropdown) => (
        <Dropdown
          key={dropdown.title}
          title={dropdown.title}
          text={dropdown.text}
        />
      ))}
    </div>
  );
}

export default Dropdowns;
