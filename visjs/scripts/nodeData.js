const data = [
  // Frontend
  {
    "ID": -1,
    "NodeName": "User",
    "Description": "Represents a user's skill tree.",
    "discipline": "Frontend"
  },
  {
    "ID": 1,
    "NodeName": "HTML",
    "Description": "Covers various aspects of mastering HTML for building web pages.",
    "from": -1,
    "discipline": "Frontend"
  },
  {
    "ID": 2,
    "NodeName": "HTML Basics",
    "Description": "Introduces the fundamental elements of HTML, including structure and syntax.",
    "from": 1,
    "discipline": "Frontend"
  },
  {
    "ID": 3,
    "NodeName": "Semantic HTML",
    "Description": "Focuses on semantic tags like <header>, <footer>, and <article> to create meaningful web pages.",
    "from": 1,
    "discipline": "Frontend"
  },
  {
    "ID": 4,
    "NodeName": "Forms and Validations",
    "Description": "Explores form creation and implementing client-side validation techniques.",
    "from": 1,
    "discipline": "Frontend"
  },
  {
    "ID": 6,
    "NodeName": "Accessibility",
    "Description": "Covers techniques to make web pages accessible to all users, including proper semantic usage and ARIA roles.",
    "from": 1,
    "discipline": "Frontend"
  },
  {
    "ID": 7,
    "NodeName": "Basics of SEO",
    "Description": "Introduces search engine optimization principles, including meta tags and text formatting.",
    "from": 1,
    "discipline": "Frontend"
  },
  {
    "ID": 9,
    "NodeName": "CSS",
    "Description": "Focuses on styling and visual design for web applications.",
    "from": -1,
    "discipline": "Frontend"
  },
  {
    "ID": 10,
    "NodeName": "CSS Basics",
    "Description": "Covers basic CSS concepts, including selectors, properties, and the box model.",
    "from": 9,
    "discipline": "Frontend"
  },
  {
    "ID": 15,
    "NodeName": "Making Layouts",
    "Description": "Explores CSS layout techniques like Flexbox and Grid for responsive design.",
    "from": 9,
    "discipline": "Frontend"
  },
  {
    "ID": 16,
    "NodeName": "Responsive Web Design",
    "Description": "Covers techniques for creating web pages that adapt to different screen sizes.",
    "from": 9,
    "discipline": "Frontend"
  },
  {
    "ID": 11,
    "NodeName": "JavaScript",
    "Description": "Introduces dynamic and interactive web development using JavaScript.",
    "from": -1,
    "discipline": "Frontend"
  },
  {
    "ID": 12,
    "NodeName": "JavaScript Basics",
    "Description": "Covers core JavaScript concepts such as variables, loops, and functions.",
    "from": 11,
    "discipline": "Frontend"
  },
  {
    "ID": 13,
    "NodeName": "DOM Manipulation",
    "Description": "Focuses on using JavaScript to interact with and modify the DOM.",
    "from": 11,
    "discipline": "Frontend"
  },
  {
    "ID": 14,
    "NodeName": "Fetch API",
    "Description": "Explains how to use the Fetch API for making HTTP requests and handling responses.",
    "from": 11,
    "discipline": "Frontend"
  },
  // Backend
  {
    "ID": 101,
    "NodeName": "Python",
    "Description": "Introduces Python programming with a focus on backend development.",
    "from": -1,
    "discipline": "Backend"
  },
  {
    "ID": 102,
    "NodeName": "Django",
    "Description": "Covers Django, a Python framework for building scalable and robust web applications.",
    "from": 101,
    "discipline": "Backend"
  },
  {
    "ID": 103,
    "NodeName": "Django Rest Framework",
    "Description": "Explores building RESTful APIs using Django Rest Framework.",
    "from": 102,
    "discipline": "Backend"
  },
  {
    "ID": 104,
    "NodeName": "Flask",
    "Description": "Introduces Flask, a lightweight Python framework for building web applications.",
    "from": 101,
    "discipline": "Backend"
  },
  {
    "ID": 105,
    "NodeName": "Java",
    "Description": "Introduces Java programming for backend systems.",
    "from": -1,
    "discipline": "Backend"
  },
  {
    "ID": 106,
    "NodeName": "Spring Boot",
    "Description": "Covers Spring Boot, a Java framework for building microservices and enterprise applications.",
    "from": 105,
    "discipline": "Backend"
  },
  {
    "ID": 107,
    "NodeName": "JavaFX",
    "Description": "Explores JavaFX for building rich client applications with Java.",
    "from": 105,
    "discipline": "Backend"
  },
  // DevOps
  {
    "ID": 201,
    "NodeName": "Docker",
    "Description": "Introduces Docker for containerizing applications.",
    "from": -1,
    "discipline": "DevOps"
  },
  {
    "ID": 202,
    "NodeName": "Kubernetes",
    "Description": "Covers Kubernetes for container orchestration and deployment management.",
    "from": 201,
    "discipline": "DevOps"
  },
  {
    "ID": 203,
    "NodeName": "Git",
    "Description": "Introduces Git, a version control system for tracking changes in code.",
    "from": -1,
    "discipline": "DevOps"
  },
  {
    "ID": 204,
    "NodeName": "GitHub",
    "Description": "Covers using GitHub for collaboration and repository management.",
    "from": 203,
    "discipline": "DevOps"
  },
  {
    "ID": 205,
    "NodeName": "CI/CD",
    "Description": "Explores Continuous Integration and Continuous Deployment pipelines.",
    "from": 204,
    "discipline": "DevOps"
  },
  {
    "ID": 206,
    "NodeName": "Jenkins",
    "Description": "Covers using Jenkins for automating CI/CD workflows.",
    "from": 205,
    "discipline": "DevOps"
  },
  {
    "ID": 207,
    "NodeName": "Travis CI",
    "Description": "Introduces Travis CI for automating build and deployment processes.",
    "from": 205,
    "discipline": "DevOps"
  },
  {
    "ID": 208,
    "NodeName": "AWS",
    "Description": "Covers Amazon Web Services for cloud computing solutions.",
    "from": -1,
    "discipline": "DevOps"
  },
  {
    "ID": 209,
    "NodeName": "EC2",
    "Description": "Explores Amazon EC2 for scalable cloud computing instances.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 210,
    "NodeName": "S3",
    "Description": "Covers Amazon S3 for object storage solutions.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 211,
    "NodeName": "RDS",
    "Description": "Introduces Amazon RDS for managed relational databases.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 212,
    "NodeName": "Lambda",
    "Description": "Explores AWS Lambda for serverless computing.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 214,
    "NodeName": "CloudFront",
    "Description": "Covers AWS CloudFront for content delivery and caching.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 215,
    "NodeName": "Route 53",
    "Description": "Explores AWS Route 53 for DNS and domain management.",
    "from": 208,
    "discipline": "DevOps"
  },
  {
    "ID": 216,
    "NodeName": "Terraform",
    "Description": "Introduces Terraform for infrastructure as code and automation.",
    "from": 202,
    "discipline": "DevOps"
  },
  {
    "ID": 217,
    "NodeName": "Ansible",
    "Description": "Introduces Ansible, an open-source automation tool for configuration management, application deployment, and orchestration.",
    "from": 202,
    "discipline": "DevOps"
  }
];

export default data;