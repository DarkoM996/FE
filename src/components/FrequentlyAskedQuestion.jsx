import React from "react";
import Accordion from "./Accordion";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="p-2 bg-[#FCF3E3]">
      <Accordion
        title="What is Furnico known for?"
        answer="Furnico is known for its exquisite and meticulously crafted furniture that adds a touch of elegance in any space."
      />
      <Accordion
        title="How do I place an order?"
        answer="Here is some text that is supposed to help with this answer. This is a place where people can place orders."
      />
      <Accordion
        title="Is customization available for furniture pieces??"
        answer="Working title that may get changed later in the process. I will be picking different question here."
      />
      <Accordion
        title="Where can I start project?"
        answer="Now that I am coding this, I will be making lots of changes here in this regard."
      />
    </div>
  );
};

export default FrequentlyAskedQuestion;
