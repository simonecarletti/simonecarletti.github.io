const experienceData = {
  employment: [
    {
      name: "Genomedics s.r.l",
      position: "Full-Stack Developer",
      date: "2020 - Present",
      description:
        "Lead developer of three key projects that handle the release, deployment and licence management for all the company’s products. Developer for the company’s main project (KPlatform).",
      importantInfo: "Angular (Typescript, SCSS, HTML), PHP, Laravel, SQL, Python",
      url: "https://www.genomedics.it/",
    },
    {
      name: "DIANA student team",
      position: "Control Engineer",
      date: "2023 - 2024",
      description: "Development of a martian rover for the ERC competition",
      url: "https://www.teamdiana.it/",
    },
  ],
  education: [
    {
      name: "Technical University of Denmark",
      position: "M.Sc. Autonomous Systems",
      date: "2024 - Present",
      description: "1 year Erasmus+ exchange.",
      url: "https://www.dtu.dk/",
    },
    {
      name: "Politecnico di Torino",
      position: "M.Sc. Computer Engineering",
      date: "2023 - Present",
      description: "Automation and Intelligent Cyber-Physical Systems",
      importantInfo: "Current GPA: 29.23/30",
      url: "https://www.polito.it/",
    },
    {
      name: "Università degli Studi di Firenze",
      position: "B.Sc. Computer Engineering",
      date: "2020 - 2023",
      importantInfo: "Graduated with 110/110 cum laude (with honors)",
      description:
        "Thesis title: Creation of a sensor network to monitor the greenhouses of the Botanical Garden of Florence",
      url: "./assets/pdfs/bachelor_thesis.pdf",
    },
    {
      name: "Università degli Studi di Firenze",
      position: "CyberChallenge",
      date: "2020 - 2023",
      description: "The first italian cybersecurity training program for talented university and high school students",
      url: "https://cyberchallenge.it/",
    },
  ],
};


const blogPosts = {
  "2024-10-26-bw-enlarging": {
    title: "How to enlarge B&W negatives",
    description: "",
    category: "photography",
    image: "./assets/images/blog/wipe_down.jpg",
  },
  "2025-05-17-c41-developing": {
    title: "How to develop color negative film (C41)",
    description: "",
    category: "photography",
    image: "./assets/images/blog/2025-05-17-c41-developing/machine.jpg",
  }
};


const context = {
  currYear: new Date().getFullYear(),
  clients: [
    {
      url: "https://www.genomedics.it/",
      src: "./assets/images/clients/genomedics.png",
    },
    {
      url: "https://www.dtu.dk/",
      src: "./assets/images/clients/dtu.png",
      skipColorChange: true,
    },
    {
      url: "https://www.polito.it/",
      src: "./assets/images/clients/polito.png",
    },
    {
      url: "https://www.unifi.it/",
      src: "./assets/images/clients/unifi.svg",
    },
  ],
  contacts: [
    {
      name: "Email",
      icon: "mail",
      style: "background-color: hsl(41, 99%, 64%)",
      value: "simonecarletti.work@gmail.com",
      href: "mailto:simonecarletti.work@gmail.com",
      nonClickableValue: true,
    },
    {
      name: "Linkedin",
      icon: "logo-linkedin",
      style: "background-color: hsl(221, 100%, 79%)",
      value: "simone-carletti-it",
      href: "https://www.linkedin.com/in/simone-carletti-it/",
    },
    {
      name: "Instagram",
      icon: "logo-instagram",
      style: "background-color: hsl(19, 97%, 85%)",
      value: "simone_carletti",
      href: "https://www.instagram.com/simone_carletti/",
    },
    {
      name: "GitHub",
      icon: "logo-github",
      href: "https://github.com/regi18",
      style: "background-color: hsl(76, 39%, 72%)",
      value: "regi18",
    },
  ],
  experienceItems: [
    {
      name: "Education",
      // color: 'hsl(19, 97%, 85%)',
      color: "hsl(76, 39%, 72%)",
      items: experienceData.education,
      icon: "school-outline",
    },
    {
      name: "Employment",
      color: "hsl(177, 39%, 72%)",
      items: experienceData.employment,
      icon: "laptop-outline",
    },
  ],
  blogPosts,
};
