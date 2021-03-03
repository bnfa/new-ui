import React from "react";
import Accordion from "./index.js";
import "@youseedk/dna";

export default { title: "Accordion" };

const items = [
  { header: "Header", text: "text" },
  {
    header: "Header",
    text:
      "Det varierer alt efter dit forbrug, hvor meget data, du har brug for. Det handler om, hvor meget du bruger nettet og til hvilket formål. Vi har lavet en oversigt over, hvor mange GB data man typisk bruger, når man fx streamer, tjekker de sociale medier og/eller gamer.",
  },
];

export const accordion = () => {
   return <Accordion items={items}></Accordion>;
};
