import React from "react";
import Spotbox from "./index.js";
import "@youseedk/dna";

export default {
  title: "Spotbox",
  component: Spotbox,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  return <Spotbox {...args} />;
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  bodyText: ` Med vores lynhurtige hastigheder på op til 1.000 Mbit får du en
    stabil internetdækning til hele familien. Så kan I gå på
    internettet på alle jeres mobiler, tablets og computere på samme
    tid og streame film og tv-serier i ultrahøj kvalitet.`,
  btnText: "Bestil internet nu",
  btnUrl:
    "https://yousee.dk/bredbaand/overblik.aspx?icid=lp_S2_No_Salg_BB_Multiple_BB-Midfunnel_Y000006218_u3419",
  legalText: "Legal Text",
  primaryTitle: "Nyd den bedste streamingoplevelse",
  secondaryTitle: "any",
  subTitle: "any",
  imageUrl: "https://picsum.photos/300/200",
  imageAlt: "Den bedste streaming oplevelse",
};
