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
    "x": 216,
    "y": -151
  },
  {
    "ID": 2,
    "NodeName": "HTML Basics",
    "Description": "Introduces the fundamental elements of HTML, including structure and syntax.",
    "from": 1,
    "x": 132,
    "y": -162
  },
  {
    "ID": 3,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on semantic tags like <header>, <footer>, and <article> to create meaningful web pages.",
    "from": 1,
    "x": 165,
    "y": -214
  },
  {
    "ID": 4,
    "NodeName": "Forms and Validations",
    "Description": "Explores form creation and implementing client-side validation techniques.",
    "from": 1,
    "x": 209,
    "y": -235
  },
  {
    "ID": 6,
    "NodeName": "Accessibility",
    "Description": "Covers techniques to make web pages accessible to all users, including proper semantic usage and ARIA roles.",
    "from": 1,
    "x": 122,
    "y": -106
  },
  {
    "ID": 7,
    "NodeName": "Basics of SEO",
    "Description": "Introduces search engine optimization principles, including meta tags and text formatting.",
    "from": 1,
    "x": 251,
    "y": -228
  },
  {
    "ID": 9,
    "NodeName": "CSS",
    "Description": "Focuses on styling and visual design for web applications.",
    "from": 1,
    "x": 348,
    "y": -266
  },
  {
    "ID": 10,
    "NodeName": "CSS Basics",
    "Description": "Covers basic CSS concepts, including selectors, properties, and the box model.",
    "from": 9,
    "x": 361,
    "y": -339
  },
  {
    "ID": 11,
    "NodeName": "JavaScript",
    "Description": "Introduces dynamic and interactive web development using JavaScript.",
    "from": 9,
    "x": 461,
    "y": -372
  },
  {
    "ID": 12,
    "NodeName": "JavaScript Basics",
    "Description": "Covers core JavaScript concepts such as variables, loops, and functions.",
    "from": 11,
    "x": 427,
    "y": -415
  },
  {
    "ID": 13,
    "NodeName": "DOM Manipulation",
    "Description": "Focuses on using JavaScript to interact with and modify the DOM.",
    "from": 11,
    "x": 475,
    "y": -425
  },
  {
    "ID": 14,
    "NodeName": "Fetch API",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "x": 417,
    "y": -368
  },
  {
    "ID": 15,
    "NodeName": "Making Layouts",
    "Description": "Explores CSS layout techniques like Flexbox and Grid for responsive design.",
    "from": 9,
    "x": 283,
    "y": -281
  },
  {
    "ID": 16,
    "NodeName": "Responsive Web Design",
    "Description": "Covers techniques for creating web pages that adapt to different screen sizes.",
    "from": 9,
    "x": 316,
    "y": -318
  },
  {
    "ID": 17,
    "NodeName": "React",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "x": 588,
    "y": -478
  },
  {
    "ID": 18,
    "NodeName": "React Basics",
    "Description": "Introduces React, a JavaScript library for building user interfaces.",
    "from": 17,
    "x": 576,
    "y": -540
  },
  {
    "ID": 19,
    "NodeName": "React Components",
    "Description": "Covers React components, props, and state for building reusable UI elements.",
    "from": 17,
    "x": 524,
    "y": -526
  },
  {
    "ID": 20,
    "NodeName": "React Hooks",
    "Description": "Explores React Hooks for managing state and side effects in functional components.",
    "from": 17,
    "x": 622,
    "y": -539
  },
  {
    "ID": 21,
    "NodeName": "React Router",
    "Description": "Introduces React Router for adding navigation and routing to React applications.",
    "from": 17,
    "x": 669,
    "y": -475
  },
  {
    "ID": 22,
    "NodeName": "Redux",
    "Description": "Covers Redux, a predictable state container for managing application state.",
    "from": 17,
    "x": 660,
    "y": -525
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
    "x": 176,
    "y": 188
  },
  {
    "ID": 106,
    "NodeName": "Spring Boot",
    "Description": "Covers Spring Boot, a Java framework for building microservices and enterprise applications.",
    "from": 105,
    "x": 230,
    "y": 157
  },
  {
    "ID": 107,
    "NodeName": "JavaFX",
    "Description": "Explores JavaFX for building rich client applications with Java.",
    "from": 105,
    "x": 220,
    "y": 241
  },
  {
    "ID": 108,
    "NodeName": "Relational Databases",
    "Description": "Covers relational database concepts and SQL for data management.",
    "from": -1,
    "x": 219,
    "y": 18
  },
  {
    "ID": 109,
    "NodeName": "SQL",
    "Description": "Introduces SQL for querying and managing relational databases.",
    "from": 108,
    "x": 400,
    "y": -1
  },
  {
    "ID": 110,
    "NodeName": "MySQL",
    "Description": "Covers MySQL, an open-source relational database management system.",
    "from": 109,
    "x": 461,
    "y": -43
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
    "x": -270,
    "y": -495
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
    "x": 99,
    "y": -412
  },
  {
    "ID": 209,
    "NodeName": "EC2",
    "Description": "Explores Amazon EC2 for scalable cloud computing instances.",
    "from": 208,
    "x": 145,
    "y": -321
  },
  {
    "ID": 210,
    "NodeName": "S3",
    "Description": "Covers Amazon S3 for object storage solutions.",
    "from": 208,
    "x": 392,
    "y": -480
  },
  {
    "ID": 211,
    "NodeName": "RDS",
    "Description": "Introduces Amazon RDS for managed relational databases.",
    "from": 208,
    "x": 310,
    "y": -611
  },
  {
    "ID": 212,
    "NodeName": "Lambda",
    "Description": "Explores AWS Lambda for serverless computing.",
    "from": 208,
    "x": 165,
    "y": -521
  },
  {
    "ID": 214,
    "NodeName": "CloudFront",
    "Description": "Covers AWS CloudFront for content delivery and caching.",
    "from": 208,
    "x": 222,
    "y": -567
  },
  {
    "ID": 215,
    "NodeName": "Route 53",
    "Description": "Explores AWS Route 53 for DNS and domain management.",
    "from": 208,
    "x": 71,
    "y": -582
  },
  {
    "ID": 216,
    "NodeName": "Terraform",
    "Description": "Introduces Terraform for infrastructure as code and automation.",
    "from": 202,
    "x": -136,
    "y": -653
  },
  {
    "ID": 217,
    "NodeName": "Ansible",
    "Description": "Introduces Ansible, an open-source automation tool for configuration management, application deployment, and orchestration.",
    "from": 202,
    "x": -308,
    "y": -628
  }

];

export default data;