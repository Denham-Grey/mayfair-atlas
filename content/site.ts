export type NavItem = {
  label: string;
  href: string;
};

export type IndexedItem = {
  index: string;
  title: string;
  body: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "The Firm", href: "#firm" },
  { label: "Our Approach", href: "#approach" },
  { label: "Investment Lens", href: "#investment-lens" },
];

export const hero = {
  eyebrow: "A boutique investment firm",
  titleLead: "Capital with",
  titleEmphasis: "perspective.",
  deck: "A considered approach to investing, with a long view.",
  cta: "Explore our approach",
  indexLabel: "The long view",
  indexNumber: "01",
};

export const firm = {
  number: "01",
  label: "The Firm",
  titleLead: "The value of",
  titleEmphasis: "looking closer.",
  paragraphs: [
    "Mayfair Atlas is a boutique investment firm. Our philosophy starts with a simple question: what makes an opportunity worth committing to over time?",
    "That question puts the quality of the underlying business, the risks we can identify and the price we pay at the centre of the decision.",
  ],
  cta: "Our investment philosophy",
  figure: {
    src: "/assets/colonnade.jpg",
    width: 1122,
    height: 1402,
    alt: "Light and shadow across a row of limestone columns",
    captionIndex: "Fig. 01",
    captionLabel: "A study in perspective",
  },
};

export const approach = {
  number: "02",
  label: "Our Approach",
  titleLead: "How we think",
  titleEmphasis: "about investing.",
  intro:
    "Three principles guide how we examine an opportunity and decide when to commit capital.",
  principles: [
    {
      index: "01 /",
      title: "Understand the business",
      body: "Start with how a business creates value and what could strengthen or erode that advantage.",
    },
    {
      index: "02 /",
      title: "Examine the downside",
      body: "Test the assumptions behind an opportunity and consider what a less favourable outcome would mean.",
    },
    {
      index: "03 /",
      title: "Take the long view",
      body: "Give decisions time and judge opportunities by the value they can create over years.",
    },
  ] satisfies IndexedItem[],
};

export const lens = {
  number: "03",
  label: "Investment Lens",
  titleLead: "What earns",
  titleEmphasis: "our attention.",
  items: [
    {
      index: "01 /",
      title: "An advantage we can explain",
      body: "What makes customers choose the business, and how hard would it be for others to offer the same thing?",
    },
    {
      index: "02 /",
      title: "Decisions that build value",
      body: "How do the people running the business allocate capital when attractive choices are scarce?",
    },
    {
      index: "03 /",
      title: "Room for things to go wrong",
      body: "Does the opportunity still make sense at the price on offer if our expectations prove too optimistic?",
    },
  ] satisfies IndexedItem[],
};

export const contact = {
  number: "04",
  label: "Contact",
  titleLead: "In",
  titleEmphasis: "conversation.",
  links: [
    {
      label: "contact@mayfairatlas.com",
      href: "mailto:contact@mayfairatlas.com",
    },
    {
      label: "+01(346)-7175177",
      href: "tel:+13467175177",
    },
    {
      label: "+234-9034737642",
      href: "tel:+2349034737642",
    },
  ] satisfies ContactLink[],
};

export const footer = {
  copyright: "© 2026 Mayfair Atlas",
};
