import { ProjectType } from "@/types/project";

export const projectsData: ProjectType[] = [
  {
    title: "seed.photo",
    slug: "seed-photo",
    shortDescription: `seed.photo is a Web3-based photo platform built with Next.js and JavaScript.
     It integrates blockchain technology to provide a decentralized solution for
     digital image ownership and sharing. It also includes an admin panel built
     with Next.js and Bootstrap for managing users, photos, and transactions.`,
    imageSrc: "/images/projects/seed.photo/seed.png",
    imageAlt: "seed.photo",
    videoUrl: "/images/projects/seed.photo/seed_video.mp4",
    longDescription: `
  <p><b>seed.photo</b> is a decentralized photo-sharing and NFT-based image ownership platform developed using <b>Next.js</b> and <b>JavaScript</b>.</p>
  <p>The goal of this project is to give photographers and creators full control over their visual content by leveraging <b>Web3 technology</b> and blockchain integration. Each uploaded photo can be tokenized as an <b>NFT</b>, ensuring authenticity, traceability, and proof of ownership.</p>
  <p>The platform features a clean and modern user interface built with Next.js, focusing on performance and smooth navigation. It connects to blockchain wallets (such as <b>MetaMask</b>) for secure login and photo transactions. Users can mint, showcase, and trade their photos directly on the decentralized network.</p>
  <p><b>Admin Panel:</b> The project also includes an admin dashboard built with <b>Next.js</b> and <b>Bootstrap</b> that allows administrators to manage users, approve or remove photos, and track NFT transactions efficiently.</p>
  <p>This project demonstrates advanced <b>front-end development</b>, <b>Web3 interaction</b>, and <b>blockchain integration</b> skills — ideal for showcasing in a professional developer portfolio.</p>
  <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
    <li><b>Next.js</b> for frontend rendering</li>
    <li><b>web3</b> for blockchain interaction</li>
    <li><b>Smart contract functions</b> (e.g., minting NFTs)</li>
    <li><b>Admin panel</b> built with Next.js and Bootstrap</li>
  </ul>`,
    status: "project",
    extra: { type: "web" },
    role: "Front-End Developer",
    challenge:
      "Integrating blockchain wallets + Web3 interaction + Admin panel",
    result:
      "Successfully implemented NFT minting, wallet integration, and an admin panel with zero critical bugs.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Redux",
      "Sass",
      "Bootstrap",
      "Web3",
      "PWA",
    ],
  },
  {
    title: "Dynamo100",
    slug: "dynamo100",
    shortDescription: `Dynamo100 is a Web3-powered community portal built with Next.js and JavaScript,
      designed to reward users through social farming, tokenized tasks, and decentralized
      engagement using D100 tokens.`,
    imageSrc: "/images/projects/Dynamo/dynamo.png",
    imageAlt: "Dynamo100 screenshot",
    videoUrl: "/images/projects/Dynamo/dynamo-video.mp4",
    longDescription: `
    <p><b>Dynamo100</b> is an interactive, community-based social farming platform built with <b>Next.js</b>, <b>JavaScript</b>, and <b>Web3 technologies</b>.</p>
    <p>It empowers users to earn <b>D100 tokens</b> by completing various social, creative, and community-driven tasks. The platform seamlessly integrates blockchain wallet connections for secure authentication, token transactions, and reward distribution.</p>
    <p>Designed as a community portal for Web3 citizens, <b>Dynamo100</b> combines the principles of decentralization, gamification, and engagement. Members can participate in <b>airdrops</b>, <b>social farming challenges</b>, and <b>community governance</b> — earning tokens and gaining exclusive access to premium content or virtual events.</p>
    <p>Core functionalities include:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Wallet Integration</b> (MetaMask and Web3 connection)</li>
      <li><b>Task-based reward system</b> using D100 tokens</li>
      <li><b>Community governance and voting mechanisms</b></li>
      <li><b>Exclusive content and NFT-based access</b></li>
      <li><b>Airdrop and milestone-based reward campaigns</b></li>
    </ul>
    <p>The frontend, built with <b>Next.js</b>, ensures high performance,
    modern UI/UX, and scalability. The platform reflects a fusion of decentralized
    engagement and dynamic Web3 design, demonstrating solid skills in <b>front-end
    architecture</b>, <b>blockchain interaction</b>, and <b>smart contract integration</b> —
    making it a strong portfolio project for any modern Web3 developer.</p>`,
    status: "project",
    extra: { type: "web" },
    role: "Front-End Developer",
    challenge: "Integrating MetaMask login",
    result: "Wallet login implemented successfully using Web3 APIs.",
    technologies: ["Next.js", "JavaScript", "Redux", "Web3"],
  },
  {
    title: "easyglobal",
    slug: "easyglobal",
    shortDescription:
      "Easy Global Host is a high-performance VPS and cloud hosting platform built with Next.js and JavaScript, offering global coverage and cryptocurrency payment support.",
    imageSrc: "/images/projects/easyglobalHost/easyGlobal.png",
    imageAlt: "easyglobal screenshot",
    videoUrl: "/images/projects/easyglobalHost/easy-video.mp4",
    longDescription: `
    <p><b>Easy Global Host</b> is a leading provider of <b>Virtual Private Server (VPS)</b>
    and cloud hosting solutions, built with <b>Next.js</b> and <b>JavaScript</b>.
    The platform is designed to deliver seamless and reliable hosting services worldwide,
    empowering businesses and individuals to establish a robust online presence effortlessly.</p>
    <p>With a commitment to performance and innovation, Easy Global Host ensures:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Global Network</b> — Access 32+ locations worldwide for optimal hosting speed and reliability.</li>
      <li><b>Dedicated Servers</b> — High-performance root servers tailored to your specific needs.</li>
      <li><b>VPS Solutions</b> — Affordable and scalable options for both beginners and businesses.</li>
      <li><b>VPN & Cloud Flexibility</b> — Secure, flexible, and high-end hardware for cloud deployment.</li>
      <li><b>Crypto Payment Support</b> — Accept Tether and other cryptocurrencies for secure payments.</li>
    </ul>
    <p>The platform’s frontend, built with <b>Next.js</b>, ensures fast navigation, modern UI/UX,
    and responsive design for global users. Easy Global Host demonstrates advanced <b>front-end
    development</b>, <b>server integration</b>, and <b>cloud infrastructure management</b> skills,
    making it an excellent portfolio project for showcasing modern web technologies and scalable
    hosting solutions.</p>`,
    status: "project",
    extra: { type: "web" },
    role: "Front-End Developer",
    challenge: "UI for multiple pages + API integration",
    result:
      "Implemented responsive UI and connected backend APIs successfully across pages.",
    technologies: ["Next.js", "React", "JavaScript", "REST API"],
  },
  {
    title: "x180",
    slug: "x180",
    shortDescription: `X180 is an all-in-one Forex and cryptocurrency copy-trading platform
      built with React and JavaScript, featuring Google login, admin panel, and advanced
      portfolio management for users of all experience levels.`,
    imageSrc: "/images/projects/x180/x180-image.png",
    imageAlt: "x180 website",
    videoUrl: "/images/projects/x180/x180-video.mp4",
    longDescription: `
    <p><b>X180</b> is an all-in-one trading platform built with <b>React</b> and <b>JavaScript</b>,
    offering seamless access to Forex, cryptocurrency, and stock markets. The platform provides
    both beginners and experienced traders the ability to copy trades from top-performing traders,
    manage portfolios, and track performance in real time.</p>
    <p>Designed for the modern Web3 era, <b>X180</b> integrates secure authentication, including
    <b>Google login</b>, and a full-featured <b>admin panel</b> for managing users, subscriptions,
    and trading data.</p>
    <p>Core functionalities include:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Copy Trading</b> — Automatically replicate trades from expert traders to minimize
      risks and maximize gains.</li>
      <li><b>Performance Monitoring</b> — Advanced analytics tools for users and traders to track
      progress and ROI.</li>
      <li><b>Flexible Subscription Plans</b> — Manage subscription fees and profit-sharing agreements
      effortlessly.</li>
      <li><b>Income Dashboard</b> — Live overview of trade history and performance metrics.</li>
      <li><b>Cross Exchange Trading</b> — Trade across multiple exchanges from one platform.</li>
      <li><b>API Integration</b> — Connect live trading accounts securely for seamless copy trading.</li>
      <li><b>Community Engagement</b> — Collaborate with traders, participate in discussions, and follow
      pro traders’ strategies.</li>
    </ul>
    <p>The platform also emphasizes <b>security, transparency, and user-friendly design</b> to provide a
    safe and efficient trading experience. With a modern React frontend and robust backend management,
    X180 demonstrates strong <b>front-end development</b>, <b>Web3 integration</b>, and <b>financial
    technology expertise</b>, making it a standout project for any developer portfolio.</p>`,
    status: "project",
    extra: { type: "web" },
    role: "Front-End Developer",
    challenge: "Building dashboard UI from scratch",
    result:
      "Successfully created a fully functional dashboard with interactive components.",
    technologies: ["React", "JavaScript", "Google Auth", "REST API"],
  },
  {
    title: "oneupfit (mobile app)",
    slug: "oneupfit",
    shortDescription: `A cross-platform fitness app developed with Flutter and React Native,
  focused on step counting and reward distribution as a team project.`,
    imageSrc: "/images/projects/oneupfit/oneupfit1.png",
    imageAlt: "oneupfit mobile app",
    videoUrl: "/images/projects/oneupfit/one-video.mp4",
    longDescription: `
  <p>This project is a <b>cross-platform fitness and step-counting app</b>
  developed using both <b>Flutter</b> and <b>React Native</b> technologies.
  It was a collaborative team project under the <b>OneUpFit</b> brand.</p>

  <p>In the <b>Flutter version</b> (used for the OneUpFit app),
  I collaborated with the Flutter team, where my main responsibility
  was building a <b>clean and functional UI</b> and implementing
  the <b>page logic</b> in alignment with Flutter’s architecture and best practices.
  The <b>team lead</b> handled the overall structure and backend integration.</p>

  <p>The app enables users to earn digital coins by walking, rewarding them
  for reaching daily step goals. Each day’s progress is tracked separately,
  ensuring that rewards depend on meeting the daily challenge. Users stay
  motivated through gamified challenges and visual progress tracking.</p>

  <p>Key functionalities include:</p>
  <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
    <li><b>Real-time step tracking</b> using the device’s motion sensors.</li>
    <li><b>Daily challenge system</b> to motivate consistent physical activity.</li>
    <li><b>Coin-based reward system</b> for meeting step goals.</li>
    <li><b>24-hour progress reset</b> for accurate daily tracking.</li>
    <li><b>Team collaboration</b> across Flutter and React Native modules.</li>
  </ul>

  <p>This app demonstrates my experience in <b>Flutter UI development</b>,
  managing page logic, integrating device hardware features, and collaborating
  in multi-platform projects with separate modules handled by different teams.
  It also highlights knowledge of <b>React Native</b> for mobile app development.</p>`,
    status: "project",
    extra: { type: "mobile" },
    role: "Flutter Developer (UI & Logic)",
    challenge:
      "Building a clean and functional UI aligned with Flutter’s architecture and page logic.",
    result:
      "Delivered a clean, responsive UI and implemented daily coin reward logic efficiently within the Flutter module.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "React Course (YouTube)",
    slug: "react-course-youtube",
    shortDescription: `A hands‑on React learning project built following a tutorial,
      showcasing foundational React skills and component‑based architecture.`,
    imageSrc: "/images/projects/reactLearning/react.png",
    imageAlt: "React course",
    videoUrl: "https://www.youtube.com/watch?v=74KTtyy7g9U",
    longDescription: `
    <p>This project was developed as part of a learning journey in <b>React</b>,
    following a tutorial from a YouTube video. The goal was to build a functional
    web interface, understand how React components work, and apply state and props in a real‑world scenario.</p>
    <p>Throughout this project I explored:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Component‑based structure</b> — Breaking the UI into reusable parts.</li>
      <li><b>State management and props passing</b> — Controlling data flow and UI updates.</li>
      <li><b>Handling user events</b> — Reacting to clicks and input changes.</li>
      <li><b>Conditional rendering and lists</b> — Displaying data dynamically based on state.</li>
      <li><b>Project setup and build tools</b> — Using Create React App (or similar)
      and preparing the app for deployment.</li>
    </ul>
    <p>This learning project demonstrates strong foundational skills in React, component
    architecture, and interactive UI development. It’s a valuable addition to my developer
    portfolio because it shows my commitment to mastering modern front‑end technologies
    and ability to convert tutorial knowledge into functional web applications.</p>
  `,
    status: "live",
    extra: { type: "course" },
    role: "Learner / Front-End Developer",
    challenge: "Learning React fundamentals + component structure",
    result:
      "Built a fully functional learning project and understood component-based architecture.",
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Chrome Extension",
    slug: "chrome-extension",
    shortDescription:
      "PDF text extractor extension using Node.js and JS, also leveraging Python for Persian OCR and PDF parsing.",
    imageSrc: "/images/projects/extension/extension.png",
    videoUrl: "/images/projects/extension/extension.mp4",
    imageAlt: "chrome extension icon",
    longDescription: `
    <p><b>Chrome Extension (RAGM)</b> is a specialized browser tool designed for psychology sessions.
    It connects to an external API (like GeminAI) to provide personalized hints and guidance based on
    the transcripts and subtitles of therapy sessions.</p>
    <p>Key features include:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Session Transcript Analysis</b> — Extracts subtitles and spoken content
      from online or uploaded sessions.</li>
      <li><b>Dynamic Hints Generation</b> — Sends contextual hints to the AI API based
      on what was spoken and provides tailored feedback for therapists or users.</li>
      <li><b>PDF Integration</b> — Users can upload session PDFs, which are processed for
      relevant content and timing, then sent to the API to generate accurate responses.</li>
      <li><b>Customizable Prompts</b> — Prompts can be adapted depending on the user's needs,
      ensuring flexibility and personalization in advice or guidance.</li>
      <li><b>Language Support</b> — Works with both Persian and English content seamlessly.</li>
    </ul>
    <p>Technologies used:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Node.js</b> and <b>JavaScript</b> for browser extension functionality</li>
      <li><b>Python</b> for subtitle parsing and text processing</li>
      <li><b>OCR</b> for extracting text from PDF files</li>
      <li><b>GeminAI API</b> for AI-driven hints and contextual guidance</li>
    </ul>
    <p>This extension acts as a smart companion for psychology sessions, allowing
    therapists and users to get real-time, personalized insights. It is especially useful
    for session follow-ups, note-taking, and generating context-aware suggestions.</p>`,
    status: "live",
    extra: { type: "extension" },
    role: "Fullstack Developer",
    challenge:
      "Extracting Persian text from uploaded PDFs using Node.js + Python",
    result:
      "Successfully parsed Persian PDFs using Python OCR and extracted text for the extension.",
    technologies: ["Node.js", "JavaScript", "Python", "OCR", "fastAPI"],
  },
  {
    title: "RAG Course (Youtube)",
    slug: "rag-course",
    shortDescription:
      "A soon-to-be-uploaded course about RAG (Retrieval-Augmented Generation), including PDF uploading and personalized question generation.",
    imageSrc: "/images/projects/Rag/rag.png",
    imageAlt: "RAG course placeholder",
    videoUrl: "/images/projects/Rag/jalase-1.mp4",
    longDescription: `
    <p><b>RAG Course</b> is a comprehensive learning platform focused on
    <b>Retrieval-Augmented Generation (RAG)</b>. It enables users to upload PDFs
    (in Persian or English), process the content, and receive personalized questions
    and guidance based on the material.</p>
    <p>Key features include:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>PDF Upload</b> — Users can upload any PDF, which is then processed and indexed.</li>
      <li><b>Text Extraction</b> — Extracts text from PDFs using OCR, including Persian documents.</li>
      <li><b>Vector Embeddings</b> — Converts text into embeddings with <b>SentenceTransformer</b> for
      semantic search and personalized question generation.</li>
      <li><b>ChromaDB Integration</b> — Stores embeddings for fast retrieval and reference.</li>
      <li><b>Personalized Question Generation</b> — Generates context-aware questions and exercises
      based on the uploaded material.</li>
      <li><b>Full Backend API</b> — Powered by <b>FastAPI</b> to handle uploads, processing, and RAG
      queries efficiently.</li>
      <li><b>Multi-Language Support</b> — Works with Persian and English PDFs seamlessly.</li>
    </ul>
    <p>Technologies used:</p>
    <ul style="margin-top: 12px; list-style-type: disc; padding-left: 20px;">
      <li><b>Python</b> for NLP and backend processing</li>
      <li><b>FastAPI</b> for API handling</li>
      <li><b>OCR</b> for PDF text extraction</li>
      <li><b>SentenceTransformer</b> for semantic embeddings</li>
      <li><b>ChromaDB</b> for storing and retrieving embeddings</li>
      <li><b>JavaScript</b> for frontend interactions</li>
    </ul>

    <p>This course demonstrates advanced techniques in <b>RAG pipelines</b>,
    <b>personalized AI question generation</b>, and <b>PDF content processing</b>.
    It is an ideal project for anyone looking to combine AI, NLP, and web technologies
    to create interactive learning tools.</p>`,

    status: "coming-soon",
    extra: { type: "course" },
    role: "Learner / Developer",
    challenge:
      "Implementing PDF upload + text extraction + personalized question generation",
    result:
      "Course will demonstrate the RAG pipeline, PDF processing, and dynamic question creation for personalized learning.",
    technologies: [
      "Python",
      "RAG",
      "PDF processing",
      "OCR",
      "fastAPI",
      "SentenceTransformer",
      "chromadb",
    ],
  },
];
