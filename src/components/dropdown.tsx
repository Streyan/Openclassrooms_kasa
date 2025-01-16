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
        <p className="dropdown_header_title">{title}</p>
        <button
          className="dropdown_header_arrow rotate"
          onClick={() => setCollapse(!isCollapseOpen)}
        >
          {isCollapseOpen ? (
            <i className="fa-solid fa-angle-up open" />
          ) : (
            <i className="fa-solid fa-angle-up" />
          )}
        </button>
      </div>
      <div
        className={
          isCollapseOpen ? "dropdown_content_open" : "dropdown_content_closed"
        }
      >
        <div className="dropdown_content_text">
          {typeof text === "string" ? (
            <p>{text}</p>
          ) : (
            text.map((line) => (
              <div key={line}>
                <p>{line}</p> <br />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
