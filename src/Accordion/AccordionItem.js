import React from "react";
import Icon from "../images/scroll-indicator-explore.svg";
// import Icon from "./scroll-indicator-explore.svg";

const AccordionItem = ({ header, text }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const classCollapse = `accordion__collapsable ${
    isExpanded ? "accordion__collapsable--is-expanded" : ""
  }`;

  const iconClass = `accordion__icon ${
    isExpanded ? "accordion__icon--is-expanded" : ""
  }`;

  const toggle = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <li className="accordion__item">
      <a className="ys-subtitle accordion__item-header" onClick={toggle}>
        {header}
        <img src={Icon} className={iconClass} />
      </a>

      <div className={classCollapse} style={{ padding: "0 1rem" }}>
        <p className="ys-body-text accordion__text">{text}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
