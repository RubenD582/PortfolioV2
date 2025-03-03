import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Copy, Sun, Moon, Mail, Instagram, Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import Screener from '../assets/screener.jpg';
import ScreenerVideo from '../assets/ScreenerVideo.mp4';
import Bot from '../assets/TradingBot.jpg';
import Chat from '../assets/Chat.jpg';
import ChatVideo from '../assets/ChatVideo.mp4';
import Nails from '../assets/Nails.jpg';
import SafeRoutes from '../assets/SafeRoutes.jpg';
import SuperMario from '../assets/SuperMario.jpg';
import MarioVideo from '../assets/MarioVideo.mp4';
import Signature from '../assets/Signature.png';
import GlowFit from '../assets/Glowfit-logo.png';
import Ayni from '../assets/Ayni-Logo.png';
import Resume from '../assets/Ruben_Resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

import JavaLogo from '../assets/Stack/Java.png';
import PythonLogo from '../assets/Stack/Python.png';
import FlutterLogo from '../assets/Stack/Flutter.png';
import JavaScriptLogo from '../assets/Stack/JS.png';
import NodeLogo from '../assets/Stack/NodeJS.png';
import ReactLogo from '../assets/Stack/React.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1A1A1A] text-gray-100' : 'bg-white text-gray-800'} p-4`}>
      <div className='my-5'></div>
      
      <HeaderSection darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className='my-10'></div>
      
      <AboutSection darkMode={darkMode}/>  
      
      <div className='my-10'></div>
      
      <ExperienceSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <ProjectSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <EducationSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <SkillSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <SummarySection darkMode={darkMode}/>

      <div className='my-10'></div>

      <FooterSection darkMode={darkMode}/>

      <br /><br /><br /><br />
    </div>
  );
}

function AvailableForWork() {
  return (
    <div className="inline-flex items-center justify-start space-x-2 bg-green-500/10 p-1 rounded-full whitespace-nowrap">
      {/* Container for the green dot and ping animation */}
      <div className="relative h-2 w-2 ml-2">
        {/* Ping animation */}
        <div className="absolute h-full w-full bg-green-500 rounded-full animate-ping"></div>
        
        {/* Static green dot */}
        <div className="absolute h-2 w-2 bg-green-500 rounded-full"></div>
      </div>
      
      {/* Text indicating availability */}
      <span className="text-[11px] text-green-700 pr-2">Available for work</span>
    </div>
  );
}

function HeaderSection({ darkMode, setDarkMode }) {
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };
  
  const [toastVisible, setToastVisible] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText('rdreyer523@gmail.com')
      .then(() => {
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
        }, 2000); // Toast disappears after 2 seconds
      })
      .catch(err => console.error('Failed to copy text: ', err));
  }

  return (
    <section
      id="header"
      className={`w-full p-4 flex items-center justify-between top-0 sticky ${darkMode ? 'bg-[#1A1A1A]' : 'bg-white'} z-[99]`}
    >
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-sm font-Inter font-medium mb-1">Ruben Dreyer</h1>
        <span className={`${darkMode ? 'text-[#6B6B6B]' : 'text-gray-500'} text-xs font-Inter font-light`}>
          Software developer
        </span>
      </div>

      {/* Right Section (Buttons) */}
      <div className="flex flex-row">
        <div className="relative">
          <button
            onClick={handleCopyEmail}
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-4 py-2 border rounded-md ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-200'} transition-colors mr-2`}
          >
            <Copy size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-600'}`} />
            <span className={`text-xs ${darkMode ? 'text-[#757575]' : 'text-gray-600'}`}>E-mail</span>
          </button>

          {toastVisible && (
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-3 px-4 rounded-full shadow-lg">
              Email copied to clipboard
            </div>
          )}
        </div>
        
        <button
          className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2EFF]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5 transition-colors`}
          onClick={handleThemeToggle}
        >
          {darkMode ? 
            <Moon size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-600'}`}/>
            :
            <Sun size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-600'}`}/>
          }
        </button>
      </div>
    </section>
  );
}

function AboutSection({ darkMode }) {
  return (
    <div>
      <section id="available" className='px-4 mb-4'>
        <AvailableForWork />
      </section>

      <section id="about" className="w-full text-gray-800 px-4 flex flex-col">
        <h1 className={`font-semibold text-[28px] ${darkMode ? 'text-[#E3E3E3]' : 'text-black'}`}>
          I code innovative solutions and am ready for a{" "}
          <span className={`${darkMode ? 'text-[#6B6B6B]' : 'text-gray-600'}`}>full-time challenge.</span>
        </h1>
        <p className="mt-4 text-sm text-[#757575] pt-5 font-light">
          I'm Ruben Dreyer, a passionate programmer based in Gauteng, South Africa. I earned my BSc in Information Technology from North West University, where I built a solid foundation in coding and problem-solving.
          <br /><br />
          My journey in programming began early, and I've dedicated myself to continuously improving my skills through challenging projects and ongoing learning in a fast-paced tech world.
        </p>
      </section>

      <div className="">
        <button
          onClick={() => window.open(Resume, '_blank')}
          className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} ml-4 mt-8 flex items-center space-x-2 px-4 py-2 border rounded-md ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-200'} transition-colors mr-2`}
        >
          <span className={`text-xs ${darkMode ? 'text-[#757575]' : 'text-gray-600'}`}>Resume</span>
          <ArrowRight size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-600'}`} />
        </button>
      </div>
    </div>
  );
}

function ExperienceSection({ darkMode }) {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Ayni',
      dateRange: '2022 - 2025 Feb',
      logo: Ayni
    },
    {
      role: 'Wordpress Developer',
      company: "Glow Fit",
      dateRange: '13 Nov 2024 - 3 Jan 2025',
      logo: GlowFit
    },
  ];

  return (
    <section
      id="experience"
      className="w-full text-gray-800 p-4 flex flex-col"
    >
      <h1 className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}>Experience</h1>
      {/* <p className="text-sm text-[#757575] mb-4 font-light">
        My personal projects and the ones I’ve contributed to.
      </p> */}
  
      <div className="flex flex-col md:flex-row gap-4 flex-wrap">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${darkMode ? 'border-[#2E2E2E]' : 'border-gray-200'} border rounded-md p-4 flex flex-col md:w-[48%]`}
          >
            <div className="flex space-x-3">
              <img
                src={exp.logo}
                className={`h-10 w-10 object-contain ${darkMode ? 'border-[#6B6B6B]' : 'border-gray-200'} rounded-full`}
              />
  
              <div>
                <h2 className={`${darkMode ? 'text-white/75' : ''} font-medium text-sm`}>{exp.role}</h2>
                <p className={`${darkMode ? 'text-[#6B6B6B]' : 'text-gray-500'} text-xs font-normal mt-[1px]`}>{exp.company}</p>
                
                <p className={`${darkMode ? 'text-[#6B6B6B]' : 'text-gray-500'} text-xs mt-2 font-thin`}>{exp.dateRange}</p>
              </div>
            </div>
  
          </div>
        ))}
      </div>
    </section>
  );
  
}

function ProjectSection({ darkMode }) {
  const projects = [
    {
      title: "Screener",
      description: "Cryptocurrency screener",
      thumbnail: Screener,
      id: "screener",
      video: true,
    },
    {
      title: "Chat App",
      description: "Interactive chat application",
      thumbnail: Chat,
      id: "chat",
      video: true,
    },
    {
      title: "Nails By Dani",
      description: "Website portfolio",
      thumbnail: Nails,
      id: "dani",
      video: false,
    },
    {
      title: "Trading Bot",
      description: "Automated bot that places orders",
      thumbnail: Bot,
      id: "bot",
      video: false,
    },
    {
      title: "Safe Routes",
      description: "Find your way without the worry.",
      thumbnail: SafeRoutes,
      id: "saferoutes",
      video: false,
    },
    {
      title: "Artificial Intelligence",
      description: "A reinforcement learning AI that plays Super Mario.",
      thumbnail: SuperMario,
      id: "mario",
      video: true,
    },
  ];

  const [videoURL, setVideoURL] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  function handleOnClick(id) {
    if (id === "saferoutes") {
      const a = document.createElement("a");
      a.href = "https://github.com/RubenD582/Safe-Routes";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    } else if (id === "chat") {
      setShowVideo(true);
      setVideoURL(ChatVideo);
    } else if (id === "mario") {
      setShowVideo(true);
      setVideoURL(MarioVideo);
    } else if (id === "dani") {
      const a = document.createElement("a");
      a.href = "https://nailsbydani.co.za";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    } else if (id === "screener") {
      setShowVideo(true);
      setVideoURL(ScreenerVideo);
    }
  }

  return (
    <section id="projects" className="w-full text-gray-800 p-4 flex flex-col">
      <h1 className={`${darkMode ? "text-white" : ""} font-medium text-[16px] mb-4`}>
        Projects
      </h1>

      {/* Grid container */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded-lg flex flex-col cursor-pointer transition-colors duration-500 ease-in-out p-2 ${
              darkMode ? "hover:bg-white/5" : "hover:bg-gray-100"
            }`}
            onClick={() => handleOnClick(project.id)}
          >
            <div className="relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full object-contain rounded-lg"
              />
              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-full h-12 w-12 flex items-center justify-center">
                    <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="16px" height="16px" viewBox="-3 0 28 28" version="1.1">
    
                        <title>play</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs>

                    </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#FFFFFF">
                                <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup">

                    </path>
                            </g>
                        </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Always visible text on mobile */}
            <div className="block mb-2 mt-2 w-full">
              <h2 className={`${darkMode ? "text-[#999999]" : ""} text-base font-medium pl-2`}>
                {project.title}
              </h2>
              <p className={`${darkMode ? "text-[#535353]" : "text-gray-600"} text-sm font-light pl-2`}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[100]"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative">
            <video preload="metadata" className="h-[80vh] rounded-lg" controls autoPlay>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

function EducationSection({ darkMode }) {
  return (
    <section
      id="education"
      className="w-full text-gray-800 p-4 flex flex-col"
    >
      <h1 className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}>Education</h1>

      <div className="flex flex-col gap-4">
        <div className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} border rounded-lg p-4`}>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600 '} text-xs mb-1`}>
            BSc in Information Technology
          </p>
          <h2 className={`${darkMode ? 'text-[#999999]' : 'text-gray-800'} text-base font-medium mt-5`}>
            North West University, Vanderbijlpark
          </h2>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600 '} text-xs mb-5`}>2022 - 2024</p>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600 '} text-xs`}>
            I built a solid foundation in IT, focusing on software development, data management, and network systems. Through hands-on projects and real-world challenges, I honed my technical and problem-solving skills.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} border rounded-lg p-4`}>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600'} text-xs mb-1`}>
            Highschool
          </p>
          <h2 className={`${darkMode ? 'text-[#999999]' : 'text-gray-800'} text-base font-medium mt-5`}>
            Driehoek, Vanderbijlpark
          </h2>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600'} text-xs mb-5`}>
            2017 - 2021
          </p>
          <p className={`${darkMode ? 'text-[#5B5B5B]' : 'text-gray-600'} text-xs`}>
            I fell in love with programming early on—my journey started in grade 8. In grade 10, I deepened my passion by taking IT and CAT as subjects.
          </p>
        </div>
      </div>

    </section>
  );
}

function SkillSection({ darkMode }) {
  const skills = [
    { name: "Java", description: "Backend Development", logo: JavaLogo, url:"https://www.java.com/en/" },
    { name: "Python", description: "AI & Automation", logo: PythonLogo, url:"https://www.python.org/" },
    { name: "Flutter", description: "Mobile Development", logo: FlutterLogo, url:"https://flutter.dev/" },
    { name: "JavaScript", description: "Web Development", logo: JavaScriptLogo, url:"https://www.javascript.com/" },
    { name: "Node.js", description: "Server-side Development", logo: NodeLogo, url:"https://nodejs.org/en" },
    { name: "React", description: "Frontend Development", logo: ReactLogo, url:"https://react.dev/" },
  ];

  function handleOnClick(url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  }

  return (
    <section id="skills" className="w-full text-gray-800 p-4 flex flex-col">
      <h1 className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}>Stack</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {skills.map((skill, index) => (
          <div key={index} 
            className={`flex items-center space-x-2 ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'} rounded-xl cursor-pointer`}
            onClick={() => handleOnClick(skill.url)}
          >
            <div className="bg-transparent rounded-full flex items-center justify-center p-2">
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <h2 className={`${darkMode ? 'text-[#E3E3E3]' : ''} font-medium text-sm`}>{skill.name}</h2>
              <p className={`${darkMode ? 'text-[#757575]' : 'text-gray-500'} text-xs font-thin`}>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummarySection({ darkMode }) {
  return (
    <section id="skills" className="w-full text-gray-800 p-4 flex flex-col">
      <h1 className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}>Summary</h1>

      <div>
        <p className={`${darkMode ? 'text-[#757575]' : ''} text-sm font-light`}>
          I am driven by a deep passion for programming, I create digital solutions that merge functionality with an excellent user experience. Based in Gauteng, with a BSc in IT from North West University, I thrive on tackling complex challenges and constantly refining my skills. I’m ready to bring my technical expertise and collaborative spirit to a full-time opportunity.
        </p>
      </div>
    </section>
  );
}

function FooterSection({ darkMode }) {
  return (
    <div className="w-full">
      {/* Top Row: Buttons on left, Signature on right */}
      <div className="flex justify-between items-center p-4 w-full">
        {/* Social Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5 transition-colors`}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "mailto:rdreyer523@gmail.com";
              a.click();
            }}            
          >
            <Mail size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-400'}`} />
          </button>

          <button
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5 transition-colors`}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "https://github.com/RubenD582";
              a.target = "_blank";
              a.rel = "noopener noreferrer";
              a.click();
            }}
          >
            <Github size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-400'}`} />
          </button>

          <button
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5 transition-colors`}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "https://linkedin.com/in/rubendreyer";
              a.target = "_blank";
              a.rel = "noopener noreferrer";
              a.click();
            }}
          >
            <Linkedin size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-400'}`} />
          </button>

          <button
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5 transition-colors`}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "https://wa.me/27729717922";
              a.target = "_blank";
              a.rel = "noopener noreferrer";
              a.click();
            }}            
          >
            <MessageCircle size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-400'}`} />
          </button>
        </div>

        <div>
          <img
            src={Signature}
            alt="Signature"
            className="h-10 object-contain"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-right mt-2 mr-4">
        <a href="mailto:rdreyer523@gmail.com" className={`${darkMode ? 'text-[#7D7D7D]' : 'text-blue-600'} text-xs cursor-pointer underline`}>
          rdreyer523@gmail.com
        </a>
        <p href="tel:+27729717922" className={`${darkMode ? 'text-[#7D7D7D]' : 'text-blue-600'} text-xs mt-1 underline cursor-pointer`}>
          +27 72 971 7922
        </p>
      </div>
    </div>
  );
}
