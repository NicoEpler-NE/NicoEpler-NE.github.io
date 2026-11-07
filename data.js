// ============================================
// EASY-TO-EDIT CONFIGURATION FILE
// Edit this file to update your website content
// ============================================

const portfolioData = {
  // Personal Information
  personal: {
    name: "Nico Epler",
    title: "Master of Engineering (Electronic)",
    email: "nicoepler66@gmail.com",
    linkedin: "www.linkedin.com/in/nicoepler",
    intro:
      "I am an electronic engineer with experience in UAV systems, autonomous robotics, control and software development. I hold a Master's degree in Electronic Engineering (cum laude) and a Bachelor's degree in Mechatronic Engineering from Stellenbosch University. Born and raised in Namibia, I studied and worked in South Africa, gaining experience across different cultures and environments.\n\nMost recently, I worked as an Unmanned Aerial Systems (UAS) Engineer at Flying Robot (Pty) Ltd, where I developed, integrated and tested UAV platforms, with a focus on large-scale ISR quadcopters. My work included system architecture design, platform construction and configuration, flight-control tuning, test piloting, sensor integration and troubleshooting. This covered the complete development cycle from conceptualisation and prototyping through iterative improvements to commercial deployment. I also designed electronic circuits and PCBs and developed technical documentation.\n\nFor my Master's research, I designed and developed a quadcopter for autonomous exploration and 3D mapping of underground Global Navigation Satellite System (GNSS)-denied mining environments. I developed and integrated an onboard autonomy stack using Python, C++ and ROS 2, bringing together perception, mapping, motion planning and flight control. This research resulted in a conference paper published in MATEC Web of Conferences.\n\nMy broader experience includes computer vision, embedded electronics, PCB design, mechanical prototyping and industrial automation. Through projects, I developed and tested Siemens PLC-based systems for motor control, automated sorting and pneumatic control. I enjoy working across hardware and software, solving practical problems, pushing technical boundaries and bringing systems from development through to real-world deployment.",

    // "I am an electronic engineer specialising in Unmanned Aerial Vehicle (UAV) systems and autonomous robotics. I hold a Master's degree in Electronic Engineering (cum laude) and a Bachelor's in Mechatronic Engineering from Stellenbosch University.\n\nCurrently working as an Unmanned Aerial Systems (UAS) Engineer at Flying Robot (Pty) Ltd, I work on the development, integration and testing of UAV platforms, with a focus on large-scale quadcopter systems. My role spans system architecture design, platform construction and configuration, flight-control tuning, test piloting, and payload and sensor integration. This covers the full development cycle from electronic and sensor design through to flight testing, troubleshooting and system optimisation, helping ensure that UAV platforms are reliable and ready for real-world operation.\n\nMy broader expertise includes robotic hardware and software development, autonomous systems development, computer vision, sensor integration, embedded hardware design and Printed Circuit Board (PCB) development. For my Master's thesis, I designed and developed a quadcopter for autonomous mapping and exploration in Global Navigation Satellite System (GNSS)-denied underground mine environments, with part of this work subsequently published in MATEC Web of Conferences. My previous experience also includes mechatronic consulting, mechanical design and fabrication.",

    focusAreas: [
      "UAV Systems",
      "Autonomous Robotics",
      "Computer Vision/Image Processing",
      "Embedded Electronics/PCB Design",
      "Mechanical Design/Prototyping",
      "Machine Learning",
      // "UAV Systems",
      // "Autonomous Robotics",
      // "Control & Industrial Automation",
      // "Computer Vision & Image Processing",
      // "Embedded Electronics & PCB Design",
      // "System Integration & Testing",
      // "Mechanical Design & Prototyping",
    ],
    focusAreas: [
      "UAV Systems",
      "Autonomous Robotics",
      "Robotics Software",
      "Control Systems",
      "Computer Vision & Perception",
      "System Integration & Testing",
      "Embedded Electronics & PCB Design",
      "Industrial Automation",
    ],
    // currentRole: {
    //   title: "Unmanned Aerial Systems Engineer",
    //   company: "Flying Robot (Pty) Ltd",
    //   location: "South Africa",
    //   period: "Oct 2025 -- Present",
    // },
    currentRole: {
      title: "Open to Work",
      company: "Engineering Opportunities",
      location: "Open to relocation",
      period: "Available",
    },
    languages: [
      { name: "German", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Afrikaans", level: "Fluent" },
    ],
    interests: [
      "Hiking",
      "Cycling",
      "Jogging",
      "Travelling",
      "Exploring the outdoors",
    ],
  },

  // Education Timeline
  education: [
    {
      year: "2024-2025",
      title: "Master of Engineering (Electronic)",
      institution: "Stellenbosch University",
      description:
        "Master of Engineering in Electronic Engineering (cum laude)",
    },
    {
      year: "2020-2023",
      title: "Bachelor of Engineering (Mechatronic)",
      institution: "Stellenbosch University",
      description:
        "Bachelor of Engineering in Mechatronics - Golden Key International Honour Society",
    },
  ],

  // Work Experience Timeline
  experience: [
    {
      year: "Oct 2025 -- Oct 2026",
      title: "Unmanned Aerial Systems Engineer",
      company: "Flying Robot (Pty) Ltd",
      location: "South Africa",
      description: [
        // "Designed UAV system architecture and carried out platform development, configuration, subsystem integration and validation for large-scale Intelligence, Surveillance, and Reconnaissance (ISR) quadcopter platforms",
        // "Performed flight-control tuning, UAV test piloting and system analysis",
        // "Designed electronic circuits and custom PCBs for embedded sensors",
        // "Worked with communication interfaces including serial, Inter-Integrated Circuit (I²C), Controller Area Network (CAN), networking and wireless links",
        // "a",
        "Designed UAV system architecture and carried out platform development, configuration, subsystem integration and validation for large-scale Intelligence, Surveillance and Reconnaissance (ISR) quadcopters, taking platforms through to commercial deployment",
        // "Adapted UAV configurations to customer-specific requirements and operational needs",
        "Adapted UAV configurations to customer-specific requirements and provided customer support with integration and troubleshooting",
        "Configured and tuned cascaded PID flight-control systems, performed UAV test piloting, and analysed telemetry and flight logs to improve platform performance",
        "Diagnosed hardware, software and integration issues during bench testing and outdoor flight trials, including communication and sensor-interface faults involving serial, Inter-Integrated Circuit (I²C), Controller Area Network (CAN), networking and radio links",
        "Designed electronic circuits and custom PCBs for UAV power monitoring and embedded sensing, from component selection and schematic design to hardware integration",
        "Developed and adapted Lua and Python software for UAV systems, including work with Raspberry Pi and embedded Linux",
        "Prepared test procedures, production and assembly documentation, and defined workstation processes for production",
        "Performed practical workshop work including soldering, wiring-harness assembly, 3D printing and electronic component placement",
        // "Provided customer support for UAV platforms, assisting with configuration, integration and troubleshooting",
      ],
      //   technologies: [
      //     // "UAV Systems",
      //     // "PCB Design",
      //     // "Flight Control",
      //     // "System Integration",
      //     // "a",
      //     "UAV Systems",
      //     "Flight Control",
      //     "System Integration",
      //     "Python",
      //     "Lua",
      //     "PCB Design",
      //   ],
      technologies: [
        "UAV Systems",
        "PX4",
        "ArduPilot",
        "Betaflight",
        "Flight Control",
        "System Integration",
        "Python",
        "Lua",
        "PCB Design",
      ],
      image: "UASE.jpg",
    },
    {
      year: "2024 -- 2025",
      title: "Graduate Research Engineer -- Master's Thesis",
      company: "Stellenbosch University",
      location: "South Africa",
      description: [
        // "Designed and developed a UAV platform for autonomous underground mine mapping and exploration (GNSS-denied)",
        // "Designed, configured and validated a complete UAV autonomy stack combining embedded hardware, flight-control software, Robot Operating System 2 (ROS 2) development, visual-inertial odometry and Simultaneous Localisation and Mapping (SLAM) components",
        // "Developed an end-to-end autonomous exploration framework for underground environments",
        // 'Presented the paper "Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration" at RobMech 2025, subsequently published in MATEC Web of Conferences',
        // "a",
        "Designed and developed an autonomous UAV for GNSS-denied exploration and 3D mapping of underground mining environments",
        "Developed and integrated a complete onboard UAV autonomy stack using Python, C++ and ROS 2, combining RGB-D perception, visual-inertial odometry, SLAM, 3D occupancy mapping and PX4 flight control",
        "Implemented an exploration and motion-planning framework incorporating frontier selection, collision-aware path planning and trajectory execution",
        "Integrated and evaluated RTAB-Map and SpectacularAI on a companion computer, tuning RTAB-Map and modifying the SpectacularAI ROS 2 wrapper for point-cloud processing and mapping",
        "Evaluated the system through Gazebo simulations and indoor flight experiments, achieving 97.1% mapping coverage in simulation and 96.1% during indoor testing",
        'Presented the paper "Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration" at RobMech 2025, subsequently published in MATEC Web of Conferences',
      ],
      technologies: [
        // "ROS 2",
        // "SLAM",
        // "Autonomous Systems",
        // "Computer Vision",
        // "a",
        "Python",
        "C++",
        "ROS 2",
        "PX4",
        "Gazebo",
        "SLAM",
        "Visual-Inertial Odometry",
        "RTAB-Map",
        "SpectacularAI",
        "RGB-D Perception",
        "3D Occupancy Mapping",
        "Autonomous Exploration",
        "Motion Planning",
        "Embedded Linux",
      ],
      image: "GRE.jpg",
    },
    {
      year: "Jan 2024 -- Dec 2025",
      title: "UAV Systems and Product Consultant (Occasional Consultancy)",
      company: "Phantom Pilots",
      location: "South Africa",
      description: [
        // "Assisted with quadcopter component selection, system integration and testing for early-stage UAV product development",
        // "Consulted on and developed mechatronic side projects, providing practical design input and component-selection support",
        // "Assisted with quadcopter component selection, system integration and testing for early-stage UAV product development",
        // "Consulted on and developed mechatronic projects, providing practical design input, component-selection support and system-level development"
        "Assisted with quadcopter component selection, system integration and testing for early-stage UAV product development.",
        "Consulted on and developed mechatronic side projects, providing practical design input, component-selection support, and system-level development.",
      ],
      technologies: [
        "UAV Systems",
        "Betaflight",
        "Mechatronics",
        "System Integration",
        "Product Development",
      ],
      image: "UAVSPC.jpg",
    },
    {
      year: "2022 + 2023",
      title: "Engineering Design and Drafting Intern",
      company: "Metallum Fabrications",
      location: "Namibia",
      description: [
        "Held responsibility for the end-to-end development of steel assemblies, from CAD design and fabrication drawings through to cutting, welding, fitting and installation",
        "Gained hands-on experience with workshop practices, manufacturing drawings, fabrication constraints and tolerancing",
      ],
      technologies: ["CAD", "Fabrication", "Mechanical Design"],
      image: "EDD.jpg",
    },
  ],

  // Skills grouped by category
  skills: {
    "Programming & Software": [
      "Python",
      "C++",
      "C",
      "Lua",
      "R",
      "Ladder Logic & SCL",
      "MATLAB & Simulink",
      "Git",
      "Linux & Bash",
      // "Computer Vision",
      // "PyTorch & YOLO",
      // "ROS 2",
      // "Computer Vision & Image Processing",
      // "Machine Learning",
    ],
    "Embedded & Electronics": [
      // "Embedded Systems",
      // "PCB Design",
      // "Sensor Integration",
      // "Communication Interfaces (I²C, CAN, Serial)",
      // "Circuit Design",
      // "networking and wireless communication links",

      // "Embedded Systems",
      "Embedded Linux",
      "STM32",
      "Circuit & PCB Design",
      "Sensor Integration",
      "I²C, SPI, Serial & CAN",
      "Ethernet, TCP/IP & UDP",
      "Radio & Wireless Communication",
      // "Soldering & Wiring-Harness Assembly",
    ],
    "UAV & Robotics": [
      // "UAV Systems Engineering",
      // "Autonomous Navigation",
      // "Autonomous Exploration",
      // "SLAM",
      // "Visual-Inertial Odometry",
      // "Flight Control Tuning",

      "UAV Systems Engineering",
      "PX4",
      "ArduPilot",
      "Betaflight",
      "Flight-Control Tuning",
      "ROS 2",
      "Gazebo",
      "SLAM",
      "VIO",
      "Autonomous Exploration",
      "Motion Planning",
      "Sensor Fusion",
      "Computer Vision",
      "PyTorch & YOLO",
    ],
    "Control & Industrial Automation": [
      "Siemens S7-1200 & TIA Portal",
      "InTouch HMI",
      "PID & Lead Compensator Design",
      "Pneumatic Control Systems",
    ],
    // "Computer Vision & Machine Learning": [
    //   "OpenCV",
    //   "Stereo Vision",
    //   "RGB-D Perception",
    //   "Camera Calibration",
    //   "Triangulation",
    //   "Point-Cloud Processing",
    //   "PyTorch & YOLO",
    //   "Object Detection & Tracking",
    // ],
    "Mechanical Design & Prototyping": [
      "Inventor",
      "Fusion 360",
      "Onshape",
      "Design for Manufacturing & Assembly",
      "3D Printing (FDM)",
    ],
    // "Mechanical Design": [
    //   "CAD Modelling (Inventor, Fusion, Onshape)",
    //   "Design-for-Manufacturing",
    //   "Additive Manufacturing",
    //   "Laser & Plasma Cutting",
    //   "Fabrication Drawings",
    //   "Practical Prototyping",
    // ],
  },

  // Notable Projects
  projects: [
    {
      title: "Autonomous Quadcopter for GNSS-denied Underground Mine Mapping",
      description:
        // "Designed and developed a quadcopter for autonomous mapping and exploration in GNSS-denied underground mine environments. Developed complete UAV autonomy stack combining embedded hardware, flight-control software, ROS 2 development, visual-inertial odometry and SLAM components.",
        "Designed and developed a quadcopter and complete onboard autonomy stack for exploration and 3D mapping in GNSS-denied underground mining environments. Integrated embedded hardware and PX4 flight control with Python, C++ and ROS 2 software for visual-inertial odometry, SLAM, 3D occupancy mapping, frontier exploration and motion planning.",
      role: "Master's Research Project -- Stellenbosch University",
      technologies: [
        // "ROS 2",
        // "SLAM",
        // "Visual-Inertial Odometry",
        // "Autonomous Navigation",
        // "Embedded Systems",
        "Python",
        "C++",
        "ROS 2",
        "PX4",
        "SLAM",
        "Visual-Inertial Odometry",
        "3D Mapping",
        "Motion Planning",
        "Gazebo",
        "Embedded Linux",
      ],
      results:
        // "Presented research paper at RobMech 2025 and published the work in MATEC Web of Conferences. Successfully demonstrated autonomous exploration in both simulated and real-world indoor environments.",
        // "Achieved 97.1% mapping coverage during autonomous exploration in simulation and 96.1% during real world testing. Presented the research at RobMech 2025 and published the paper in MATEC Web of Conferences.",
        "Achieved 97.1% mapping coverage during autonomous exploration in simulation and 96.1% during real-world testing. Presented the research at RobMech 2025 and published the paper in MATEC Web of Conferences.",
      publication: "https://doi.org/10.1051/matecconf/202541704019",
      image: "underground_quadcopter.jpg",
      featured: true,
    },
    {
      title: "Handheld 3D Laser Line Scanner",
      description:
        // "Designed, constructed and evaluated a handheld 3D laser-line scanner for surface profiling and 3D reconstruction applications.",
        "Designed, built and evaluated a handheld 3D laser-line scanner for surface profiling and 3D reconstruction. Developed a Python/OpenCV pipeline using stereo vision, camera calibration, laser-line detection, triangulation and point-cloud registration to reconstruct objects from multiple scans.",
      tags: [
        "3D Scanning",
        "Python",
        "OpenCV",
        "Stereo Vision",
        "3D Reconstruction",
        "Mechatronics",
      ],
      image: "laser_scanner.jpg",
    },
    {
      title: "Large-Scale ISR Quadcopter Platform Development",
      description:
        // 'Worked on the development, configuration, integration and testing of 18", 22" and 30" ISR quadcopter platforms, including flight-control tuning, test piloting and system analysis',
        'Worked on the architecture, development, configuration, integration and validation of 18", 22" and 30" ISR quadcopter platforms through to commercial deployment. My work included subsystem and sensor integration, flight-control tuning, test piloting, flight-log analysis and troubleshooting.',
      tags: [
        "UAV Systems",
        "System Architecture",
        "Subsystem Integration",
        "Flight-Control Tuning",
        "Test Piloting",
      ],
      image: "Drones.jpg",
    },
    {
      title: "Machine-Learning Pothole Detection and Size Estimation",
      description:
        // "Developed a machine-learning-based pothole detection system that used image data and a reference measuring stick to estimate pothole size and repair-material requirements.",
        "Curated and labelled image data, then trained and evaluated a PyTorch/YOLO object detector to identify potholes. Developed geometric image-processing software in Python using a reference measuring stick to estimate pothole dimensions and repair-material volume.",
      tags: [
        "Machine Learning",
        "Python",
        "PyTorch",
        "YOLO",
        "Computer Vision",
        "Object Detection",
        "Image Processing",
      ],
      image: "Pothole.jpg",
    },
    {
      title: "STM Microcontroller Light Source",
      description:
        // "Designed and implemented a multi-functional light source using an STM microcontroller.",
        "Designed and developed an STM32-based embedded system with multiple controllable lighting functions. The project included voltage regulation, LED driver circuits, ADC/DAC, PWM control and UART/I²C interfaces, as well as firmware development in C and hardware validation.",
      tags: [
        "Electronics",
        "STM32",
        "Embedded Systems",
        "C",
        "Circuit Design",
        "PWM",
        "UART",
        "I²C",
      ],
      image: "light_source.jpg",
    },
    {
      title: "Automated Insect Tracker",
      description:
        // "Developed an OpenMV-based computer-vision system for tracking insect movement over extended periods to evaluate the effects of repellents and attractants.",
        "Developed an OpenMV-based computer-vision system in Python to detect and track insect movement over extended periods, supporting the evaluation of repellents and attractants. Used frame differencing and feature tracking to analyse movement.",
      tags: [
        "Python",
        "OpenMV",
        "Computer Vision",
        "Image Processing",
        "Object Tracking",
        "Embedded Systems",
      ],
      image: "",
      video: "InsectTracking.mp4",
    },
    {
      title: "Automatic Coin Sorter",
      description:
        // "Designed and constructed an automatic coin sorting mechanism.",
        // "Designed and built an automated coin-sorting system using a Siemens S7-1200 PLC and TIA Portal. Integrated stepper motors, proximity sensors and an InTouch HMI, with PID motor control as part of the system.",
        "Designed and built an automated coin-sorting system using a Siemens S7-1200 PLC, TIA Portal, PID motor control, stepper motors, proximity sensing and an InTouch HMI.",
      tags: [
        "Mechatronics",
        "Siemens S7-1200",
        "TIA Portal",
        "PLC Programming",
        "InTouch HMI",
        "Motor Control",
        "Sensors",
        "Automation",
      ],
      image: "coin_sorter.jpg",
    },
    {
      title: "DC Motor Position Control",
      description:
        "Modelled and identified a DC motor system, then designed and evaluated P, PI, PID and lead compensator controllers. Implemented and tested controllers on a Siemens S7-1200 PLC, comparing measured responses with mathematical models and MATLAB/Simulink simulations.",
      tags: [
        "Control Systems",
        "System Identification",
        "MATLAB",
        "Simulink",
        "Siemens S7-1200",
        "TIA Portal",
        "Ladder Logic",
        "SCL",
      ],
      image: "DCMotor.png",
    },
    {
      title: "PLC-Controlled Pneumatic Ball Labyrinth",
      description:
        "Programmed a state-based control system to guide a table-tennis ball through a pneumatic mechanism. Used a Siemens S7-1200 PLC and TIA Portal to coordinate pneumatic cylinders and solenoid valves, with limit switches providing feedback on actuator positions.",
      tags: [
        "Siemens S7-1200",
        "TIA Portal",
        "PLC Programming",
        "Ladder Logic",
        "State-Based Control",
        "Pneumatics",
        "Sensors and Actuators",
      ],
      image: "Pneu.png",
    },
    {
      title: "Caterpillar Belly Plate and Shield Assemblies",
      description:
        "Led the end-to-end design and development of steel belly-plate and shield assemblies for a CAT 962H wheel loader, from CAD design and fabrication drawings through to cutting, welding, fitting and installation.",
      tags: [
        "CAD Design",
        "Fabrication Drawings",
        "Steel Fabrication",
        "Mechanical Design",
        "Manufacturing",
      ],
      image: "Cat.jpg",
    },
    {
      title: "Industrial Thickener Mechanism",
      description:
        "Designed an internal thickener mechanism for an industrial slurry-settling tank, including drive-system sizing, torque analysis and motor specification.",
      tags: [
        "Machine Design",
        "Mechanical Design",
        "Drive-System Sizing",
        "Torque Analysis",
        "Industrial Equipment",
      ],
      image: "thickener.jpg",
    },
    {
      title: "Water Pump Design",
      description:
        // "Design and part selection for a complete water pump, including manufacturing drawings.",
        "Designed a complete water pump, selected its components and prepared manufacturing drawings.",
      tags: [
        "Machine Design",
        "Mechanical Design",
        "Component Selection",
        "Manufacturing Drawings",
      ],
      image: "water_pump.jpg",
    },
  ],

  // Hobby Projects (smaller side projects outside of engineering work)
  hobbyProjects: [
    {
      title: "Beekeeping & Beehive Construction (SteBees)",
      description:
        "Founded SteBees, a small beekeeping venture, building beehives, managing colonies, and selling raw honey. Pitched the venture at the 2022 Allan Gray Orbis Foundation Jamboree, winning 2nd place and securing a funding grant.",
      tags: ["Beekeeping", "Woodworking", "Entrepreneurship"],
      image: "Bee1.jpg",
      imageZoom: 1,
    },
    {
      title: "Automated Aeroponics System",
      description:
        "Designed and built an automated aeroponics system for soil-free plant cultivation, using controlled nutrient-watering cycles for efficient plant growth.",
      tags: ["Automation", "Electronics", "Horticulture"],
      image: "Aeroponics1.jpg",
      imageZoom: 1,
    },
  ],

  // Publications
  otherRoles: [
    { title: "Private Tutor – Applied Mathematics", year: "2022" },
    { title: "University Tutor – Electro-Techniques", year: "2024–2025" },
    {
      title: "University Teaching Assistant – Computer Programming",
      year: "2024",
    },
  ],

  publications: [
    {
      year: "2025",
      title:
        "Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration",
      journal: "MATEC Web of Conferences, vol. 417, article 04019",
      authors: "N. Epler and C. Fisher",
      doi: "10.1051/matecconf/202541704019",
    },
  ],

  // Selected Achievements (excluding minor school leadership roles)
  achievements: [
    {
      year: "2020-2023",
      title: "Allan Gray Orbis Foundation Candidate Fellow",
      description:
        "Selected fellowship recipient - 2nd place in the 2022 Jamboree Venture Pitch competition",
    },
    {
      year: "2020-2026",
      title: "Six-Time Cape Town Cycle Tour Finisher",
      description: "109 km cycling event",
    },
    {
      year: "2022",
      title: "Winner -- SAICE Stellenbosch Bridge Building Competition",
      description: "Engineering competition achievement",
    },
    {
      year: "2016-2019",
      title: "Namibian National Inline Hockey Team",
      description: "Assistant Captain 2018, 2019",
    },
  ],
};
