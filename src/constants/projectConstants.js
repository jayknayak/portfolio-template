import bcitLogo from "../static/bcit.png";
import uofrLogo from "../static/uofr.png";
import tgbLogo from "../static/tgb.png";
import manpowerLogo from "../static/manpower.png";
import weatherfordLogo from "../static/weatherford.png";
import personalPortfolio from "../static/personal-portfolios.jpg";

export const projects = [
  {
    title: "British Columbia Institute of Technology - Research Analyst",
    desc: [
      "Design, write, modify, integrate, and test full-stack software applications.",
      "Identify technical problems and communicate effective strategies during proposal, technical due diligence, and/or design phases.",
      "Benchmark and debug critical issues, and participate in software design and code reviews.",
      "Assist in deploying, monitoring, and troubleshooting production systems.",
      "Develop and document APIs. Assist in developing logical and physical specifications.",
      "Prepare progress reports and manuals, summarize results, and present on project outcomes.",
      "Manage and respond to project related email, maintain notes and references in an organized manner.",
    ],
    icon: bcitLogo,
  },
  {
    title: "Invoice Management System",
    desc: [
      "Designed and developed invoice creation, amendments and approvals features. Along with its own dynamic workflow management system.",
      "Created a resuable component to allow the developers easily create UI screens",
      "Developers could create entire UI screens simply by running a few database scripts.",
      "It saved a lot of coding efforts and the testing overhead for the developers.",
      "Later, I had scaled up this component to be compatible with configuring UIs of different business logics.",
    ],
    icon: tgbLogo,
  },
  {
    title: "Contract Management System",
    desc: [
      "Designed and developed UI screens, backend service architecture, and database for contract creation mechanism between a buyer and a vendor, along with mechanisms for its amendments and approval process.",
      "Rest API calls to communicate between buyers and vendors in the client-server system and approval work flow.",
      "Module Owner, Team leader, managing a team of 4-5 software developers. Mentoring junior developers.",
      "Requirements gathering, managing tasks allocations and task deadlines among team members, collaborating with cross-functional development teams, management, and business team to ensure successful and timely deliveries.",
    ],
    icon: manpowerLogo,
  },
  {
    title: "Report to Record (R2R) - Month End",
    desc: [
      "Development of month-end application using object-oriented design and programming concepts delivering various features",
      "Creating and scheduling monthly business activities/tasks",
      "Designate the monthly tasks, establish a workflow hierarchy and approval cycle for every activity",
      "Alerts and custom reminders for task assignments and task deadlines to the stakeholders via emails or internal notification system",
      "Produce month-end statistics reports to verify and track company's business activities and inform management and investors",
      "Development of the R2R - Month End module and successful implementation in a crucial deadline helped the project team attract its first client.",
    ],
    icon: weatherfordLogo,
  },
  {
    title: "University of Regina - Cybersecurity Researcher",
    desc: [
      "Designing and modeling cybersecurity architecture, security systems and security-focused tools, mitigation plans, and algorithms for risk assessment and solve cybersecurity issues in cyber-physical systems.",
      "Analyzed security vulnerabilities and developed security measures to mitigate cyber risks in smart grid.",
      "Developed penetration testing tools to identify security weaknesses, and computing threat vectors.",
      "Designed security mechanisms for secure siting of embedded systems.",
      "Implemented the proposed cybersecurity architecture on an actual electric utility – the SaskPower grid of Saskatchewan province, to analyze the feasibility and accuracy of the architecture.",
    ],
    icon: uofrLogo,
  },
  {
    title: "Personal Portfolios/Websites",
    desc: [
      "Designing and modeling cybersecurity architecture, security systems and security-focused tools, mitigation plans, and algorithms for risk assessment and solve cybersecurity issues in cyber-physical systems.",
      "Analyzed security vulnerabilities and developed security measures to mitigate cyber risks in smart grid.",
      "Developed penetration testing tools to identify security weaknesses, and computing threat vectors.",
      "Designed security mechanisms for secure siting of embedded systems.",
      "Implemented the proposed cybersecurity architecture on an actual electric utility – the SaskPower grid of Saskatchewan province, to analyze the feasibility and accuracy of the architecture.",
    ],
    icon: personalPortfolio,
  },
];
