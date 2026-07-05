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
        about: "Electronic engineer (M.Eng Electronic cum laude, B.Eng Mechatronic) specialising in UAV systems and autonomous robotics. Currently working as a UAS Engineer at Flying Robot (Pty) Ltd, focusing on system architecture, integration and flight validation for large-scale ISR quadcopter platforms. Core expertise spans robotic hardware and software development, autonomous systems development, ROS 2/SLAM-based autonomy, computer vision and sensor integration, complemented by embedded hardware design and PCB development.",
        languages: [
            { name: "German", level: "Native" },
            { name: "English", level: "Fluent" },
            { name: "Afrikaans", level: "Fluent" }
        ]
    },

    // Education Timeline
    education: [
        {
            year: "2024-2025",
            title: "M.Eng (Electronic)",
            institution: "Stellenbosch University",
            description: "Master of Engineering in Electronic Engineering (cum laude) - Golden Key International Honour Society"
        },
        {
            year: "2020-2023",
            title: "B.Eng (Mechatronic)",
            institution: "Stellenbosch University",
            description: "Bachelor of Engineering in Mechatronics - Golden Key International Honour Society"
        },
        {
            year: "2015-2019",
            title: "High School",
            institution: "Otjiwarongo Secondary School",
            description: "National top-8 academic performer in Namibia (Grade 12), School Representative Council Head Boy, Dux Scholar"
        },
        {
            year: "2008-2014",
            title: "Primary & Secondary School",
            institution: "Deutsche Privatschule Otjiwarongo",
            description: "German Private School Otjiwarongo"
        }
    ],

    // Work Experience Timeline
    experience: [
        {
            year: "Oct 2025 -- Present",
            title: "Unmanned Aerial Systems Engineer",
            company: "Flying Robot (Pty) Ltd, South Africa",
            description: "Designed UAV system architecture and carried out platform development, configuration, subsystem integration and validation for large-scale ISR quadcopter platforms. Performed flight-control tuning, UAV test piloting and system analysis. Designed electronic circuits and custom PCBs for embedded sensors. Worked with communication interfaces including serial, I²C, CAN, networking and wireless links."
        },
        {
            year: "2024 -- 2025",
            title: "Graduate Research Engineer -- Master's Thesis",
            company: "Stellenbosch University, South Africa",
            description: "Designed and developed a UAV platform for autonomous underground mine mapping and exploration (GNSS-denied). Designed, configured and validated a complete UAV autonomy stack combining embedded hardware, flight-control software, ROS 2 development, visual-inertial odometry and SLAM components. Developed an end-to-end autonomous exploration framework for underground environments."
        },
        {
            year: "Jan 2024 -- Dec 2025",
            title: "UAV Systems and Product Consultant",
            company: "Phantom Pilots, South Africa",
            description: "Assisted with quadcopter component selection, system integration and testing for early-stage UAV product development. Consulted on and developed mechatronic side projects, providing practical design input and component-selection support."
        },
        {
            year: "2022 + 2023",
            title: "Engineering Design and Drafting Intern",
            company: "Metallum Fabrications, Namibia",
            description: "Held responsibility for the end-to-end development of steel assemblies, from CAD design and fabrication drawings through to cutting, welding, fitting and installation. Gained hands-on exposure to workshop practices, manufacturing drawings, practical fabrication constraints and tolerancing."
        },
        {
            year: "2024 -- 2025",
            title: "University Tutor",
            company: "Stellenbosch University",
            description: "Tutor for Electro-Techniques"
        },
        {
            year: "2024",
            title: "University Teaching Assistant",
            company: "Stellenbosch University",
            description: "Teaching Assistant for Computer Programming"
        },
        {
            year: "2022",
            title: "Private Tutor",
            company: "Self-employed",
            description: "Tutor for Applied Mathematics"
        }
    ],

    // Skills
    skills: {
        software: [
            "C Programming",
            "R Programming",
            "Python Programming",
            "PLC Programming",
            "MATLAB",
            "ROS 2",
            "Computer Vision and Image Processing",
            "Machine Learning and Reinforcement Learning Fundamentals",
            "EasyEDA",
            "Autodesk Inventor",
            "Autodesk Fusion",
            "Onshape",
            "Microsoft Office: PowerPoint, Word and Excel"
        ],
        technical: [
            "Robotics, Autonomy and Perception",
            "UAV Systems Engineering",
            "System Integration and Validation",
            "Embedded and Electronic Systems",
            "Mechanical Design and Prototyping",
            "CAD Modelling",
            "Design-for-Manufacturing",
            "Additive Manufacturing",
            "Fabrication Drawings",
            "Practical Prototyping"
        ],
        soft: [
            "Strong work ethic",
            "Honest and reliable",
            "Organised, punctual and responsible",
            "Team-oriented",
            "Innovative",
            "Eager to learn"
        ]
    },

    // Notable Projects
    projects: [
        {
            title: "Autonomous Underground Mine Mapping Quadcopter",
            description: "Designed and developed a quadcopter for autonomous mapping and exploration in GNSS-denied underground mine environments (M.Eng Electronic).",
            tags: ["ROS2", "Autonomous Systems", "Quadcopter", "Mining"],
            image: "underground_quadcopter.svg"
        },
        {
            title: "Handheld 3D Laser Line Scanner",
            description: "Designed, constructed and evaluated a handheld 3D laser-line scanner (final-year B.Eng project -- 81%).",
            tags: ["3D Scanning", "Electronics", "Mechatronics"],
            image: "laser_scanner.svg"
        },
        {
            title: "Multi-functional Light Source",
            description: "Designed and implemented a multi-functional light source using an STM microcontroller (Electronic Design).",
            tags: ["Electronics", "Microcontrollers", "STM"],
            image: "light_source.svg"
        },
        {
            title: "Automatic Coin Sorter",
            description: "Designed and constructed an automatic coin sorter (Mechatronics; Group).",
            tags: ["Mechatronics", "Automation", "Manufacturing"],
            image: "coin_sorter.svg"
        },
        {
            title: "Industrial Slurry Thickener Mechanism",
            description: "Designed an internal thickener mechanism for an industrial slurry-settling tank, including drive-system sizing, torque analysis and motor specification (Machine Design; Group).",
            tags: ["Machine Design", "Industrial", "Mechanical"],
            image: "thickener.svg"
        },
        {
            title: "Mine Pump System Analysis",
            description: "Pump-system analysis and recommendation for a mine (Fluid Mechanics; Group).",
            tags: ["Fluid Mechanics", "Industrial"],
            image: "pump_system.svg"
        },
        {
            title: "Water Pump Design",
            description: "Design and part selection for a complete water pump, including manufacturing drawings (Machine Design).",
            tags: ["Machine Design", "Mechanical"],
            image: "water_pump.svg"
        }
    ],

    // Publications
    publications: [
        {
            year: "2025",
            title: "Autonomous Quadcopter for Rapid Underground Mine Mapping and Exploration",
            journal: "MATEC Web of Conferences, vol. 417, article 04019",
            authors: "N. Epler and C. Fisher",
            doi: "10.1051/matecconf/202541704019"
        }
    ],

    // Achievements & Leadership
    achievements: [
        {
            year: "2016-2019",
            title: "Namibian National Inline Hockey Team",
            description: "Assistant Captain 2018, 2019"
        },
        {
            year: "2016-2018",
            title: "Interactors Board Member",
            description: "President 2018"
        },
        {
            year: "2016-2017",
            title: "Otjiwarongo Junior Town Council -- Treasurer",
            description: "Youth leadership and financial management role"
        },
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
            year: "2022",
            title: "Private Tutor -- Applied Mathematics",
            description: "Academic tutoring"
        },
        {
            year: "2024-2025",
            title: "University Tutor -- Electro-Techniques",
            description: "Academic tutoring at university level"
        },
        {
            year: "2024",
            title: "University Teaching Assistant -- Computer Programming",
            description: "Teaching assistant role"
        }
    ]
};
