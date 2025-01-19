const data = [
  // Frontend
  {
    "ID": -1,
    "NodeName": "User",
    "Description": "Represents a user's skill tree."
  },
  {
    "ID": 1,
    "NodeName": "HTML",
    "Description": "A skill tree covering various aspects of HTML mastery.",
    "from": -1
  },
  {
    "ID": 2,
    "NodeName": "HTML Basics",
    "Description": "Covers the foundational elements of HTML structure and syntax.",
    "from": 1
  },
  {
    "ID": 3,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on using <html>, <head>, <body>, and semantic tags to create meaningful and structured web pages.",
    "from": 2
  },
  {
    "ID": 4,
    "NodeName": "Forms and Validations",
    "Description": "Covers creating forms and implementing basic validation techniques.",
    "from": 2
  },
  {
    "ID": 5,
    "NodeName": "Attributes",
    "Description": "Explains the proper use of attributes such as id, class, href, src, and alt in HTML elements.",
    "from": 2
  },
  {
    "ID": 6,
    "NodeName": "Accessibility",
    "Description": "Teaches best practices for nesting elements and maintaining proper document flow to enhance accessibility.",
    "from": 2
  },
  {
    "ID": 7,
    "NodeName": "Basics of SEO",
    "Description": "Introduces basic SEO principles and how to use text formatting tags like <b>, <i>, <u>, <strong>, and <em>.",
    "from": 2
  },
  {
    "ID": 8,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on writing meaningful, well-structured HTML using semantic elements.",
    "from": 1
  },
  {
    "ID": 9,
    "NodeName": "CSS",
    "Description": "Covers styling techniques and visual design for web development.",
    "from": -1
  },
  {
    "ID": 10,
    "NodeName": "CSS Basics",
    "Description": "Introduces foundational CSS concepts, including selectors, properties, and styling rules.",
    "from": 9
  },
  {
    "ID": 11,
    "NodeName": "JavaScript",
    "Description": "A core technology of the web, enabling dynamic and interactive web pages.",
    "from": -1
  },
  {
    "ID": 12,
    "NodeName": "JavaScript Basics",
    "Description": "Covers fundamental concepts such as variables, functions, and control structures.",
    "from": 11
  },
  {
    "ID": 13,
    "NodeName": "DOM Manipulation",
    "Description": "Focuses on modifying and interacting with the Document Object Model using JavaScript.",
    "from": 11
  },
  {
    "ID": 14,
    "NodeName": "Fetch API",
    "Description": "Explains how to retrieve data from external APIs using JavaScript's Fetch API.",
    "from": 11
  },
  {
    "ID": 15,
    "NodeName": "Making layouts",
    "Description": "Covers styling techniques and visual design for web development.",
    "from": 9
  },
  {
    "ID": 16,
    "NodeName": "Responsive Web Design",
    "Description": "Introduces foundational CSS concepts, including selectors, properties, and styling rules.",
    "from": 9
  },
  // Backend
  {
    "ID": 101,
    "NodeName": "Python",
    "Description": "Introduces Python programming for backend development.",
    "from": -1
  },
  {
    "ID": 102,
    "NodeName": "Django",
    "Description": "Covers Django, a high-level Python web framework for building robust backend systems.",
    "from": 101
  }
];

export default data;
