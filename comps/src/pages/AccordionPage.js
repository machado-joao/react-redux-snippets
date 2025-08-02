import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "What is React?",
      content: "React is a JavaScript library created by Facebook.",
    },
    {
      id: 2,
      label: "What does React is used for?",
      content: "It is used to build both web and mobile apps.",
    },
    {
      id: 3,
      label: "Can I build a mobile app with React?",
      content: "Absolutely yes! You can use React Native for that.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
