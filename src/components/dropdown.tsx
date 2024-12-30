import { useState } from "react";

interface Props {
  title: string;
  text: string | string[];
}

function Dropdown({ title, text }: Props) {
  const [isCollapseOpen, setCollapse] = useState<boolean>(false);

  return (
    <div className="flex-column dropdown">
      <div className="flex-space-between dropdown_header">
        <div className="dropdown_header_title">{title}</div>
        <button
          className="dropdown_header_arrow"
          onClick={() => setCollapse(!isCollapseOpen)}
        >
          {isCollapseOpen ? (
            <i className="fa-solid fa-angle-up" />
          ) : (
            <i className="fa-solid fa-angle-down" />
          )}
        </button>
      </div>
      <div
        className={
          isCollapseOpen ? "dropdown_content_open" : "dropdown_content_closed"
        }
      >
        <div className="dropdown_content_text">
          {typeof text === "string"
            ? text
            : text.map((line) => (
                <>
                  {line} <br />
                </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
