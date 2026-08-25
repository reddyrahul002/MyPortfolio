export const personal = {
  name: "Rahul Reddy Yerram",
  initials: "RRY",
  title: "Full-Stack Software Engineer & Data Scientist",
  tagline:
    "I build production-ready systems at the intersection of software engineering and data science - from cloud-native microservices to real-time ML pipelines.",
  location: "Melbourne, VIC, Australia",
  email: "yrahulreddy2000@gmail.com",
  phone: "+61-0452432814",
  linkedin: "https://www.linkedin.com/in/rahul-reddy-yerram-850681338",
  github: "https://github.com/reddyrahul002",
  resumeUrl: "/Rahul_Reddy_Yerram_Resume.pdf",
  photo: "/images/profile.png",
  summary:
    "Master's student in Data Science at Monash University and a Mechanical Engineering graduate from BMS College of Engineering, Bangalore. I build intelligent systems that turn complex problems into production-ready solutions - from full-stack microservices on GCP to real-time computer vision and predictive modelling. 3+ years across Dassault Systèmes, ADPMN, and Monash Connected Autonomous Vehicles. Winner, People's Choice Award - Dassault Systèmes global IDEATHON 2023.",
} as const;

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "", label: "Major Projects" },
  { value: 4, suffix: "", label: "Companies & Teams" },
  { value: 1, suffix: "", label: "Global Award Win" },
] as const;

export type SkillCategory = {
  category: string;
  skills: string[];
};

// Placeholder pulled from resume - will be refined with the user's curated skills list.
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "R"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Cloud",
    skills: [
      "Java Spring Boot",
      "GCP (Cloud Run, Pub/Sub, Cloud Spanner)",
      "Docker",
      "CI/CD",
      "Google Cloud Build",
    ],
  },
  {
    category: "Data & ML",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Apache Kafka",
      "PySpark",
    ],
  },
  {
    category: "Data Visualisation",
    skills: ["Tableau", "D3.js", "Power BI", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Linux CLI", "Jira", "PostgreSQL", "MySQL", "ROS2"],
  },
];

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "adpmn",
    role: "Software Developer",
    company: "ADPMN",
    companyLogo: "/images/adpmn.jpg",
    location: "Melbourne, VIC",
    period: "Sep 2025 – Feb 2026",
    summary:
      "Full-stack work spanning React frontends, Java Spring Boot microservices, and cloud-native infrastructure on GCP for a production e-commerce platform.",
    bullets: [
      "Delivered a fully responsive E-Commerce Platform frontend using React.js, HTML, CSS, and JavaScript, deployed on GCP Cloud Run with Cloud CDN - supporting dynamic product browsing, search, and cart management.",
      "Reduced order processing time by 30% by architecting an Order Management Microservice using Java Spring Boot and GCP Pub/Sub with asynchronous event-driven messaging.",
      "Accelerated release cycles by 40% by designing end-to-end CI/CD pipelines on Google Cloud Build across isolated dev, QA, and production environments with automated triggers.",
      "Strengthened platform security and scalability by deploying serverless microservices on GCP Cloud Run with Google Secret Manager, Cloud Spanner, Storage Buckets, and Artifact Registry.",
      "Designed relational data models in Cloud Spanner with DDL schemas for table structures, indexes, and constraints, and wrote complex SQL for high-volume transactional retrieval.",
      "Maintained data consistency across dev/QA/production by managing schema migrations and DDL lifecycle changes within the Spring Boot application.",
    ],
    tags: ["React", "Java Spring Boot", "GCP", "Cloud Spanner", "CI/CD", "Microservices"],
  },
  {
    id: "mcav",
    role: "Software Engineer",
    company: "MCAV (Monash Connected Autonomous Vehicles)",
    companyLogo: "/images/mcav-icon.jpeg",
    location: "Melbourne, VIC",
    period: "Mar 2025 – Jan 2026",
    summary:
      "Built real-time perception and navigation systems for an autonomous vehicle competing at the Intelligent Ground Vehicle Competition (IGVC), Michigan.",
    bullets: [
      "Engineered a real-time lane detection pipeline integrating a ZED2i stereo camera with ROS2, OpenCV, and Inverse Perspective Mapping (IPM) for robust lane identification across varied road conditions.",
      "Improved lane boundary detection stability by 20% via a Sliding Window algorithm with HSV colour thresholding, centroid tracking, IMU-based pitch correction, and depth masking for inclined terrain.",
      "Contributed to the SLAM pipeline using ROS2 SLAM Toolbox and Velodyne VLP-16 LiDAR, fusing camera and LiDAR bird's-eye-view outputs into a unified costmap for Nav2 path planning.",
      "Cut physical hardware testing time by 30% by building a full robot simulation in Gazebo and RViz2 on Ubuntu 22.04, replicating the vehicle's complete sensor suite and navigation stack.",
      "Transformed raw 3D LiDAR point clouds into structured 2D obstacle maps using PCL spatial filtering (noise elimination, height thresholding), improving costmap accuracy.",
      "Designed a statistical lane boundary tracking model using histogram analysis and centroid-based tracking (cv2.moments) across consecutive frames for adaptive real-time detection.",
    ],
    tags: ["ROS2", "OpenCV", "LiDAR", "SLAM", "Gazebo", "Computer Vision", "Python"],
  },
  {
    id: "dassault",
    role: "Software Development Engineer I",
    company: "Dassault Systèmes",
    companyLogo: "/images/dassault-icon.jpeg",
    location: "Bangalore, India",
    period: "Jul 2022 – Jun 2024",
    summary:
      "Led frontend development of xMedia, a digital asset management platform on 3DEXPERIENCE, and shipped the first AI integration in the product brand.",
    bullets: [
      "Led frontend development of xMedia using HTML, CSS, TypeScript, and JavaScript under Agile, ensuring high-quality design, responsiveness, and cross-browser compatibility.",
      "Developed and integrated Java REST APIs with TypeScript/JavaScript frontend components to deliver upload progress tracking, a 3D model viewer, and asset annotations across formats (GLB, 3D models, part/assembly files, video, images).",
      "Independently delivered Native Language Support (NLS) for the entire xMedia application, expanding global accessibility for international users.",
      "Engineered comprehensive Jasmine unit test suites achieving 91% code coverage across all supported platforms.",
      "Won People's Choice Award at IDEATHON 2023 (Global) for a POC on Auto Tag Suggestions using TensorFlow.js, the COCO dataset, and CNNs - the first AI integration in the product brand, achieving 92% tagging accuracy.",
      "As an intern, resolved 1,780+ bugs while maintaining zero critical defects in production, and built a from-scratch JavaScript metadata extraction tool for PNG/JPEG/MP4 files.",
    ],
    tags: ["TypeScript", "Java REST APIs", "TensorFlow.js", "Agile", "Jasmine", "3DEXPERIENCE"],
  },
  {
    id: "toyota",
    role: "Machine Learning Engineer",
    company: "Toyota Kirloskar Motor Pvt. Ltd.",
    companyLogo: "/images/toyota-kirloskar.jpeg",
    location: "Bangalore, India",
    period: "Apr 2022 – Jul 2022",
    summary:
      "Applied machine learning, computer vision, and NLP to quality-assurance processes across manufacturing and after-sales divisions.",
    bullets: [
      "Improved fuel injector QA inspection accuracy by 20% with a CNN-based image classification model to automatically classify injector clogging ranks.",
      "Reduced manual QA effort by 40% by automating extraction of DTC, VIN, and ECU data from Field Technical Reports using Python and Selenium.",
      "Built a Power BI analytics dashboard from web-scraped customer data incorporating time-series analysis, NLP-based sentiment analysis, and customer segmentation.",
      "Improved QA response efficiency by 30% via NLP sentiment analysis on customer reviews to prioritise dissatisfied-customer complaints.",
      "Boosted team productivity by 35% by replacing manual data entry and Excel reporting with automated Python data pipelines.",
      "Upskilled 15+ company staff through structured training sessions on Python programming and problem-solving.",
    ],
    tags: ["Python", "CNN", "Selenium", "Power BI", "NLP", "Deep Learning"],
  },
];

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  logo: string;
  location: string;
  period: string;
  electives: string[];
};

export const education: EducationEntry[] = [
  {
    id: "monash",
    degree: "Master of Science in Data Science",
    institution: "Monash University",
    logo: "/images/monash-university.jpeg",
    location: "Melbourne, VIC",
    period: "Jul 2024 – Jul 2026",
    electives: ["Data Wrangling", "Data Visualization", "Database Systems", "Big Data Processing"],
  },
  {
    id: "bms",
    degree: "Bachelor of Engineering - Mechanical Engineering",
    institution: "B.M.S College of Engineering",
    logo: "/images/bms-college.jpeg",
    location: "Bangalore, India",
    period: "Jul 2018 – Aug 2022",
    electives: ["Machine Learning", "Artificial Intelligence", "Python Programming", "Mechanical Data Science"],
  },
];

export type ProjectEntry = {
  id: string;
  title: string;
  category: "Full-Stack / Systems" | "Data Science / ML";
  stack: string[];
  description: string;
  highlights: string[];
  image: string;
};

export const projects: ProjectEntry[] = [
  {
    id: "energy-streaming",
    image: "/images/projects/energy-streaming.svg",
    title: "Real-Time Weather & Energy Prediction Streaming Pipeline",
    category: "Full-Stack / Systems",
    stack: ["Apache Kafka", "PySpark", "Spark Structured Streaming", "Python", "Docker", "Matplotlib"],
    description:
      "End-to-end real-time IoT data streaming pipeline enabling live energy consumption predictions across 16 building sites.",
    highlights: [
      "Kafka producer publishing 120 weather sensor records/batch at 5-second intervals into a PySpark Structured Streaming consumer with a 5-second watermark for late data handling.",
      "Real-time dual dashboard rendering synchronised trend plots and 6-hour window aggregates across the top 12 buildings at a 2Hz refresh rate, fully Dockerised.",
    ],
  },
  {
    id: "wildfire-emissions",
    image: "/images/projects/wildfire-emissions.svg",
    title: "Global Wildfire Emissions & Burned Area Analysis (2010–2023)",
    category: "Data Science / ML",
    stack: ["R", "Python", "D3.js", "ggplot2", "sf", "Geospatial Analysis"],
    description:
      "Unified 4 heterogeneous datasets (1.5M+ records, 120.5M GlobFire fire perimeters) to surface global wildfire hotspots and emissions patterns.",
    highlights: [
      "Identified the top 10 global wildfire hotspots and CO₂/CH₄/NOₓ emissions-area divergence patterns via IQR-based anomaly detection and geospatial processing.",
      "Built an interactive D3.js + ggplot2 scrollytelling visualisation combining geospatial maps, streamgraphs, and heatmaps across 13 years of data using the Five Design Sheet (FDS) methodology.",
    ],
  },
  {
    id: "glycemic-lstm",
    image: "/images/projects/glycemic-lstm.svg",
    title: "Proactive Glycemic Event Forecasting using Multimodal LSTM Networks",
    category: "Data Science / ML",
    stack: ["TensorFlow", "Keras", "LSTM", "ARIMA", "Random Forest", "PostgreSQL"],
    description:
      "Multimodal stacked LSTM architecture forecasting glucose events from CGM, insulin, and carbohydrate data - outperforming statistical baselines.",
    highlights: [
      "Outperformed ARIMA and Random Forest baselines (90%+ variance explained), achieving a forecasting RMSE of ~5 mg/dL on the OhioT1DM dataset.",
      "Followed CRISP-DM with HIPAA Safe Harbor de-identification, AES-256 encryption, and TLS 1.2+ within a VPC-secured PostgreSQL cluster for safe clinical deployment.",
    ],
  },
  {
    id: "cancer-proteomics",
    image: "/images/projects/cancer-proteomics.svg",
    title: "Cancer Proteomics Analysis - CPTAC Colorectal Dataset",
    category: "Data Science / ML",
    stack: ["Python", "Pandas", "SciPy", "Seaborn", "ShinyGO"],
    description:
      "Multi-omics differential expression analysis across a 10,294-protein TMT mass spectrometry dataset to strengthen colorectal cancer biomarker confidence.",
    highlights: [
      "Identified 1,612 significantly differentially expressed proteins (90.9% upregulated) using MNAR imputation and Benjamini-Hochberg FDR correction (FDR ≤ 0.01).",
      "Integrated RNA-seq data (635 DE transcripts) with proteomics results, identifying 346 concordant genes including FHL1, DCN, and MMP family members via GO enrichment in ShinyGO.",
    ],
  },
  {
    id: "flickr-eda",
    image: "/images/projects/flickr-eda.svg",
    title: "Exploratory Data Analysis - Flickr Photo Metadata",
    category: "Data Science / ML",
    stack: ["Python", "Pandas", "SARIMA", "SciPy", "Regex"],
    description:
      "Statistical behavioural analysis across 65,000+ multi-format JSON/XML photo records to surface platform-actionable insights.",
    highlights: [
      "Validated seasonal and cohort patterns via Mann-Whitney U, ANOVA (F=22.83, p<0.001), and Kruskal-Wallis (H=112.6, p<0.001) tests.",
      "Surfaced 15 platform-actionable EDA findings - including Pareto-distributed contributions (top 20 users = 27.6% of posts) - translated into 5 ML research questions.",
    ],
  },
  {
    id: "victorian-events",
    image: "/images/projects/victorian-events.svg",
    title: "Data Visualisation - Victorian Events Dataset",
    category: "Data Science / ML",
    stack: ["Tableau", "Calculated Fields", "Geographic Filters"],
    description:
      "Interactive Tableau dashboards revealing 25 years of Victorian cultural event trends after resolving critical geographic data-quality issues.",
    highlights: [
      "Resolved invalid geographic records and whitespace-induced suburb duplication using custom geographic bound filters and calculated field standardisation.",
      "Delivered 5 interactive dashboards identifying a peak of 1,494 events in 2007, a post-COVID decline to 8 events in 2025, and La Mama VIC as the most active organisation (1,101 events).",
    ],
  },
];

export const achievements = [
  {
    title: "People's Choice Award - IDEATHON 2023 (Global)",
    detail: "Dassault Systèmes - first AI integration in xMedia using TensorFlow.js",
  },
  {
    title: "First Prize - Scytale, 24hr Cryptic Hunt",
    detail: "",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
