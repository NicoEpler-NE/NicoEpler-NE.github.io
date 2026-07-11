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
        linkedin: "https://www.linkedin.com/in/nico-epler-8089a5223/",
        intro: "I am an electronic engineer specialising in Unmanned Aerial Vehicle (UAV) systems and autonomous robotics. I hold a Master's degree in Electronic Engineering (cum laude) and a Bachelor's in Mechatronic Engineering from Stellenbosch University.\n\nCurrently working as an Unmanned Aerial Systems (UAS) Engineer at Flying Robot (Pty) Ltd, I work on the development, integration and testing of UAV platforms, with a focus on large-scale quadcopter systems. My role spans system architecture design, platform construction and configuration, flight-control tuning, test piloting, and payload and sensor integration. This covers the full development cycle from electronic and sensor design through to flight testing, troubleshooting and system optimisation, helping ensure that UAV platforms are reliable and ready for real-world operation.\n\nMy broader expertise includes robotic hardware and software development, autonomous systems development, computer vision, sensor integration, embedded hardware design and Printed Circuit Board (PCB) development. For my Master's thesis, I designed and developed a quadcopter for autonomous mapping and exploration in Global Navigation Satellite System (GNSS)-denied underground mine environments, with part of this work subsequently published in MATEC Web of Conferences. My previous experience also includes mechatronic consulting, mechanical design and fabrication.",

        focusAreas: [
            "UAV Systems",
            "Autonomous Robotics",
            "Computer Vision/Image Processing",
            "Embedded Electronics/PCB Design",
            "Mechanical Design/Prototyping",
            "Machine Learning"
        ],
        currentRole: {
            title: "Unmanned Aerial Systems Engineer",
            company: "Flying Robot (Pty) Ltd",
            location: "South Africa",
            period: "Oct 2025 -- Present"
        },
        languages: [
            { name: "German", level: "Native" },
            { name: "English", level: "Fluent" },
            { name: "Afrikaans", level: "Fluent" }
        ],
        interests: [
            "Hiking",
            "Cycling",
            "Jogging",
            "Travelling",
            "Exploring the outdoors"
        ]
    },

    // Education Timeline
    education: [
        {
            year: "2024-2025",
            title: "Master of Engineering (Electronic)",
            institution: "Stellenbosch University",
            description: "Master of Engineering in Electronic Engineering (cum laude)"
        },
        {
            year: "2020-2023",
            title: "Bachelor of Engineering (Mechatronic)",
            institution: "Stellenbosch University",
            description: "Bachelor of Engineering in Mechatronics - Golden Key International Honour Society"
        }
    ],

    // Work Experience Timeline
    experience: [
        {
            year: "Oct 2025 -- Present",
            title: "Unmanned Aerial Systems Engineer",
            company: "Flying Robot (Pty) Ltd",
            location: "South Africa",
            description: [
                "Designed UAV system architecture and carried out platform development, configuration, subsystem integration and validation for large-scale Intelligence, Surveillance, and Reconnaissance (ISR) quadcopter platforms",
                "Performed flight-control tuning, UAV test piloting and system analysis",
                "Designed electronic circuits and custom PCBs for embedded sensors",
                "Worked with communication interfaces including serial, Inter-Integrated Circuit (I²C), Controller Area Network (CAN), networking and wireless links"
            ],
            technologies: ["UAV Systems", "PCB Design", "Flight Control", "System Integration"],
            image: "UASE.jpg"
        },
        {
            year: "2024 -- 2025",
            title: "Graduate Research Engineer -- Master's Thesis",
            company: "Stellenbosch University",
            location: "South Africa",
            description: [
                "Designed and developed a UAV platform for autonomous underground mine mapping and exploration (GNSS-denied)",
                "Designed, configured and validated a complete UAV autonomy stack combining embedded hardware, flight-control software, Robot Operating System 2 (ROS 2) development, visual-inertial odometry and Simultaneous Localisation and Mapping (SLAM) components",
                "Developed an end-to-end autonomous exploration framework for underground environments",
                "Presented the paper \"Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration\" at RobMech 2025, subsequently published in MATEC Web of Conferences"
            ],
            technologies: ["ROS 2", "SLAM", "Autonomous Systems", "Computer Vision"],
            image: "GRE.jpg"
        },
        {
            year: "Jan 2024 -- Dec 2025",
            title: "UAV Systems and Product Consultant (Part-time)",
            company: "Phantom Pilots",
            location: "South Africa",
            description: [
                "Assisted with quadcopter component selection, system integration and testing for early-stage UAV product development",
                "Consulted on and developed mechatronic side projects, providing practical design input and component-selection support"
            ],
            technologies: ["UAV Systems", "Mechatronics", "Product Development"],
            image: "UAVSPC.jpg"
        },
        {
            year: "2022 + 2023",
            title: "Engineering Design and Drafting Intern",
            company: "Metallum Fabrications",
            location: "Namibia",
            description: [
                "Held responsibility for the end-to-end development of steel assemblies, from CAD design and fabrication drawings through to cutting, welding, fitting and installation",
                "Gained hands-on exposure to workshop practices, manufacturing drawings, practical fabrication constraints and tolerancing"
            ],
            technologies: ["CAD", "Fabrication", "Mechanical Design"],
            image: "EDD.jpg"
        }
    ],

    // Skills grouped by category
    skills: {
        "Programming & Software": [
            "C Programming",
            "Python Programming",
            "R Programming",
            "PLC Programming",
            "MATLAB",
            "ROS 2",
            "Computer Vision & Image Processing",
            "Machine Learning"
        ],
        "Embedded & Electronics": [
            "Embedded Systems",
            "PCB Design",
            "Sensor Integration",
            "Communication Interfaces (I²C, CAN, Serial)",
            "Circuit Design",
            "networking and wireless communication links"
        ],
        "UAV & Robotics": [
            "UAV Systems Engineering",
            "Autonomous Navigation",
            "Autonomous Exploration",
            "SLAM",
            "Visual-Inertial Odometry",
            "Flight Control Tuning"
        ],
        "Mechanical Design": [
            "CAD Modelling (Inventor, Fusion, Onshape)",
            "Design-for-Manufacturing",
            "Additive Manufacturing",
            "Laser & Plasma Cutting",
            "Fabrication Drawings",
            "Practical Prototyping"
        ]
    },

    // Notable Projects
    projects: [
        {
            title: "Autonomous Quadcopter for GNSS-denied Underground Mine Mapping",
            description: "Designed and developed a quadcopter for autonomous mapping and exploration in GNSS-denied underground mine environments. Developed complete UAV autonomy stack combining embedded hardware, flight-control software, ROS 2 development, visual-inertial odometry and SLAM components.",
            role: "Lead Developer - M.Eng Thesis Project",
            technologies: ["ROS 2", "SLAM", "Visual-Inertial Odometry", "Autonomous Navigation", "Embedded Systems"],
            results: "Presented research paper at RobMech 2025 and published the work in MATEC Web of Conferences. Successfully demonstrated autonomous exploration in both simulated and real-world indoor environments.",
            publication: "https://doi.org/10.1051/matecconf/202541704019",
            image: "underground_quadcopter.jpg",
            featured: true
        },
        {
            title: "Handheld 3D Laser Line Scanner",
            description: "Designed, constructed and evaluated a handheld 3D laser-line scanner for surface profiling and 3D reconstruction applications.",
            tags: ["3D Scanning", "Electronics", "Mechatronics"],
            image: "laser_scanner.jpg"
        },
        {
            title: "Large-Scale ISR Quadcopter Platform Development",
            description: "Worked on the development, configuration, integration and testing of 18\", 22\" and 30\" ISR quadcopter platforms, including flight-control tuning, test piloting and system analysis",
            tags: ["UAV Systems", "Flight-Control Tuning", "Subsystem Integration", "Test Piloting"],
            image: "Drones.jpg"
        },
        {
            title: "Machine-Learning Pothole Detection and Size Estimation",
            description: "Developed a machine-learning-based pothole detection system that used image data and a reference measuring stick to estimate pothole size and repair-material requirements.",
            tags: ["Machine Learning", "Computer Vision", "Object Detection", "Image Processing"],
            image: "Pothole.jpg"
        },
        {
            title: "STM Microcontroller Light Source",
            description: "Designed and implemented a multi-functional light source using an STM microcontroller.",
            tags: ["Electronics", "Microcontrollers", "STM"],
            image: "light_source.jpg"
        },
        {
            title: "Automated Insect Tracker",
            description: "Developed an OpenMV-based computer-vision system for tracking insect movement over extended periods to evaluate the effects of repellents and attractants.",
            tags: ["Computer Vision", "Image Processing", "OpenMV", "Embedded Systems"],
            image: "",
            video: "InsectTracking.mp4"
        },
        {
            title: "Automatic Coin Sorter",
            description: "Designed and constructed an automatic coin sorting mechanism.",
            tags: ["Mechatronics", "Automation"],
            image: "coin_sorter.jpg"
        },
        {
            title: "Caterpillar Belly Plate and Shield Assemblies",
            description: "Led the end-to-end design and development of steel belly-plate and shield assemblies for a CAT 962H wheel loader, from CAD design and fabrication drawings through to cutting, welding, fitting and installation.",
            tags: ["CAD Design", "Fabrication", "Mechanical Design", "Manufacturing"],
            image: "Cat.jpg"
        },
        {
            title: "Industrial Thickener Mechanism",
            description: "Designed an internal thickener mechanism for an industrial slurry-settling tank, including drive-system sizing, torque analysis and motor specification.",
            tags: ["Machine Design", "Industrial", "Mechanical"],
            image: "thickener.jpg"
        },
        {
            title: "Water Pump Design",
            description: "Design and part selection for a complete water pump, including manufacturing drawings.",
            tags: ["Machine Design", "Mechanical"],
            image: "water_pump.jpg"
        }
        
    ],

    // Hobby Projects (smaller side projects outside of engineering work)
    hobbyProjects: [
        {
            title: "Beekeeping & Beehive Construction (SteBees)",
            description: "Founded SteBees, a small beekeeping venture, building beehives, managing colonies, and selling raw honey. Pitched the venture at the 2022 Allan Gray Orbis Foundation Jamboree, winning 2nd place and securing a funding grant.",
            tags: ["Beekeeping", "Woodworking", "Entrepreneurship"],
            image: "Bee1.jpg",
            imageZoom: 1
        },
        {
            title: "Automated Aeroponics System",
            description: "Designed and built an automated aeroponics system for soil-free plant cultivation, using controlled nutrient-watering cycles for efficient plant growth.",
            tags: ["Automation", "Electronics", "Horticulture"],
            image: "Aeroponics1.jpg",
            imageZoom: 1
        }
    ],

    // Publications
    otherRoles: [
        { title: "Private Tutor – Applied Mathematics", year: "2022" },
        { title: "University Tutor – Electro-Techniques", year: "2024–2025" },
        { title: "University Teaching Assistant – Computer Programming", year: "2024" }
    ],

    publications: [
        {
            year: "2025",
            title: "Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration",
            journal: "MATEC Web of Conferences, vol. 417, article 04019",
            authors: "N. Epler and C. Fisher",
            doi: "10.1051/matecconf/202541704019"
        }
    ],

    // Selected Achievements (excluding minor school leadership roles)
    achievements: [
        {
            year: "2020-2023",
            title: "Allan Gray Orbis Foundation Candidate Fellow",
            description: "Selected fellowship recipient - 2nd place in the 2022 Jamboree Venture Pitch competition"
        },
        {
            year: "2020-2026",
            title: "Six-Time Cape Town Cycle Tour Finisher",
            description: "109 km cycling event"
        },
        {
            year: "2022",
            title: "Winner -- SAICE Stellenbosch Bridge Building Competition",
            description: "Engineering competition achievement"
        },
        {
            year: "2016-2019",
            title: "Namibian National Inline Hockey Team",
            description: "Assistant Captain 2018, 2019"
        }
    ]
};
