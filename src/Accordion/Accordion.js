import React from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.scss";

const Accordion = ({ items }) => {
  return (
    <section className="accordion ys-row">
      <ul className="accordion__container">
        {items.map((item, index) => {
          return <AccordionItem key={index} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Accordion;
