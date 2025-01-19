const data = [
  // Frontend
  {
    "ID": -1,
    "NodeName": "User",
    "Description": "Represents a user's skill tree.",
    "x": 34,
    "y": 6,
    "discipline": "Frontend"
  },
  {
    "ID": 1,
    "NodeName": "HTML",
    "Description": "Covers various aspects of mastering HTML for building web pages.",
    "x": 214,
    "y": -168
  },
  {
    "ID": 2,
    "NodeName": "HTML Basics",
    "Description": "Introduces the fundamental elements of HTML, including structure and syntax.",
    "from": -1,
    "x": 144,
    "y": -91
  },
  {
    "ID": 3,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on semantic tags like <header>, <footer>, and <article> to create meaningful web pages.",
    "from": 1,
    "x": 297,
    "y": -165
  },
  {
    "ID": 4,
    "NodeName": "Forms and Validations",
    "Description": "Explores form creation and implementing client-side validation techniques.",
    "from": 3,
    "x": 260,
    "y": -92
  },
  {
    "ID": 6,
    "NodeName": "Accessibility",
    "Description": "Covers techniques to make web pages accessible to all users, including proper semantic usage and ARIA roles.",
    "from": 7,
    "x": 124,
    "y": -203
  },
  {
    "ID": 7,
    "NodeName": "Basics of SEO",
    "Description": "Introduces search engine optimization principles, including meta tags and text formatting.",
    "from": 1,
    "x": 193,
    "y": -244
  },
  {
    "ID": 9,
    "NodeName": "CSS",
    "Description": "Focuses on styling and visual design for web applications.",
    "x": 295,
    "y": -250
  },
  {
    "ID": 10,
    "NodeName": "CSS Basics",
    "Description": "Covers basic CSS concepts, including selectors, properties, and the box model.",
    "from": 15,
    "x": 466,
    "y": -272
  },
  {
    "ID": 11,
    "NodeName": "JavaScript",
    "Description": "Introduces dynamic and interactive web development using JavaScript.",
    "from": "218",
    "x": 804,
    "y": -406
  },
  {
    "ID": 12,
    "NodeName": "JavaScript Basics",
    "Description": "Covers core JavaScript concepts such as variables, loops, and functions.",
    "from": 11,
    "x": 809,
    "y": -533
  },
  {
    "ID": 13,
    "NodeName": "DOM Manipulation",
    "Description": "Focuses on using JavaScript to interact with and modify the DOM.",
    "from": 11,
    "x": 922,
    "y": -366
  },
  {
    "ID": 14,
    "NodeName": "Fetch API",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "x": 903,
    "y": -496
  },
  {
    "ID": 15,
    "NodeName": "Making Layouts",
    "Description": "Explores CSS layout techniques like Flexbox and Grid for responsive design.",
    "from": 16,
    "x": 389,
    "y": -362
  },
  {
    "ID": 16,
    "NodeName": "Responsive Web Design",
    "Description": "Covers techniques for creating web pages that adapt to different screen sizes.",
    "from": 9,
    "x": 300,
    "y": -341
  },
  {
    "ID": 17,
    "NodeName": "React",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": "218",
    "x": 593,
    "y": -470
  },
  {
    "ID": 18,
    "NodeName": "React Basics",
    "Description": "Introduces React, a JavaScript library for building user interfaces.",
    "from": 17,
    "x": 529,
    "y": -570
  },
  {
    "ID": 19,
    "NodeName": "React Components",
    "Description": "Covers React components, props, and state for building reusable UI elements.",
    "from": 17,
    "x": 483,
    "y": -503
  },
  {
    "ID": 20,
    "NodeName": "React Hooks",
    "Description": "Explores React Hooks for managing state and side effects in functional components.",
    "from": 17,
    "x": 604,
    "y": -581
  },
  {
    "ID": 21,
    "NodeName": "React Router",
    "Description": "Introduces React Router for adding navigation and routing to React applications.",
    "from": 17,
    "x": 690,
    "y": -498
  },
  {
    "ID": 22,
    "NodeName": "Redux",
    "Description": "Covers Redux, a predictable state container for managing application state.",
    "from": 17,
    "x": 668,
    "y": -570
  },
  {
    "ID": 108,
    "NodeName": "Relational Databases",
    "Description": "Covers relational database concepts and SQL for data management.",
    "from": -1,
    "x": 111,
    "y": 192
  },
  {
    "ID": 109,
    "NodeName": "SQL",
    "Description": "Introduces SQL for querying and managing relational databases.",
    "from": 108,
    "x": 94,
    "y": 368
  },
  {
    "ID": 110,
    "NodeName": "MySQL",
    "Description": "Covers MySQL, an open-source relational database management system.",
    "from": 109,
    "x": 203,
    "y": 401
  },
  {
    "ID": 111,
    "NodeName": "PostgreSQL",
    "Description": "Introduces PostgreSQL, an open-source object-relational database system.",
    "from": 109,
    "x": 264,
    "y": 239
  },
  // DevOps
  {
    "ID": 201,
    "NodeName": "Docker",
    "Description": "Introduces Docker for containerizing applications.",
    "from": -1,
    "x": -48,
    "y": -127,
    "discipline": "DevOps"
  },
  {
    "ID": 202,
    "NodeName": "Kubernetes",
    "Description": "Covers Kubernetes for container orchestration and deployment management.",
    "from": 201,
    "x": -270,
    "y": -495,
    "discipline": "DevOps"
  },
  {
    "ID": 208,
    "NodeName": "AWS",
    "Description": "Covers Amazon Web Services for cloud computing solutions.",
    "from": -1,
    "x": 1,
    "y": -439
  },
  {
    "ID": 209,
    "NodeName": "EC2",
    "Description": "Explores Amazon EC2 for scalable cloud computing instances.",
    "from": 208,
    "x": 93,
    "y": -399
  },
  {
    "ID": 210,
    "NodeName": "S3",
    "Description": "Covers Amazon S3 for object storage solutions.",
    "from": 208,
    "x": 102,
    "y": -471
  },
  {
    "ID": 211,
    "NodeName": "RDS",
    "Description": "Introduces Amazon RDS for managed relational databases.",
    "from": 208,
    "x": 132,
    "y": -569
  },
  {
    "ID": 212,
    "NodeName": "Lambda",
    "Description": "Explores AWS Lambda for serverless computing.",
    "from": 208,
    "x": 40,
    "y": -554
  },
  {
    "ID": 214,
    "NodeName": "CloudFront",
    "Description": "Covers AWS CloudFront for content delivery and caching.",
    "from": 208,
    "x": -80,
    "y": -549
  },
  {
    "ID": 215,
    "NodeName": "Route 53",
    "Description": "Explores AWS Route 53 for DNS and domain management.",
    "from": 208,
    "x": -10,
    "y": -618
  },
  {
    "ID": 216,
    "NodeName": "Terraform",
    "Description": "Introduces Terraform for infrastructure as code and automation.",
    "from": 202,
    "x": -136,
    "y": -653,
    "discipline": "DevOps"
  },
  {
    "ID": 217,
    "NodeName": "Ansible",
    "Description": "Introduces Ansible, an open-source automation tool for configuration management, application deployment, and orchestration.",
    "from": 202,
    "x": -308,
    "y": -628
  },
  {
    "ID": "218",
    "NodeName": false,
    "Description": "Something",
    "from": 10,
    "x": 607,
    "y": -367
  },
  {
    "ID": "219",
    "NodeName": false,
    "x": 786,
    "y": -48
  }
];

export default data;