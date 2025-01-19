const data = [
{
    "ID": -1,
    "NodeName": "User",
    "Description": "Represents a user's skill tree.",
    "x": 34,
    "y": 6
  },
  {
    "ID": 1,
    "NodeName": "HTML",
    "Description": "Covers various aspects of mastering HTML for building web pages.",
    "from": -1,
    "x": -138,
    "y": 160
  },
  {
    "ID": 2,
    "NodeName": "HTML Basics",
    "Description": "Introduces the fundamental elements of HTML, including structure and syntax.",
    "from": 1,
    "x": -187,
    "y": 123
  },
  {
    "ID": 3,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on semantic tags like <header>, <footer>, and <article> to create meaningful web pages.",
    "from": 1,
    "x": -212,
    "y": 203
  },
  {
    "ID": 4,
    "NodeName": "Forms and Validations",
    "Description": "Explores form creation and implementing client-side validation techniques.",
    "from": 1,
    "x": -210,
    "y": 162
  },
  {
    "ID": 6,
    "NodeName": "Accessibility",
    "Description": "Covers techniques to make web pages accessible to all users, including proper semantic usage and ARIA roles.",
    "from": 1,
    "x": -143,
    "y": 102
  },
  {
    "ID": 7,
    "NodeName": "Basics of SEO",
    "Description": "Introduces search engine optimization principles, including meta tags and text formatting.",
    "from": 1,
    "x": -95,
    "y": 94
  },
  {
    "ID": 9,
    "NodeName": "CSS",
    "Description": "Focuses on styling and visual design for web applications.",
    "from": -1,
    "x": -6,
    "y": -159
  },
  {
    "ID": 10,
    "NodeName": "CSS Basics",
    "Description": "Covers basic CSS concepts, including selectors, properties, and the box model.",
    "from": 9,
    "x": 114,
    "y": -379
  },
  {
    "ID": 11,
    "NodeName": "JavaScript",
    "Description": "Introduces dynamic and interactive web development using JavaScript.",
    "from": -1,
    "x": 103,
    "y": 209
  },
  {
    "ID": 12,
    "NodeName": "JavaScript Basics",
    "Description": "Covers core JavaScript concepts such as variables, loops, and functions.",
    "from": 11,
    "x": -25,
    "y": 297
  },
  {
    "ID": 13,
    "NodeName": "DOM Manipulation",
    "Description": "Focuses on using JavaScript to interact with and modify the DOM.",
    "from": 11,
    "x": 39,
    "y": 274
  },
  {
    "ID": 14,
    "NodeName": "Fetch API",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "x": -30,
    "y": 336
  },
  {
    "ID": 15,
    "NodeName": "Making Layouts",
    "Description": "Explores CSS layout techniques like Flexbox and Grid for responsive design.",
    "from": 9,
    "x": -195,
    "y": -279
  },
  {
    "ID": 16,
    "NodeName": "Responsive Web Design",
    "Description": "Covers techniques for creating web pages that adapt to different screen sizes.",
    "from": 9,
    "x": -46,
    "y": -377
  },
  {
    "ID": 17,
    "NodeName": "React",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "x": 163,
    "y": 398
  },
  {
    "ID": 18,
    "NodeName": "React Basics",
    "Description": "Introduces React, a JavaScript library for building user interfaces.",
    "from": 17,
    "x": 127,
    "y": 541
  },
  {
    "ID": 19,
    "NodeName": "React Components",
    "Description": "Covers React components, props, and state for building reusable UI elements.",
    "from": 17,
    "x": 235,
    "y": 557
  },
  {
    "ID": 20,
    "NodeName": "React Hooks",
    "Description": "Explores React Hooks for managing state and side effects in functional components.",
    "from": 17,
    "x": 4,
    "y": 511
  },
  {
    "ID": 21,
    "NodeName": "React Router",
    "Description": "Introduces React Router for adding navigation and routing to React applications.",
    "from": 17,
    "x": 295,
    "y": 492
  },
  {
    "ID": 22,
    "NodeName": "Redux",
    "Description": "Covers Redux, a predictable state container for managing application state.",
    "from": 17,
    "x": 355,
    "y": 407
  },
  {
    "ID": 101,
    "NodeName": "Python",
    "Description": "Introduces Python programming with a focus on backend development.",
    "from": -1,
    "x": -105,
    "y": 21
  },
  {
    "ID": 102,
    "NodeName": "Django",
    "Description": "Covers Django, a Python framework for building scalable and robust web applications.",
    "from": 101,
    "x": -331,
    "y": 35
  },
  {
    "ID": 103,
    "NodeName": "Django Rest Framework",
    "Description": "Explores building RESTful APIs using Django Rest Framework.",
    "from": 102,
    "x": -503,
    "y": 53
  },
  {
    "ID": 104,
    "NodeName": "Flask",
    "Description": "Introduces Flask, a lightweight Python framework for building web applications.",
    "from": 101,
    "x": -305,
    "y": -41
  },
  {
    "ID": 105,
    "NodeName": "Java",
    "Description": "Introduces Java programming for backend systems.",
    "from": -1,
    "x": 122,
    "y": 62
  },
  {
    "ID": 106,
    "NodeName": "Spring Boot",
    "Description": "Covers Spring Boot, a Java framework for building microservices and enterprise applications.",
    "from": 105,
    "x": 369,
    "y": 111
  },
  {
    "ID": 107,
    "NodeName": "JavaFX",
    "Description": "Explores JavaFX for building rich client applications with Java.",
    "from": 105,
    "x": 275,
    "y": 187
  },
  {
    "ID": 108,
    "NodeName": "Relational Databases",
    "Description": "Covers relational database concepts and SQL for data management.",
    "from": -1,
    "x": 203,
    "y": -40
  },
  {
    "ID": 109,
    "NodeName": "SQL",
    "Description": "Introduces SQL for querying and managing relational databases.",
    "from": 108,
    "x": 388,
    "y": -179
  },
  {
    "ID": 110,
    "NodeName": "MySQL",
    "Description": "Covers MySQL, an open-source relational database management system.",
    "from": 109,
    "x": 610,
    "y": -149
  },
  {
    "ID": 111,
    "NodeName": "PostgreSQL",
    "Description": "Introduces PostgreSQL, an open-source object-relational database system.",
    "from": 109,
    "x": 540,
    "y": -343
  },
  {
    "ID": 201,
    "NodeName": "Docker",
    "Description": "Introduces Docker for containerizing applications.",
    "from": -1,
    "x": -48,
    "y": -127
  },
  {
    "ID": 202,
    "NodeName": "Kubernetes",
    "Description": "Covers Kubernetes for container orchestration and deployment management.",
    "from": 201,
    "x": -61,
    "y": -390
  },
  {
    "ID": 203,
    "NodeName": "Git",
    "Description": "Introduces Git, a version control system for tracking changes in code.",
    "from": -1,
    "x": -143,
    "y": -69
  },
  {
    "ID": 204,
    "NodeName": "GitHub",
    "Description": "Covers using GitHub for collaboration and repository management.",
    "from": 203,
    "x": -302,
    "y": -224
  },
  {
    "ID": 205,
    "NodeName": "CI/CD",
    "Description": "Explores Continuous Integration and Continuous Deployment pipelines.",
    "from": 204,
    "x": -451,
    "y": -359
  },
  {
    "ID": 206,
    "NodeName": "Jenkins",
    "Description": "Covers using Jenkins for automating CI/CD workflows.",
    "from": 205,
    "x": -457,
    "y": -528
  },
  {
    "ID": 207,
    "NodeName": "Travis CI",
    "Description": "Introduces Travis CI for automating build and deployment processes.",
    "from": 205,
    "x": -598,
    "y": -383
  },
  {
    "ID": 208,
    "NodeName": "AWS",
    "Description": "Covers Amazon Web Services for cloud computing solutions.",
    "from": -1,
    "x": 206,
    "y": -88
  },
  {
    "ID": 209,
    "NodeName": "EC2",
    "Description": "Explores Amazon EC2 for scalable cloud computing instances.",
    "from": 208,
    "x": 364,
    "y": -53
  },
  {
    "ID": 210,
    "NodeName": "S3",
    "Description": "Covers Amazon S3 for object storage solutions.",
    "from": 208,
    "x": 385,
    "y": -81
  },
  {
    "ID": 211,
    "NodeName": "RDS",
    "Description": "Introduces Amazon RDS for managed relational databases.",
    "from": 208,
    "x": 311,
    "y": -213
  },
  {
    "ID": 212,
    "NodeName": "Lambda",
    "Description": "Explores AWS Lambda for serverless computing.",
    "from": 208,
    "x": 211,
    "y": -311
  },
  {
    "ID": 214,
    "NodeName": "CloudFront",
    "Description": "Covers AWS CloudFront for content delivery and caching.",
    "from": 208,
    "x": 310,
    "y": -238
  },
  {
    "ID": 215,
    "NodeName": "Route 53",
    "Description": "Explores AWS Route 53 for DNS and domain management.",
    "from": 208,
    "x": 192,
    "y": -298
  },
  {
    "ID": 216,
    "NodeName": "Terraform",
    "Description": "Introduces Terraform for infrastructure as code and automation.",
    "from": 202,
    "x": 27,
    "y": -523
  },
  {
    "ID": 217,
    "NodeName": "Ansible",
    "Description": "Introduces Ansible, an open-source automation tool for configuration management, application deployment, and orchestration.",
    "from": 202,
    "x": -198,
    "y": -547
  }

];

export default data;