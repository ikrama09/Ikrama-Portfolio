import { useState, useEffect } from 'react';
import {
  Terminal,
  Download,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  Plus,
  Trash2,
  Edit,
  Save,
  LogOut,
  Upload,
  Menu,
  X,
  ArrowRight,
  Code,
  User,
  Heart
} from 'lucide-react';

// Custom SVG Brand Icons since Lucide v1+ does not ship brand icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || "24"}
    height={props.size || "24"}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || "24"}
    height={props.size || "24"}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Default initial state matching Ikrama's resume
const DEFAULT_PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Kathiyara Muhammed Ikrama',
    title: 'Software Developer | Full-Stack | Java | Web | AI/ML',
    location: 'Ahmedabad, Gujarat, India',
    email: 'ikrama20067@gmail.com',
    phone: '+91 96626 35963',
    linkedin: 'linkedin.com/in/ikrama-kathiyara',
    github: 'github.com/ikrama-kathiyara',
    bio: 'BCA (Hons) student specializing in Full-Stack Web Development, Java application architecture, and AI/ML integrations. Dedicated to building robust software systems, optimizing database operations, and creating modern, high-performance web interfaces.',
    oneLiner: 'Building robust, premium Full-Stack applications & AI/ML integrated platforms.',
    profilePhoto: '', // Base64 data URL
    resumeUrl: 'https://drive.google.com/file/d/1_example_resume_id/view?usp=sharing', // Placeholder
  },
  skills: [
    { id: '1', name: 'Java 21', category: 'Languages' },
    { id: '2', name: 'TypeScript', category: 'Languages' },
    { id: '3', name: 'JavaScript (ES6+)', category: 'Languages' },
    { id: '4', name: 'Python 3.12', category: 'Languages' },
    { id: '5', name: 'C++', category: 'Languages' },
    { id: '6', name: 'SQL', category: 'Languages' },
    { id: '7', name: 'Go', category: 'Languages' },
    { id: '8', name: 'React 19', category: 'Frontend' },
    { id: '9', name: 'Next.js 15', category: 'Frontend' },
    { id: '10', name: 'Tailwind CSS v4', category: 'Frontend' },
    { id: '11', name: 'HTML5/CSS3', category: 'Frontend' },
    { id: '12', name: 'Node.js 22', category: 'Backend & DB' },
    { id: '13', name: 'Express.js', category: 'Backend & DB' },
    { id: '14', name: 'NestJS', category: 'Backend & DB' },
    { id: '15', name: 'REST APIs', category: 'Backend & DB' },
    { id: '16', name: 'MySQL', category: 'Backend & DB' },
    { id: '17', name: 'MongoDB', category: 'Backend & DB' },
    { id: '18', name: 'PostgreSQL', category: 'Backend & DB' },
    { id: '19', name: 'Vector DBs (Pinecone)', category: 'Backend & DB' },
    { id: '20', name: 'DSA', category: 'CS Fundamentals' },
    { id: '21', name: 'OOP', category: 'CS Fundamentals' },
    { id: '22', name: 'System Design', category: 'CS Fundamentals' },
    { id: '23', name: 'TensorFlow', category: 'AI/ML' },
    { id: '24', name: 'LangChain / AI Agents', category: 'AI/ML' },
    { id: '25', name: 'Gemini & OpenAI API', category: 'AI/ML' },
    { id: '26', name: 'Git & GitHub Actions', category: 'Tools' },
    { id: '27', name: 'Docker', category: 'Tools' },
    { id: '28', name: 'Kubernetes', category: 'Tools' },
    { id: '29', name: 'AWS Cloud', category: 'Tools' },
    { id: '30', name: 'CI/CD Pipelines', category: 'Tools' }
  ],
  experience: [
    {
      id: '1',
      role: 'Full-Stack Developer Intern',
      company: 'Cognifyz Technologies',
      duration: 'Oct 2024 – Present',
      details: [
        'Developing full-stack web applications using React.js and backend technologies.',
        'Collaborating on clean, scalable code architectures and RESTful API integrations.',
        'Optimizing frontend performance and implementing responsive UI components.'
      ]
    },
    {
      id: '2',
      role: 'Sales Telecaller',
      company: 'The Consulting Tender Company',
      duration: '2025',
      details: [
        'Communicating technical solutions and consulting offerings to prospective clients.',
        'Managing client databases and updating customer interaction pipelines.'
      ]
    }
  ],
  projects: [
    {
      id: '1',
      title: 'AI-Integrated Web App',
      stack: 'React, Node.js, Python, TensorFlow',
      duration: '2025',
      description: 'An intelligent web platform featuring client-side and server-side machine learning capabilities, utilizing TensorFlow for predictions and Python AI modules.',
      githubLink: 'https://github.com/ikrama-kathiyara/ai-web-app',
      liveLink: '#'
    },
    {
      id: '2',
      title: 'Car Rental Platform',
      stack: 'React.js, Node.js, Firebase',
      duration: '2025',
      description: 'A premium car rental management solution with user authentication, real-time availability checks, booking workflow, and payment portal simulation.',
      githubLink: 'https://github.com/ikrama-kathiyara/car-rental',
      liveLink: '#'
    },
    {
      id: '3',
      title: 'Full-Stack CRUD Platform',
      stack: 'React, Express.js, Node.js, MySQL',
      duration: '2025',
      description: 'A high-performance administration portal featuring dynamic data tables, complex query options, and secure transaction handling.',
      githubLink: 'https://github.com/ikrama-kathiyara/crud-platform',
      liveLink: '#'
    },
    {
      id: '4',
      title: 'Event Management System',
      stack: 'HTML, CSS, JS, Node.js, MySQL',
      duration: '2024',
      description: 'A responsive platform for planning, booking, and managing corporate and private events with real-time seat reservation.',
      githubLink: 'https://github.com/ikrama-kathiyara/event-management',
      liveLink: '#'
    },
    {
      id: '5',
      title: 'Responsive Portfolio Website',
      stack: 'HTML5, CSS3, Tailwind, JS',
      duration: '2024',
      description: 'An interactive and lightweight personal website featuring smooth layouts and optimized performance.',
      githubLink: 'https://github.com/ikrama-kathiyara/portfolio-v1',
      liveLink: '#'
    }
  ],
  certifications: [
    {
      id: '1',
      title: 'Java Developer Certification',
      issuer: 'Oracle Academy',
      date: '2024',
      image: '', // base64
      credentialLink: '#'
    },
    {
      id: '2',
      title: 'Full Stack Software Engineering',
      issuer: 'Cognifyz Technologies',
      date: '2024',
      image: '', // base64
      credentialLink: '#'
    }
  ],
  achievements: [
    {
      id: '1',
      title: 'Hackathon Finalist',
      description: 'Built a collaborative task planner with real-time AI assistance within a 36-hour hackathon limit.'
    },
    {
      id: '2',
      title: 'High Academic Performer',
      description: 'Maintained a consistent 7.0 CGPA at JG University while studying BCA (Hons).'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'JG University',
      degree: 'BCA (Hons), Computer Software Engineering',
      duration: '2023–2027',
      details: 'CGPA: 7.0. Core modules include Java, Data Structures and Algorithms, OOP, Database Systems.'
    },
    {
      id: '2',
      institution: "St. Xavier's Higher Secondary School",
      degree: '12th Commerce',
      duration: '2023',
      details: 'Score: 68.09%. Focus on Business Mathematics and Economics.'
    }
  ]
};

const SKILL_CATEGORIES = ['Languages', 'Frontend', 'Backend & DB', 'CS Fundamentals', 'AI/ML', 'Tools'];

// Reusable Unix Terminal Window Component for coding vibes
const TerminalWindow = ({ title, children, className = "" }) => (
  <div className={`rounded-xl border border-red-500/10 bg-navy-card overflow-hidden shadow-2xl relative ${className}`}>
    {/* Terminal Header */}
    <div className="bg-[#0b0b0e] border-b border-red-500/10 px-4 py-3 flex items-center justify-between font-mono text-xs select-none">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-655 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-600 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-emerald-600 opacity-80" />
      </div>
      <span className="text-slate-400 font-medium tracking-tight text-[11px] font-mono-code">{title}</span>
      <div className="w-8" />
    </div>
    {/* Content Area */}
    <div className="p-6 sm:p-8">
      {children}
    </div>
  </div>
);

// Custom SVG Technology Logos for 3D Orbit
const JavaLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 15a4 4 0 0 1-4-4V5h16v6a4 4 0 0 1-4 4H6z" />
    <path d="M18 8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    <path d="M6 19h8" />
    <path d="M9 22h2" />
    <path d="M5 2c0 1 1 2 2 2" />
    <path d="M9 2c0 1 1 2 2 2" />
    <path d="M13 2c0 1 1 2 2 2" />
  </svg>
);

const PythonLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.93 2c-2.48 0-3.32.18-4.57 1.43C6 4.75 6 5.76 6 8.24V10h6V8h2.3c1.9 0 2.7-.8 2.7-2.7V3c0-.55-.45-1-1-1zm0 20c2.48 0 3.32-.18 4.57-1.43 1.36-1.32 1.36-2.33 1.36-4.81V14h-6v2H11.7c-1.9 0-2.7.8-2.7 2.7V21c0 .55.45 1 1 1z" />
    <path d="M9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

const ReactLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const NextjsLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 16V8l8 8V8" />
  </svg>
);

const TypeScriptLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h4M11 9v6M15 11c1.5 0 2.5.5 2.5 1.5s-1 1.5-2.5 1.5h-1v-3" />
    <path d="M14 15c.5.5 1 .8 1.5.8" />
  </svg>
);

const TensorFlowLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L4 6v12l8 4 8-4V6z" />
    <path d="M12 22V10M4 6l8 4 8-4" />
    <path d="M4 12.5l8 4 8-4" />
  </svg>
);

const DockerLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 10.5C21 8.5 18 8 16.5 9c.5-1.5-.5-3.5-2-4C13 4.5 10 5.5 8.5 7.5c-2 2-3 5.5-2.5 8C3 15 2 16 2 17.5c0 2 2 3.5 6 3.5h10c3 0 4-2.5 4-4.5-.5-.5-.5-1-1-1.5h1" />
    <rect x="8" y="10" width="2" height="2" />
    <rect x="11" y="10" width="2" height="2" />
    <rect x="14" y="10" width="2" height="2" />
    <rect x="9.5" y="7.5" width="2" height="2" />
    <rect x="12.5" y="7.5" width="2" height="2" />
  </svg>
);

const SqlLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

const LangChainLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const NestjsLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L3 7v10l9 5 9-5V7z" />
    <path d="M12 22V12M3 7l9 5 9-5" />
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// Waving/Winking Github Logo Component
const GithubWaving = () => (
  <svg className="w-28 h-28 text-red-500" viewBox="0 0 160 160" fill="currentColor">
    {/* Background glow circle */}
    <circle cx="80" cy="80" r="70" fill="currentColor" fillOpacity="0.05" />
    
    {/* Octocat Silhouette */}
    <path d="M80 15c-35.9 0-65 29.1-65 65 0 28.7 18.6 53 44.4 61.6 3.25.6 4.44-1.4 4.44-3.1 0-1.55-.05-5.7-.09-11.2-18.1 3.9-21.9-8.7-21.9-8.7-3-7.5-7.2-9.5-7.2-9.5-5.9-4 .45-3.9.45-3.9 6.5.45 9.95 6.7 9.95 6.7 5.8 9.9 15.2 7 18.9 5.4.6-4.2 2.25-7 4.1-8.6-14.4-1.6-29.6-7.2-29.6-32.2 0-7.1 2.5-12.95 6.7-18.55-.7-1.65-2.9-8.3.65-18.3 0 0 5.5-1.75 18 6.7 5.2-1.45 10.8-2.15 16.3-2.2 5.5.05 11.1.75 16.3 2.2 12.5-8.45 18-6.7 18-6.7 3.55 10 .65 16.65.65 18.3 4.2 5.6 6.7 11.45 6.7 18.55 0 25.05-15.25 30.55-29.7 32.1 2.3 2 4.4 5.9 4.4 11.9 0 8.6-.08 15.55-.08 17.65 0 1.7 1.2 3.75 4.5 3.1C126.4 133 145 108.7 145 80c0-35.9-29.1-65-65-65z" />
    
    {/* Hello Text */}
    <text x="80" y="142" textAnchor="middle" className="font-mono text-[9px] fill-red-400 font-semibold tracking-wider select-none">ikrama:~$ hello</text>

    {/* Custom Hand waving next to it */}
    <g className="animate-github-arm">
      {/* Hand/Arm waving path */}
      <path d="M125 75c2 4 8 4 10 0l12-15c3-3 0-8-4-8s-6 2-8 5l-10 18z" />
    </g>
  </svg>
);

// Card Shape Flipping Profile Component
const FlippingProfileCard = ({ profilePhoto, name }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Face: Rectangular Profile Photo */}
        <div className="flip-card-front flex flex-col justify-between p-4 bg-navy-card border border-red-500/10 shadow-2xl relative">
          <div className="absolute top-2 left-3 font-mono text-[8px] text-slate-500 select-none">// sys_identity.dat</div>
          
          <div className="w-full h-[220px] rounded-lg overflow-hidden border border-red-500/20 bg-black/60 flex items-center justify-center mt-3">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-red-500 p-4">
                <User size={48} className="mb-1 opacity-40 animate-pulse" />
                <span className="text-[9px] text-slate-500 text-center font-mono">SYS_NO_IMAGE</span>
              </div>
            )}
          </div>
          
          <div className="mt-2 text-left font-mono">
            <div className="text-[11px] font-bold text-white tracking-tight">{name}</div>
            <div className="text-[8px] text-red-450 uppercase tracking-widest font-semibold mt-0.5">AUTHORIZED DEVELOPER</div>
          </div>
        </div>

        {/* Back Face: Hello Waving Github Logo */}
        <div className="flip-card-back p-6 flex flex-col items-center justify-center">
          <GithubWaving />
        </div>
      </div>
    </div>
  );
};

// Interactive 3D Orbit Component for Skill Logos revolving around flipping card
const ThreeDOrbit = ({ profilePhoto, name }) => {
  const orbitSkills = [
    { name: 'Java', icon: JavaLogo, color: 'text-red-500 border-red-500/20 hover:border-red-500 hover:shadow-red-500/15' },
    { name: 'Python', icon: PythonLogo, color: 'text-yellow-500 border-yellow-500/20 hover:border-yellow-500 hover:shadow-yellow-500/15' },
    { name: 'React', icon: ReactLogo, color: 'text-cyan-400 border-cyan-400/20 hover:border-cyan-400 hover:shadow-cyan-400/15' },
    { name: 'Next.js', icon: NextjsLogo, color: 'text-white border-white/20 hover:border-white hover:shadow-white/15' },
    { name: 'TypeScript', icon: TypeScriptLogo, color: 'text-blue-400 border-blue-400/20 hover:border-blue-400 hover:shadow-blue-400/15' },
    { name: 'TensorFlow', icon: TensorFlowLogo, color: 'text-orange-500 border-orange-500/20 hover:border-orange-500 hover:shadow-orange-500/15' },
    { name: 'Docker', icon: DockerLogo, color: 'text-sky-400 border-sky-400/20 hover:border-sky-400 hover:shadow-sky-400/15' },
    { name: 'SQL', icon: SqlLogo, color: 'text-emerald-450 border-emerald-450/20 hover:border-emerald-450 hover:shadow-emerald-450/15' },
    { name: 'LangChain', icon: LangChainLogo, color: 'text-teal-400 border-teal-400/20 hover:border-teal-400 hover:shadow-teal-400/15' },
    { name: 'NestJS', icon: NestjsLogo, color: 'text-pink-500 border-pink-500/20 hover:border-pink-500 hover:shadow-pink-500/15' }
  ];

  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center orbit-container mx-auto">
      {/* Dr. Strange Magic Circles (Concentric tilted rings) */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-red-500/20 border-dashed animate-spin-slow pointer-events-none shadow-[0_0_20px_rgba(239,68,68,0.15)]" />
      <div className="absolute w-[240px] h-[240px] rounded-full border border-red-600/10 border-double animate-spin-reverse-slow pointer-events-none" />

      {/* Central Profile Card */}
      <div className="absolute z-10 flex items-center justify-center">
        <FlippingProfileCard profilePhoto={profilePhoto} name={name} />
      </div>

      {/* Orbit Ring */}
      <div className="orbit-ring absolute w-full h-full">
        {orbitSkills.map((skill, idx) => {
          const total = orbitSkills.length;
          const angle = (idx / total) * 360;
          const radius = 135;
          const rad = (angle * Math.PI) / 180;
          const tx = Math.round(Math.sin(rad) * radius);
          const tz = Math.round(Math.cos(rad) * radius);
          const ty = 0; // Perfect vertical alignment on a single flat circular plane

          const IconComponent = skill.icon;

          return (
            <div
              key={idx}
              className="orbit-item"
              style={{
                transform: `translate3d(${tx}px, ${ty}px, ${tz}px)`,
                zIndex: tz > 0 ? 12 : 5,
              }}
            >
              <div className="orbit-item-inner">
                <div 
                  className={`p-2.5 bg-black/90 border rounded-xl flex items-center justify-center shadow-lg select-none cursor-pointer transition-all hover:scale-110 ${skill.color}`}
                  title={skill.name}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const codeLines = [
  '#include <iostream>',
  'using namespace std;',
  '',
  'int main() {',
  '    cout << "Hello, World! I am Ikrama." << endl;',
  '    return 0;',
  '}'
];

// Unified Coder Workstation (Redesigned character + side-by-side terminal)
const CoderWorkstation = () => {
  const [lines, setLines] = useState(() => ["$ cat hello_world.cpp"]);
  const [phase, setPhase] = useState(0); // 0: Start typing, 1: Running/Compiling, 2: Done

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let interval;
    
    if (phase === 0) {
      interval = setInterval(() => {
        if (currentLine >= codeLines.length) {
          clearInterval(interval);
          setPhase(1);
          return;
        }

        const fullLine = codeLines[currentLine];
        setLines(prev => {
          const updated = [...prev];
          if (currentChar === 0) {
            updated.push(fullLine.slice(0, 1));
          } else {
            updated[updated.length - 1] = fullLine.slice(0, currentChar + 1);
          }
          return updated;
        });

        currentChar++;
        if (currentChar >= fullLine.length) {
          currentLine++;
          currentChar = 0;
        }
      }, 35);
    } else if (phase === 1) {
      const compileTimeout = setTimeout(() => {
        setLines(prev => [...prev, "", "$ g++ hello_world.cpp -o hello_world", "$ ./hello_world"]);
        
        const runTimeout = setTimeout(() => {
          setLines(prev => [...prev, "Hello, World! I am Ikrama."]);
          setPhase(2);
        }, 1000);
        
        return () => clearTimeout(runTimeout);
      }, 800);
      
      return () => clearTimeout(compileTimeout);
    } else if (phase === 2) {
      const resetTimeout = setTimeout(() => {
        setLines(["$ cat hello_world.cpp"]);
        setPhase(0);
      }, 5000);
      
      return () => clearTimeout(resetTimeout);
    }

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-[#09090c] border border-red-500/10 shadow-2xl relative overflow-hidden max-w-[640px] mx-auto text-left border-red-950/40">
      {/* Redesigned Coder SVG Illustration */}
      <div className="w-full max-w-[200px] aspect-square flex-shrink-0 flex items-center justify-center relative">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-red-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Glow */}
          <circle cx="100" cy="100" r="70" fill="url(#coderWorkstationGlow)" className="animate-pulse" />

          {/* LAYER 1: CHAIR BACKREST (Behind Coder) */}
          <rect x="42" y="90" width="10" height="50" rx="5" fill="#131317" stroke="currentColor" strokeWidth="1.2" />

          {/* LAYER 2: CHAIR SEAT & BASE */}
          <rect x="46" y="140" width="38" height="6" rx="1.5" fill="#131317" stroke="currentColor" strokeWidth="1.2" />
          <line x1="65" y1="146" x2="65" y2="180" stroke="currentColor" strokeWidth="2" />
          <path d="M50 180h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

          {/* LAYER 3: CODER BODY */}
          {/* Torso */}
          <path d="M50 140c0-18 6-28 20-28s15 10 20 28z" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
          
          {/* Neck & Head (bobbing) */}
          <g className="animate-head-bob">
            <rect x="66" y="102" width="8" height="10" fill="#0f0f12" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="70" cy="92" r="14" fill="#0f0f12" stroke="currentColor" strokeWidth="2" />
            <path d="M58 84c0-5 5-9 12-9s12 4 12 9v2H58z" fill="currentColor" fillOpacity="0.25" />
            {/* Glasses */}
            <rect x="66" y="89" width="6" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="74" y="89" width="6" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="72" y1="91" x2="74" y2="91" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* LAYER 4: DESK SURFACE */}
          <rect x="15" y="136" width="170" height="8" rx="2" fill="#16161c" stroke="currentColor" strokeWidth="1.5" />
          <rect x="25" y="144" width="12" height="46" fill="#0f0f13" stroke="currentColor" strokeWidth="1" />
          <rect x="163" y="144" width="12" height="46" fill="#0f0f13" stroke="currentColor" strokeWidth="1" />

          {/* Coffee Cup on Desk */}
          <rect x="28" y="122" width="8" height="14" rx="1" fill="#ef4444" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          <path d="M36 125h2.5v6H36" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M30 116c.2-1-.2-2 0-3M34 117c.2-1-.2-2 0-3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />

          {/* Keyboard on Desk */}
          <rect x="84" y="131" width="24" height="4" rx="1" fill="#16161c" stroke="currentColor" strokeWidth="1" />

          {/* Monitor Screen on Desk */}
          <path d="M125 136h20l1 3h-22z" fill="#2d2d34" stroke="currentColor" strokeWidth="1" />
          <rect x="129" y="90" width="34" height="46" rx="2" fill="#111" stroke="currentColor" strokeWidth="1.5" />
          <rect x="132" y="93" width="28" height="32" rx="1" fill="#09090b" />
          <rect x="132" y="93" width="28" height="32" fill="currentColor" fillOpacity="0.15" className="animate-screen-glow" />
          {/* screen code lines */}
          <line x1="135" y1="97" x2="148" y2="97" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
          <line x1="135" y1="101" x2="154" y2="101" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="135" y1="105" x2="142" y2="105" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="135" y1="109" x2="151" y2="109" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />

          {/* LAYER 5: ARMS TYPING (drawn on top of desk/keyboard) */}
          <g className="animate-typing-left">
            <path d="M62 122c4 6 10 12 18 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="80" cy="134" r="1.5" fill="currentColor" />
          </g>
          <g className="animate-typing-right">
            <path d="M72 122c2 5 6 11 12 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="84" cy="133" r="1.5" fill="currentColor" />
          </g>

          <defs>
            <radialGradient id="coderWorkstationGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* C++ Hello World Terminal (connected side-by-side) */}
      <div className="w-full flex-grow rounded-xl border border-red-500/10 bg-[#050508] shadow-inner text-[9px] font-mono p-4 min-h-[175px] border-red-950/40 relative">
        <div className="absolute top-2 right-4 text-[7px] text-slate-500 select-none">// interactive_compiler.cpp</div>
        
        {/* Window controls */}
        <div className="flex space-x-1.5 border-b border-white/5 pb-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-655" />
          <span className="w-2 h-2 rounded-full bg-yellow-600" />
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
        </div>

        {/* Console lines output */}
        <div className="space-y-1 select-none font-mono-code leading-relaxed text-slate-350">
          {lines.map((line, i) => {
            const isCommand = line.startsWith('$');
            const isOutput = line === 'Hello, World! I am Ikrama.';
            return (
              <div 
                key={i} 
                className={
                  isCommand ? "text-red-400 font-semibold" 
                  : isOutput ? "text-emerald-400 phosphor-green font-bold" 
                  : "text-slate-400 pl-3"
                }
              >
                {line}
              </div>
            );
          })}
          {phase === 0 ? (
            <span className="inline-block w-1.5 h-3 bg-red-500 animate-pulse ml-0.5" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const typewriterRoles = ['Full-Stack Developer', 'Java Developer', 'AI/ML Enthusiast', 'BCA Final Year'];

export default function App() {
  // ----------------------------------------
  // State Management & Persistence
  // ----------------------------------------
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('ikrama_portfolio_data_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse portfolio data', e);
      }
    }
    return DEFAULT_PORTFOLIO_DATA;
  });

  // Keep localStorage updated on every data change
  useEffect(() => {
    localStorage.setItem('ikrama_portfolio_data_v3', JSON.stringify(data));
  }, [data]);

  // ----------------------------------------
  // Routing (Hash-Based)
  // ----------------------------------------
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // ----------------------------------------
  // Typewriter Effect
  // ----------------------------------------
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterDeleting, setTypewriterDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = typewriterRoles[typewriterIndex];

    if (typewriterDeleting && typewriterText === '') {
      timer = setTimeout(() => {
        setTypewriterDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % typewriterRoles.length);
      }, 300);
    } else if (!typewriterDeleting && typewriterText === currentFullText) {
      timer = setTimeout(() => setTypewriterDeleting(true), 1500);
    } else if (typewriterDeleting) {
      timer = setTimeout(() => {
        setTypewriterText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypewriterText((prev) => currentFullText.slice(0, prev.length + 1));
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [typewriterText, typewriterDeleting, typewriterIndex]);

  // Contact Form State (Mailto fallback)
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = () => {
    if (!contactName || !contactEmail || !contactMessage) {
      alert('Please fill out Name, Email, and Message.');
      return;
    }
    const mailtoLink = `mailto:${data.personalInfo.email}?subject=${encodeURIComponent(contactSubject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ikrama,\n\n${contactMessage}\n\nBest regards,\n${contactName}\nEmail: ${contactEmail}`)}`;
    window.location.href = mailtoLink;
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 5000);
  };

  // Nav Mobile Menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ----------------------------------------
  // Render Routes
  // ----------------------------------------
  if (currentHash.startsWith('#/admin')) {
    if (!isAdminAuthenticated) {
      return (
        <AdminLogin
          onLoginSuccess={() => setIsAdminAuthenticated(true)}
          onBackToPortfolio={() => window.location.hash = '#/'}
        />
      );
    }
    return (
      <AdminDashboard
        data={data}
        setData={setData}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          window.location.hash = '#/';
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-navy-dark text-white font-sans selection:bg-red-600 relative bg-dots crt-overlay scanline-moving">
      {/* 1. Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-navy-dark/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-mono font-bold text-lg text-white shadow-lg shadow-red-600/30">
              IK
            </div>
            <span className="font-mono font-bold tracking-tight text-lg hidden sm:inline-block text-slate-100">
              ikrama<span className="text-red-500">:~$</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono text-slate-400">
            <a href="#about" className="hover:text-red-400 transition-colors">./about</a>
            <a href="#skills" className="hover:text-red-400 transition-colors">./skills</a>
            <a href="#experience" className="hover:text-red-400 transition-colors">./experience</a>
            <a href="#projects" className="hover:text-red-400 transition-colors">./projects</a>
            <a href="#certifications" className="hover:text-red-400 transition-colors">./certifications</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">./contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-500 text-white font-mono text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-red-650/20 transition-all active:scale-95 border border-red-500/30"
            >
              make hire
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-dark border-b border-white/5 py-4 px-6 space-y-4 font-mono text-sm">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./about
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./skills
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./experience
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./projects
            </a>
            <a
              href="#certifications"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./certifications
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-red-400 font-medium"
            >
              ./contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center block bg-red-600 hover:bg-red-500 text-white font-medium py-2.5 rounded-lg shadow-lg"
            >
              make hire
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-700/5 rounded-full blur-[128px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-mono font-semibold tracking-wider">
                <Terminal size={14} className="animate-pulse text-red-500" />
                <span>system_status: ACTIVE</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 glow-text-red">{data.personalInfo.name}</span>
              </h1>

              <h2 className="font-mono font-semibold text-xl sm:text-2xl lg:text-3xl text-slate-350 min-h-[40px] flex items-center justify-center lg:justify-start">
                <span className="text-red-500 mr-2">$</span>
                <span>cat role.txt |&nbsp;</span>
                <span className="text-red-400 typewriter-cursor border-r-2 border-red-500 pr-1">{typewriterText}</span>
              </h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono font-light text-sm">
                <span className="text-slate-500">// {data.personalInfo.oneLiner}</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={data.personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-mono px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/10 transition-all hover:translate-y-[-2px] active:translate-y-[0px] active:scale-95 border border-red-500/30"
                >
                  <Download size={18} />
                  <span>./download_resume.sh</span>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-red-950/20 text-slate-300 hover:text-red-400 font-mono px-6 py-3.5 rounded-xl border border-white/10 hover:border-red-500/30 transition-all hover:translate-y-[-2px] active:translate-y-[0px] active:scale-95"
                >
                  <Mail size={18} />
                  <span>./contact_me.py</span>
                </a>
              </div>
            </div>

            {/* Coding character sits below */}
            <div className="pt-8 w-full flex justify-center lg:justify-start">
              <CoderWorkstation />
            </div>
          </div>

          {/* Profile Photo wrapped in 3D technology hologram orbit */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="w-full max-w-[360px] rounded-xl border border-red-500/10 bg-navy-card/45 p-6 shadow-2xl shadow-red-950/15 relative overflow-hidden">
              <div className="absolute top-2 left-4 font-mono text-[9px] text-slate-500 select-none">// hologram_renderer.sh</div>
              <ThreeDOrbit profilePhoto={data.personalInfo.profilePhoto} name={data.personalInfo.name} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-20 bg-navy-card/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 01. ABOUT ME"}</h3>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"<MyJourney />"}</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {data.personalInfo.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin size={18} className="text-red-500 flex-shrink-0" />
                  <span>{data.personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail size={18} className="text-red-500 flex-shrink-0" />
                  <a href={`mailto:${data.personalInfo.email}`} className="hover:text-red-400 transition-colors">{data.personalInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Phone size={18} className="text-red-500 flex-shrink-0" />
                  <span>{data.personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Linkedin size={18} className="text-red-500 flex-shrink-0" />
                  <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">{data.personalInfo.linkedin}</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-red-500/10 bg-[#0c0c0e] p-6 space-y-6 relative overflow-hidden shadow-xl">
              <div className="flex items-center space-x-1.5 border-b border-white/5 pb-3 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                <span>competencies.json</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-white">Core Competencies</h4>
              <div className="flex flex-wrap gap-2.5">
                {['Full-Stack Dev', 'Java Systems', 'Software Engineering', 'AI/ML Integration', 'Clean Architecture', 'Relational Databases', 'React Interfaces', 'Agile Operations'].map((core, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs font-mono border border-red-500/15"
                  >
                    {core}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 02. MY TECH STACK"}</h3>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"const skills = {"}</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const catSkills = data.skills.filter(s => s.category === category);
            if (catSkills.length === 0) return null;
            return (
              <TerminalWindow key={category} title={`~/skills/${category.toLowerCase().replace(/[^a-z0-9]/g, '_')}.py`}>
                <div className="space-y-4">
                  <h4 className="font-mono font-bold text-base text-red-500 flex items-center space-x-2 border-b border-white/5 pb-2">
                    <Code size={16} />
                    <span>{category}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-3 py-1.5 rounded-lg bg-red-950/10 text-slate-350 text-xs font-mono hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 border border-red-950/35 transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            );
          })}
        </div>
        <div className="text-center mt-10 font-mono text-xl text-red-500/40 select-none">{"}"}</div>
      </section>

      {/* 5. Experience Section */}
      <section id="experience" className="py-20 bg-navy-card/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 03. WORK EXPERIENCE"}</h3>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"class Experience extends Developer {"}</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-red-950/40 pl-6 sm:pl-10 space-y-12">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-navy-dark border-4 border-red-500 group-hover:bg-red-450 transition-colors" />

                <TerminalWindow title={`~/experience/${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '_')}.log`}>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <div>
                        <h4 className="font-display font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-red-500 font-mono text-sm">{exp.company}</div>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full self-start sm:self-center font-mono">
                        <Calendar size={12} className="text-red-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="list-none space-y-2 text-slate-350 text-sm sm:text-base leading-relaxed font-mono">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-slate-350 text-sm flex items-start">
                          <span className="text-red-500 mr-2.5 font-bold select-none">&gt;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TerminalWindow>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 font-mono text-xl text-red-500/40 select-none">{"}"}</div>
        </div>
      </section>

      {/* 6. Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 04. FEATURED CREATIONS"}</h3>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"function Projects() {"}</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <div key={project.id} className="rounded-xl border border-red-500/10 bg-navy-card overflow-hidden shadow-2xl relative flex flex-col justify-between group hover:border-red-500/30 transition-all duration-300">
              {/* Card Terminal Header */}
              <div className="bg-[#0b0b0e] border-b border-red-500/10 px-4 py-2 flex items-center justify-between font-mono text-[10px] select-none text-slate-500">
                <span>{`project_${project.id}.py`}</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/35" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/35" />
                  <div className="w-2 h-2 rounded-full bg-green-500/35" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">{project.duration}</span>
                    <div className="flex space-x-3 text-slate-450">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-red-450 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed font-mono font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.split(',').map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-red-950/10 border border-red-950/20 rounded-md text-red-400"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 font-mono text-xl text-red-500/40 select-none">{"}"}</div>
      </section>

      {/* 7. Certifications Section */}
      <section id="certifications" className="py-20 bg-navy-card/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 05. CREDENTIALS"}</h3>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"const certifications = ["}</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 border border-red-500/5">
                {/* Certificate image thumbnail */}
                <div className="w-24 h-24 rounded-lg bg-[#0e0e11] flex-shrink-0 flex items-center justify-center border border-red-500/10 overflow-hidden">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <Award size={36} className="text-red-550 opacity-50" />
                  )}
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left font-mono">
                  <div className="text-[10px] text-slate-500 font-mono">{cert.issuer} &bull; {cert.date}</div>
                  <h4 className="font-display font-bold text-lg text-white">{cert.title}</h4>
                  
                  {cert.credentialLink && cert.credentialLink !== '#' && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
                    >
                      <span>./view_badge.sh</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 font-mono text-xl text-red-500/40 select-none">{"];"}</div>
        </div>
      </section>

      {/* 8. Achievements Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 06. HONORS"}</h3>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"KeyAchievements()"}</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto lg:mx-0 rounded-full" />
            <p className="text-slate-500 text-sm font-mono leading-relaxed pt-2">
              # Recovered honors, recognitions, and competitive accomplishments during software architecture work.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {data.achievements.map((ach) => (
              <div key={ach.id} className="rounded-xl border border-red-500/10 bg-navy-card p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">{ach.title}</h4>
                  <p className="text-slate-400 text-xs font-mono leading-relaxed mt-1">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Education Section */}
      <section className="py-20 bg-navy-card/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 07. QUALIFICATIONS"}</h3>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"class Education extends Timeline {"}</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-red-950/40 pl-6 sm:pl-10 space-y-12">
            {data.education.map((edu) => (
              <div key={edu.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-navy-dark border-4 border-red-500 group-hover:bg-red-400 transition-colors" />

                <TerminalWindow title={`~/education/edu_${edu.id}.md`}>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                      <div>
                        <h4 className="font-display font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <div className="text-red-500 font-mono text-sm">{edu.institution}</div>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 text-xs text-slate-450 bg-white/5 px-3 py-1 rounded-full self-start sm:self-center font-mono">
                        <Calendar size={12} className="text-red-500" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs font-mono leading-relaxed">{edu.details}</p>
                  </div>
                </TerminalWindow>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 font-mono text-xl text-red-500/40 select-none">{"}"}</div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase">{"// 08. GET IN TOUCH"}</h3>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">{"async function ContactMe() {"}</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">Let's build something amazing!</h3>
            <p className="text-slate-400 leading-relaxed font-mono font-light text-sm">
              <span className="text-slate-500"># Open to new internships, full-time development positions, or collaborations on robust software architectures. Call or email the handler directly.</span>
            </p>

            <div className="space-y-4 font-mono">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 text-red-450 flex items-center justify-center flex-shrink-0 border border-red-500/10">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">Email Address</div>
                  <a href={`mailto:${data.personalInfo.email}`} className="text-sm text-white hover:text-red-400 transition-colors font-semibold">{data.personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 text-red-450 flex items-center justify-center flex-shrink-0 border border-red-500/10">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">Call Handset</div>
                  <div className="text-sm text-white font-semibold">{data.personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 text-red-450 flex items-center justify-center flex-shrink-0 border border-red-500/10">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">LinkedIn Host</div>
                  <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-red-400 transition-colors font-semibold">{data.personalInfo.linkedin}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel wrapped in mock compiler shell */}
          <div className="lg:col-span-7 rounded-xl border border-red-500/10 bg-navy-card overflow-hidden shadow-2xl relative">
            <div className="bg-[#0b0b0e] border-b border-red-500/10 px-4 py-2.5 flex items-center justify-between font-mono text-[10px] text-slate-500 select-none">
              <span>contact_form.sh</span>
              <span className="text-red-500 font-bold">READY</span>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold font-mono text-slate-400">Your Name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full bg-[#09090b] border border-red-950/40 focus:border-red-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold font-mono text-slate-400">Your Email</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#09090b] border border-red-950/40 focus:border-red-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  placeholder="Inquiry Topic"
                  className="w-full bg-[#09090b] border border-red-950/40 focus:border-red-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-sm font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold font-mono text-slate-400">Message</label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Enter details..."
                  rows={4}
                  className="w-full bg-[#09090b] border border-red-950/40 focus:border-red-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-sm font-mono"
                />
              </div>

              <button
                onClick={handleContactSubmit}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-mono font-semibold py-3.5 rounded-xl shadow-lg shadow-red-600/10 transition-all active:scale-[0.98] flex items-center justify-center space-x-2 border border-red-500/20"
              >
                <span>./send_message.sh</span>
                <ArrowRight size={16} />
              </button>

              {contactSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono text-center rounded-lg">
                  [SUCCESS] Mail composer opened! Please send the drafted email.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-12 font-mono text-xl text-red-500/40 select-none">{"}"}</div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-[#06070a] border-t border-white/5 py-12 font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white shadow-lg">
              IK
            </div>
            <span className="font-bold tracking-tight text-white">
              ikrama<span className="text-red-500">.dev</span>
            </span>
          </div>

          <p className="text-xs text-slate-500 font-light flex items-center">
            <span>&copy; 2025 Ikrama Kathiyara. All rights reserved. Made with</span>
            <Heart size={12} className="text-red-500 mx-1.5 fill-red-500 animate-pulse" />
            <span>&amp; React</span>
          </p>

          <div className="flex items-center space-x-4">
            <a href={`https://${data.personalInfo.github}`} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-red-500 transition-colors">
              <Github size={20} />
            </a>
            <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-red-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${data.personalInfo.email}`} className="text-slate-500 hover:text-red-500 transition-colors">
              <Mail size={20} />
            </a>
            <span className="text-slate-800">|</span>
            <a href="#/admin" className="text-xs text-red-400 hover:text-red-300 font-mono transition-colors">/admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// Admin Login View
// ---------------------------------------------------------
function AdminLogin({ onLoginSuccess, onBackToPortfolio }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'ikrama@admin2025') {
      onLoginSuccess();
    } else {
      setError('Invalid security signature. Terminating authorization.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center p-6 bg-dots crt-overlay scanline-moving text-white font-mono">
      <div className="absolute top-6 left-6">
        <button
          onClick={onBackToPortfolio}
          className="text-slate-450 hover:text-white flex items-center space-x-2 text-xs font-semibold py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span>&larr; cd ..</span>
        </button>
      </div>

      <div className="w-full max-w-md rounded-xl border border-red-500/10 bg-navy-card overflow-hidden shadow-2xl relative">
        <div className="bg-[#0b0b0e] border-b border-red-500/10 px-4 py-3 flex items-center justify-between text-xs select-none">
          <span className="text-red-500 font-bold">🔒 admin_gateway.sh</span>
          <div className="flex space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 block" />
          </div>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-xl text-white">Enter Signature</h2>
            <p className="text-xs text-slate-400">Restricted Area. Authorize dashboard mutation access.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs text-slate-450 uppercase">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(); }}
                placeholder="••••••••••••••"
                className="w-full bg-[#09090b] border border-red-950/40 focus:border-red-500 rounded-xl px-4 py-3.5 text-white focus:outline-none transition-colors text-center text-lg tracking-widest"
              />
            </div>

            {error && <p className="text-red-400 text-xs text-center">[ERROR] {error}</p>}

            <button
              onClick={handleLogin}
              className="w-full bg-red-650 hover:bg-red-600 text-white py-3.5 rounded-xl transition-all shadow-lg active:scale-98 border border-red-500/30"
            >
              EXECUTE AUTHENTICATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Admin Dashboard View
// ---------------------------------------------------------
function AdminDashboard({ data, setData, onLogout }) {
  const [activeTab, setActiveTab] = useState('profile');

  // Helper function to update state fields
  const updatePersonalInfo = (field, val) => {
    setData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: val
      }
    }));
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white flex flex-col md:flex-row font-mono crt-overlay">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-[#0a0a0c] border-r border-red-500/10 flex flex-col justify-between flex-shrink-0">
        <div>
          <div className="p-6 border-b border-red-500/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white">
                IK
              </div>
              <span className="font-bold text-sm">ikrama_admin</span>
            </div>
            <button
              onClick={onLogout}
              className="text-slate-400 hover:text-white md:hidden"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {[
              { id: 'profile', name: 'profile_info.json', icon: User },
              { id: 'skills', name: 'skills_tech.json', icon: Code },
              { id: 'experience', name: 'experience.log', icon: Briefcase },
              { id: 'projects', name: 'projects.db', icon: Terminal },
              { id: 'certifications', name: 'certifications.db', icon: Award },
              { id: 'achievements', name: 'achievements.txt', icon: Award },
              { id: 'education', name: 'education_timeline.md', icon: BookOpen }
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-xs font-semibold transition-colors ${activeTab === tab.id ? 'bg-red-600 text-white' : 'text-slate-450 hover:bg-white/5 hover:text-white'}`}
                >
                  <IconComp size={14} className="text-red-500" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-red-500/10 hidden md:block">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-white/10 hover:border-red-550/20 py-2.5 rounded-lg text-xs font-semibold transition-all"
          >
            <LogOut size={14} />
            <span>./terminate_session.sh</span>
          </button>
        </div>
      </div>

      {/* Main Panel Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8 border-b border-red-500/10 pb-4">
          <div>
            <h1 className="font-display font-bold text-xl md:text-2xl text-white">
              {activeTab.toUpperCase()} MANAGER
            </h1>
            <p className="text-[11px] text-slate-500 mt-1"># Changes write in real-time to memory/localStorage.</p>
          </div>
          <button
            onClick={() => window.location.hash = '#/'}
            className="bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/25 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            ./view_live_site
          </button>
        </div>

        {/* Tab Switcher */}
        {activeTab === 'profile' && (
          <ProfileTab data={data} updatePersonalInfo={updatePersonalInfo} />
        )}
        {activeTab === 'skills' && (
          <SkillsTab data={data} setData={setData} />
        )}
        {activeTab === 'experience' && (
          <ExperienceTab data={data} setData={setData} />
        )}
        {activeTab === 'projects' && (
          <ProjectsTab data={data} setData={setData} />
        )}
        {activeTab === 'certifications' && (
          <CertificationsTab data={data} setData={setData} />
        )}
        {activeTab === 'achievements' && (
          <AchievementsTab data={data} setData={setData} />
        )}
        {activeTab === 'education' && (
          <EducationTab data={data} setData={setData} />
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------
// Tab Sections Components
// ---------------------------------------------------------

// A. Profile Tab
function ProfileTab({ data, updatePersonalInfo }) {
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 text-sm">
      {/* Photo edit */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 flex items-center justify-center bg-navy-dark flex-shrink-0">
          {data.personalInfo.profilePhoto ? (
            <img src={data.personalInfo.profilePhoto} alt="Profile preview" className="w-full h-full object-cover" />
          ) : (
            <User size={36} className="text-slate-500" />
          )}
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className="font-semibold text-white">Profile Image Binary</div>
          <div className="text-xs text-slate-500">Image will serialize directly into browser storage block.</div>
          
          <label className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors border border-red-500/25">
            <Upload size={12} />
            <span>Upload Binary Image</span>
            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Full Name</label>
            <input
              type="text"
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Location Host</label>
            <input
              type="text"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
              className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-450">One-Liner Tagline</label>
          <input
            type="text"
            value={data.personalInfo.oneLiner}
            onChange={(e) => updatePersonalInfo('oneLiner', e.target.value)}
            className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-455">Resume PDF URL</label>
          <input
            type="text"
            value={data.personalInfo.resumeUrl}
            onChange={(e) => updatePersonalInfo('resumeUrl', e.target.value)}
            placeholder="Google Drive PDF URL"
            className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Email Endpoint</label>
            <input
              type="email"
              value={data.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Phone Channel</label>
            <input
              type="text"
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">LinkedIn Identifier</label>
            <input
              type="text"
              value={data.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
              className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-450">Detailed Bio Text</label>
          <textarea
            value={data.personalInfo.bio}
            onChange={(e) => updatePersonalInfo('bio', e.target.value)}
            rows={5}
            className="w-full bg-[#09090b] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>
      </div>
    </div>
  );
}

// B. Skills Tab
function SkillsTab({ data, setData }) {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState(SKILL_CATEGORIES[0]);

  const addSkill = () => {
    if (!newSkillName) return;
    const newSkill = {
      id: Date.now().toString(),
      name: newSkillName,
      category: newSkillCategory
    };
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
    setNewSkillName('');
  };

  const deleteSkill = (id) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Add Skill form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">Add New Skill Module</h3>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
          <div className="sm:col-span-6 space-y-2">
            <label className="text-xs font-semibold text-slate-450">Skill Name</label>
            <input
              type="text"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="e.g. Next.js"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="sm:col-span-4 space-y-2">
            <label className="text-xs font-semibold text-slate-450">Category Folder</label>
            <select
              value={newSkillCategory}
              onChange={(e) => setNewSkillCategory(e.target.value)}
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            >
              {SKILL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button
            onClick={addSkill}
            className="sm:col-span-2 bg-red-650 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm flex items-center justify-center space-x-1.5 border border-red-500/25"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Skills list by categories */}
      <div className="space-y-6">
        {SKILL_CATEGORIES.map(category => {
          const catSkills = data.skills.filter(s => s.category === category);
          return (
            <div key={category} className="space-y-3">
              <h4 className="font-mono font-semibold text-sm text-red-400">{category} ({catSkills.length})</h4>
              <div className="flex flex-wrap gap-2">
                {catSkills.map(skill => (
                  <span
                    key={skill.id}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0e0e11] border border-red-950/40 text-xs text-slate-300 font-mono"
                  >
                    <span>{skill.name}</span>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="text-slate-550 hover:text-red-400 transition-colors focus:outline-none"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// C. Experience Tab
function ExperienceTab({ data, setData }) {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [duration, setDuration] = useState('');
  const [detailLine, setDetailLine] = useState('');
  const [detailsList, setDetailsList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const addDetail = () => {
    if (!detailLine) return;
    setDetailsList(prev => [...prev, detailLine]);
    setDetailLine('');
  };

  const removeDetail = (index) => {
    setDetailsList(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!role || !company || !duration) {
      alert('Please fill out role, company and duration.');
      return;
    }
    const entry = {
      id: editingId || Date.now().toString(),
      role,
      company,
      duration,
      details: detailsList
    };

    if (editingId) {
      setData(prev => ({
        ...prev,
        experience: prev.experience.map(e => e.id === editingId ? entry : e)
      }));
    } else {
      setData(prev => ({
        ...prev,
        experience: [...prev.experience, entry]
      }));
    }

    // Reset Form
    setRole('');
    setCompany('');
    setDuration('');
    setDetailsList([]);
    setEditingId(null);
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setRole(entry.role);
    setCompany(entry.company);
    setDuration(entry.duration);
    setDetailsList(entry.details);
  };

  const deleteEntry = (id) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(e => e.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Add / Edit form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">
          {editingId ? 'Edit Internship/Job Entry' : 'Add New Internship/Job'}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Job Role / Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Full-Stack Developer Intern"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Cognifyz Technologies"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-450">Duration / Dates</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. Oct 2024 – Present"
            className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        {/* bullet points details editor */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-semibold text-slate-450">Job Details (Bullet Points)</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={detailLine}
              onChange={(e) => setDetailLine(e.target.value)}
              placeholder="Add details / achievements in this role"
              className="flex-1 bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
            <button
              onClick={addDetail}
              className="bg-red-700 hover:bg-red-650 text-red-400 border border-red-500/25 px-4 rounded-xl text-sm font-semibold transition-colors font-mono"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {detailsList.map((det, index) => (
              <li key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-[#050506] border border-red-950/30 text-xs font-mono">
                <span className="text-slate-350">{det}</span>
                <button
                  onClick={() => removeDetail(index)}
                  className="text-slate-550 hover:text-red-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleSave}
            className="bg-red-650 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center space-x-2 text-sm shadow-lg border border-red-500/25 font-mono"
          >
            <Save size={14} />
            <span>{editingId ? './update_role' : './save_role'}</span>
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setRole('');
                setCompany('');
                setDuration('');
                setDetailsList([]);
              }}
              className="bg-white/5 hover:bg-white/10 text-slate-350 py-3 px-6 rounded-xl transition-colors text-xs font-mono"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* Experience list */}
      <div className="space-y-4">
        <h3 className="font-mono font-semibold text-sm text-slate-400">Existing Roles ({data.experience.length})</h3>
        <div className="space-y-3">
          {data.experience.map(e => (
            <div key={e.id} className="p-4 rounded-xl bg-[#0e0e11] border border-red-950/35 flex items-center justify-between font-mono">
              <div>
                <h4 className="font-semibold text-white">{e.role}</h4>
                <div className="text-[10px] text-slate-500">{e.company} &bull; {e.duration}</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEdit(e)}
                  className="p-2 text-slate-400 hover:text-red-450 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteEntry(e.id)}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// D. Projects Tab
function ProjectsTab({ data, setData }) {
  const [title, setTitle] = useState('');
  const [stack, setStack] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (!title || !stack || !description) {
      alert('Please fill out title, stack and description.');
      return;
    }
    const entry = {
      id: editingId || Date.now().toString(),
      title,
      stack,
      duration,
      description,
      githubLink,
      liveLink
    };

    if (editingId) {
      setData(prev => ({
        ...prev,
        projects: prev.projects.map(p => p.id === editingId ? entry : p)
      }));
    } else {
      setData(prev => ({
        ...prev,
        projects: [...prev.projects, entry]
      }));
    }

    // Reset Form
    setTitle('');
    setStack('');
    setDuration('');
    setDescription('');
    setGithubLink('');
    setLiveLink('');
    setEditingId(null);
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setStack(entry.stack);
    setDuration(entry.duration);
    setDescription(entry.description);
    setGithubLink(entry.githubLink || '');
    setLiveLink(entry.liveLink || '');
  };

  const deleteEntry = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">
          {editingId ? 'Edit Project Card' : 'Add New Project Card'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450 font-mono">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. AI-Integrated Web App"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450 font-mono">Project Duration / Year</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 2025"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-450 font-mono">Tech Stack (comma separated)</label>
          <input
            type="text"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            placeholder="React, Node.js, Express.js, MySQL"
            className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450 font-mono">GitHub Repository</label>
            <input
              type="text"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="https://github.com/..."
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-450 font-mono">Live Demo Host</label>
            <input
              type="text"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              placeholder="https://..."
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-450 font-mono">Description Summary</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Brief description of project specs..."
            className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleSave}
            className="bg-red-655 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center space-x-2 text-sm shadow-lg border border-red-500/25 font-mono"
          >
            <Save size={14} />
            <span>{editingId ? './update_project' : './save_project'}</span>
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setTitle('');
                setStack('');
                setDuration('');
                setDescription('');
                setGithubLink('');
                setLiveLink('');
              }}
              className="bg-white/5 hover:bg-white/10 text-slate-350 py-3 px-6 rounded-xl transition-colors text-xs font-mono"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-4">
        <h3 className="font-mono font-semibold text-sm text-slate-400">Existing Projects ({data.projects.length})</h3>
        <div className="space-y-3">
          {data.projects.map(p => (
            <div key={p.id} className="p-4 rounded-xl bg-[#0e0e11] border border-red-950/35 flex items-center justify-between font-mono">
              <div>
                <h4 className="font-semibold text-white">{p.title}</h4>
                <div className="text-[10px] text-slate-500">{p.stack} &bull; {p.duration}</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEdit(p)}
                  className="p-2 text-slate-400 hover:text-red-450 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteEntry(p.id)}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// E. Certifications Tab
function CertificationsTab({ data, setData }) {
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [credentialLink, setCredentialLink] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!title || !issuer || !date) {
      alert('Please fill out title, issuer and date.');
      return;
    }
    const entry = {
      id: editingId || Date.now().toString(),
      title,
      issuer,
      date,
      image,
      credentialLink
    };

    if (editingId) {
      setData(prev => ({
        ...prev,
        certifications: prev.certifications.map(c => c.id === editingId ? entry : c)
      }));
    } else {
      setData(prev => ({
        ...prev,
        certifications: [...prev.certifications, entry]
      }));
    }

    // Reset Form
    setTitle('');
    setIssuer('');
    setDate('');
    setImage('');
    setCredentialLink('');
    setEditingId(null);
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setIssuer(entry.issuer);
    setDate(entry.date);
    setImage(entry.image || '');
    setCredentialLink(entry.credentialLink || '');
  };

  const deleteEntry = (id) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">
          {editingId ? 'Edit Certification Details' : 'Add New Certification'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Certification Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Java Development Masterclass"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Issuing Authority</label>
            <input
              type="text"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="e.g. Oracle Academy / Coursera"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Date Issued</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="e.g. 2024"
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Verification Link</label>
            <input
              type="text"
              value={credentialLink}
              onChange={(e) => setCredentialLink(e.target.value)}
              placeholder="https://..."
              className="w-full bg-[#050506] border border-red-950/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        {/* Certificate Image Upload */}
        <div className="bg-[#050506] rounded-xl border border-red-500/10 p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-navy-card flex items-center justify-center border border-red-950/45 overflow-hidden flex-shrink-0">
            {image ? (
              <img src={image} alt="Cert thumbnail" className="w-full h-full object-cover" />
            ) : (
              <Award size={24} className="text-slate-500" />
            )}
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-white">Certificate Badge/Thumbnail</div>
            <label className="inline-flex items-center space-x-1.5 bg-red-650 hover:bg-red-600 text-white font-semibold text-xs px-3 py-1.5 rounded-lg cursor-pointer transition-colors border border-red-500/25 font-mono">
              <Upload size={12} />
              <span>Upload Badge Image</span>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleSave}
            className="bg-red-655 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center space-x-2 text-sm shadow-lg border border-red-500/25 font-mono"
          >
            <Save size={14} />
            <span>{editingId ? './update_cert' : './save_cert'}</span>
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setTitle('');
                setIssuer('');
                setDate('');
                setImage('');
                setCredentialLink('');
              }}
              className="bg-white/5 hover:bg-white/10 text-slate-350 py-3 px-6 rounded-xl transition-colors text-xs font-mono"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* Certifications list */}
      <div className="space-y-4">
        <h3 className="font-mono font-semibold text-sm text-slate-400">Existing Credentials ({data.certifications.length})</h3>
        <div className="space-y-3">
          {data.certifications.map(c => (
            <div key={c.id} className="p-4 rounded-xl bg-[#0e0e11] border border-red-955/35 flex items-center justify-between font-mono">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded bg-[#050506] border border-red-955/45 overflow-hidden flex items-center justify-center flex-shrink-0">
                  {c.image ? <img src={c.image} alt="" className="w-full h-full object-cover" /> : <Award size={16} className="text-slate-500" />}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{c.title}</h4>
                  <div className="text-xs text-slate-550">{c.issuer} &bull; {c.date}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEdit(c)}
                  className="p-2 text-slate-400 hover:text-red-450 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteEntry(c.id)}
                  className="p-2 text-slate-400 hover:text-red-455 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// F. Achievements Tab
function AchievementsTab({ data, setData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (!title || !description) {
      alert('Please fill out title and description.');
      return;
    }
    const entry = {
      id: editingId || Date.now().toString(),
      title,
      description
    };

    if (editingId) {
      setData(prev => ({
        ...prev,
        achievements: prev.achievements.map(a => a.id === editingId ? entry : a)
      }));
    } else {
      setData(prev => ({
        ...prev,
        achievements: [...prev.achievements, entry]
      }));
    }

    // Reset Form
    setTitle('');
    setDescription('');
    setEditingId(null);
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setDescription(entry.description);
  };

  const deleteEntry = (id) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">
          {editingId ? 'Edit Achievement Details' : 'Add New Achievement'}
        </h3>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-455 font-mono">Achievement Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. University Hackathon Winner"
            className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-455 font-mono">Description / Details</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="What makes this achievement distinct?"
            className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleSave}
            className="bg-red-655 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center space-x-2 text-sm shadow-lg border border-red-500/25 font-mono"
          >
            <Save size={14} />
            <span>{editingId ? './update_achievement' : './save_achievement'}</span>
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setTitle('');
                setDescription('');
              }}
              className="bg-white/5 hover:bg-white/10 text-slate-350 py-3 px-6 rounded-xl transition-colors text-xs font-mono"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* Achievements list */}
      <div className="space-y-4">
        <h3 className="font-mono font-semibold text-sm text-slate-450">Existing Achievements ({data.achievements.length})</h3>
        <div className="space-y-3">
          {data.achievements.map(a => (
            <div key={a.id} className="p-4 rounded-xl bg-[#0e0e11] border border-red-955/35 flex items-center justify-between font-mono">
              <div>
                <h4 className="font-semibold text-white">{a.title}</h4>
                <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{a.description}</p>
              </div>
              <div className="flex space-x-2 flex-shrink-0">
                <button
                  onClick={() => startEdit(a)}
                  className="p-2 text-slate-400 hover:text-red-450 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteEntry(a.id)}
                  className="p-2 text-slate-400 hover:text-red-455 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// G. Education Tab
function EducationTab({ data, setData }) {
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [duration, setDuration] = useState('');
  const [details, setDetails] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (!institution || !degree || !duration) {
      alert('Please fill out institution, degree and duration.');
      return;
    }
    const entry = {
      id: editingId || Date.now().toString(),
      institution,
      degree,
      duration,
      details
    };

    if (editingId) {
      setData(prev => ({
        ...prev,
        education: prev.education.map(edu => edu.id === editingId ? entry : edu)
      }));
    } else {
      setData(prev => ({
        ...prev,
        education: [...prev.education, entry]
      }));
    }

    // Reset Form
    setInstitution('');
    setDegree('');
    setDuration('');
    setDetails('');
    setEditingId(null);
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setInstitution(entry.institution);
    setDegree(entry.degree);
    setDuration(entry.duration);
    setDetails(entry.details || '');
  };

  const deleteEntry = (id) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  return (
    <div className="space-y-8 text-sm">
      {/* Form */}
      <div className="bg-[#0e0e11] rounded-xl border border-red-500/10 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white">
          {editingId ? 'Edit Education Entry' : 'Add New Education Entry'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Institution Name</label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="e.g. JG University"
              className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-455 font-mono">Duration / Dates</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 2023–2027"
              className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-455 font-mono">Degree / Major</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="e.g. BCA (Hons), Computer Software Engineering"
            className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-455 font-mono">Details / Scores</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            placeholder="CGPA: 7.0. Core modules include Java, DSA, etc."
            className="w-full bg-[#050506] border border-red-955/45 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
          />
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleSave}
            className="bg-red-655 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center space-x-2 text-sm shadow-lg border border-red-500/25 font-mono"
          >
            <Save size={14} />
            <span>{editingId ? './update_edu' : './save_edu'}</span>
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setInstitution('');
                setDegree('');
                setDuration('');
                setDetails('');
              }}
              className="bg-white/5 hover:bg-white/10 text-slate-350 py-3 px-6 rounded-xl transition-colors text-xs font-mono"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* Education list */}
      <div className="space-y-4">
        <h3 className="font-mono font-semibold text-sm text-slate-450">Existing Timeline ({data.education.length})</h3>
        <div className="space-y-3">
          {data.education.map(edu => (
            <div key={edu.id} className="p-4 rounded-xl bg-[#0e0e11] border border-red-955/35 flex items-center justify-between font-mono">
              <div>
                <h4 className="font-semibold text-white">{edu.degree}</h4>
                <div className="text-[10px] text-slate-500">{edu.institution} &bull; {edu.duration}</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEdit(edu)}
                  className="p-2 text-slate-400 hover:text-red-450 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteEntry(edu.id)}
                  className="p-2 text-slate-400 hover:text-red-455 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
