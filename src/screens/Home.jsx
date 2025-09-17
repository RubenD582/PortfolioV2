import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Copy, Sun, Moon, Mail, Instagram, Github, Linkedin, MessageCircle, ArrowRight, Play, FileText} from 'lucide-react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Hls from 'hls.js';

const PUBLIC_URL = "https://rubendreyer.co.za";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Reinitialize AOS after theme change
    setTimeout(() => {
      AOS.refreshHard();
    }, 100); // Slight delay to ensure AOS detects changes

  }, [darkMode]);

  // On initial load, retrieve theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'text-gray-100' : 'text-gray-800'} bg-transparent p-4`}>
      {/* <div className='my-5'></div> */}

      <HeaderSection darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className='my-10'></div>
      
      <AboutSection darkMode={darkMode}/>  
      
      <div className='my-14'></div>
      
      <ExperienceSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <ProjectSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <EducationSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <SkillSection darkMode={darkMode}/>

      <div className='my-10'></div>

      <SummarySection darkMode={darkMode}/>

      <div className='my-5'></div>

      <FooterSection darkMode={darkMode}/>

      <br /><br /><br /><br />
    </div>
  );
}

function AvailableForWork() {
  return (
    <div className="inline-flex items-center justify-start space-x-2 bg-green-500/10 p-1 rounded-full whitespace-nowrap mb-2">
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
      className={`w-full p-4 flex items-center justify-center sm:justify-between ${darkMode ? 'bg-[#1A1A1A]' : 'bg-white'} z-[99]`}
      data-aos="fade-in"
    >
      {/* Left Section */}
      <div className="hidden sm:flex flex-col">
      </div>
      
      {/* Right Section (Buttons) */}
      <div className="flex flex-row">
        <button
          onClick={() => window.open(PUBLIC_URL + '/assets/Ruben_Resume.pdf', '_blank')}
          className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-4 py-2 border rounded-md ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-200'} mr-2`}
        >
          <FileText size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-600'}`} />
          <span className={`text-xs ${darkMode ? 'text-[#757575]' : 'text-gray-600'}`}>Resume</span>
        </button>
        
        <div className="relative">
          <button
            onClick={handleCopyEmail}
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-4 py-2 border rounded-md ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-200'} mr-2`}
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
          className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2EFF]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5`}
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

function AboutSection({ darkMode = false }) {
  return (
    <div data-aos="fade-in" className={`relative py-10 sm:py-16 ${darkMode ? '' : 'bg-white'}`}>


      {/* Content container */}
      <div className="relative z-10 px-8">
        {/* Available for work badge */}
        {/* <section id="available" className="mb-4">
          <AvailableForWork />
        </section> */}

        {/* Main hero section */}
        <section id="about" className="space-y-12">
          {/* Main heading */}
          <div className="relative">
            <h1 className={`font-light text-4xl sm:text-4xl md:text-6xl leading-[0.9] tracking-tight mb-6 flex flex-col gap-3 sm:gap-4 md:gap-1 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span>Fullstack Software</span>
              <span className={`font-extralight italic ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
                Developer
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-sm sm:text-lg font-light tracking-wide ${
              darkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Crafting digital experiences through code
            </p>
          </div>

          {/* Bio section */}
          <div className="space-y-6">
            <div className={`text-xs font-mono tracking-wider uppercase ${
              darkMode ? 'text-white/40' : 'text-gray-400'
            }`}>
              About
            </div>
            
            <div className={`space-y-6 leading-relaxed font-light text-xs md:text-base ${
              darkMode ? 'text-white/60' : 'text-gray-600'
            }`}>
              <p>
                I'm Ruben Dreyer, a passionate programmer based in Gauteng, South Africa. I earned my BSc in Information Technology from North West University, where I built a solid foundation in coding and problem-solving.
              </p>
              
              <p>
                My journey in programming began early, and I've dedicated myself to continuously improving my skills through challenging projects and ongoing learning in a fast-paced tech world.
              </p>
            </div>
          </div>

        </section>

        {/* Scroll down indicator */}
        <div className="pt-16 hidden sm:flex flex-col items-center space-y-3 mt-14">
          <div className={`w-16 h-px ${darkMode ? 'bg-white/30' : 'bg-gray-400'}`}></div>
          <span className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase ${
            darkMode ? 'text-white/40' : 'text-gray-400'
          }`}>
            Scroll Down
          </span>
          <div className={`w-px h-6 ${darkMode ? 'bg-gradient-to-b from-white/30 to-transparent' : 'bg-gradient-to-b from-gray-400 to-transparent'}`}></div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection({ darkMode }) {
  const experiences = [
    {
      role: 'Fullstack Web Developer',
      company: 'Ayni',
      dateRange: '2022 - 2025 Feb',
      logo: PUBLIC_URL + '/assets/Ayni-Logo.png'
    },
    {
      role: 'Wordpress Developer',
      company: "Glow Fit",
      dateRange: '13 Nov 2024 - 3 Jan 2025',
      logo: PUBLIC_URL + '/assets/Glowfit-logo.png'
    },
    {
      role: 'Fullstack C# Developer',
      company: "BCMTrac",
      dateRange: '7 April 2025',
      logo: PUBLIC_URL + '/assets/bcmtrac.png'
    },
    {
      role: 'Software Developer',
      company: "ArcelorMittal",
      dateRange: '1 September 2025 - Current',
      logo: PUBLIC_URL + '/assets/arcelormittal.png'
    }
  ];

  return (
    <section
      id="experience"
      className="w-full text-gray-800 p-4 flex flex-col"
    >
      <h1 
        className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}
      >
        Experience
      </h1>
      
      <div className="flex flex-col md:flex-row gap-4 flex-wrap">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${darkMode ? 'border-[#2E2E2E]' : 'border-gray-200'} border rounded-md p-4 flex flex-col md:w-[48%]`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="600"
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
      thumbnail: PUBLIC_URL + '/assets/Screener.png',
      id: "screener",
      video: true,
      streamURL: PUBLIC_URL + '/assets/ScreenerVideo/ScreenerVideo.m3u8',
      fallbackVideo: PUBLIC_URL +'/assets/ScreenerVideo/ScreenerVideo.mp4'
    },
    {
      title: "Chat App",
      description: "Interactive chat application",
      thumbnail: PUBLIC_URL + '/assets/Chat.jpg',
      id: "chat",
      video: true,
      streamURL: PUBLIC_URL + '/assets/ChatVideo/ChatVideo.m3u8',
      fallbackVideo: PUBLIC_URL + '/assets/ChatVideo/ChatVideo.mp4'
    },
    {
      title: "Nails By Dani",
      description: "Website portfolio",
      thumbnail: PUBLIC_URL + '/assets/Nails.jpg',
      id: "dani",
      video: false,
    },
    {
      title: "Trading Bot",
      description: "Automated bot that places orders",
      thumbnail: PUBLIC_URL + '/assets/TradingBot.jpg',
      id: "bot",
      video: false,
    },
    {
      title: "Safe Routes",
      description: "Find your way without the worry.",
      thumbnail: PUBLIC_URL + '/assets/SafeRoutes.jpg',
      id: "saferoutes",
      video: false,
    },
    {
      title: "Netflix",
      description: "Netflix clone using TMDB",
      thumbnail: PUBLIC_URL + '/assets/Netflix.png',
      id: "netflix",
      video: false,
    },
    {
      title: "Artificial Intelligence",
      description: "A reinforcement learning AI that plays Super Mario.",
      thumbnail: PUBLIC_URL + '/assets/SuperMario.jpg',
      id: "mario",
      video: true,
      streamURL: PUBLIC_URL + '/assets/MarioVideo/MarioVideo.m3u8',
      fallbackVideo: PUBLIC_URL + '/assets/MarioVideo/MarioVideo.mp4'
    },
  ];

  const [videoURL, setVideoURL] = useState(null);
  const [videoStreamURL, setVideoStreamURL] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  function handleOnClick(id) {
    const project = projects.find(p => p.id === id);

    if (id === "saferoutes") {
      const a = document.createElement("a");
      a.href = "https://github.com/RubenD582/Safe-Routes";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    } else if (project && project.video) {
      setShowVideo(true);
      setVideoURL(project.video ? project.fallbackVideo : null);
      setVideoStreamURL(project.streamURL);
    } else if (id === "dani") {
      const a = document.createElement("a");
      a.href = "https://nailsbydani.co.za";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    } else if (id === "netflix") {
      const a = document.createElement("a");
      a.href = "https://github.com/RubenD582/Netflix";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    }
  }

  // Custom video component with HLS streaming support
  const StreamableVideo = ({ src, streamSrc, ...props }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      console.log("Stream Source: ", streamSrc);
      const videoElement = videoRef.current;

      // Clean up any existing HLS instance
      let hls;

      if (streamSrc && Hls.isSupported()) {
        console.log("HLS.js supported, loading stream");
        hls = new Hls({
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          enableWorker: true,
        });

        hls.loadSource(streamSrc);
        hls.attachMedia(videoElement);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoElement.play();
        });

        hls.on(Hls.Events.FRAG_LOADING, () => {});

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS.js error:", data);
        });

      } else if (streamSrc && videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        console.log("Using native HLS support");
        // For Safari and native HLS support
        videoElement.src = streamSrc;
        videoElement.addEventListener('loadedmetadata', () => {
          console.log("STREAMING");
          videoElement.play();
        });
      }

      // Fallback to regular video source if no stream available
      if (!streamSrc) {
        videoElement.src = src;
      }

      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }, [src, streamSrc]);

    return (
      <video
        ref={videoRef}
        {...props}
      >
        {src && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <section id="projects" className="w-full text-gray-800 p-4 flex flex-col">

      <h1 
        className={`${darkMode ? 'text-white' : ''} font-medium text-[16px] mb-4`}
      >
        Project
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
            data-aos="zoom-out"
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
                    <Play color="white" fill="white" className="ml-1 opacity-80"/>
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

      {/* Video Modal with Streaming Support */}
      {showVideo && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[100]"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative">
            <StreamableVideo
              src={videoURL}
              streamSrc={videoStreamURL}
              preload="none"
              className="w-full md:h-[90vh] md:w-auto rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
              onLoadedMetadata={(e) => {
                const videoElement = e.target;
                if (videoElement.requestFullscreen) {
                  videoElement.requestFullscreen();
                } else if (videoElement.mozRequestFullScreen) { // Firefox
                  videoElement.mozRequestFullScreen();
                } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Edge
                  videoElement.webkitRequestFullscreen();
                } else if (videoElement.msRequestFullscreen) { // IE/Edge
                  videoElement.msRequestFullscreen();
                }
              }}
            />
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

      <div className="flex flex-col gap-4" data-aos="zoom-out">
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

      <div className="flex flex-col gap-4 mt-4" data-aos="zoom-out">
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
    { name: "Java", description: "Backend Development", logo: PUBLIC_URL + '/assets/Stack/Java.png', url:"https://www.java.com/en/" },
    { name: "Python", description: "AI & Automation", logo:  PUBLIC_URL + '/assets/Stack/Python.png', url:"https://www.python.org/" },
    { name: "Flutter", description: "Mobile Development", logo:  PUBLIC_URL + '/assets/Stack/Flutter.png', url:"https://flutter.dev/" },
    { name: "JavaScript", description: "Web Development", logo:  PUBLIC_URL + '/assets/Stack/JS.png', url:"https://www.javascript.com/" },
    { name: "Node.js", description: "Server-side Development", logo:  PUBLIC_URL + '/assets/Stack/NodeJS.png', url:"https://nodejs.org/en" },
    { name: "React", description: "Frontend Development", logo:  PUBLIC_URL + '/assets/Stack/React.png', url:"https://react.dev/" },
    { name: "C#", description: "Full-stack .NET", logo:  PUBLIC_URL + '/assets/Stack/CSharp.png', url:"https://dotnet.microsoft.com/en-us/languages/csharp" },
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
            data-aos="zoom-out"
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

      <div className="mt-10">
        <p className={`${darkMode ? 'text-[#757575]' : ''} text-sm font-light`}>
         Made with ❤️ in React
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
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5`}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "mailto:rdreyer523@gmail.com";
              a.click();
            }}            
          >
            <Mail size={14} className={`${darkMode ? 'text-[#757575]' : 'text-gray-400'}`} />
          </button>

          <button
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5`}
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
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5`}
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
            className={`${darkMode ? 'bg-[#1C1C1C] border-[#2E2E2E]' : 'border-gray-300'} flex items-center space-x-2 px-2 py-2 border rounded-md hover:bg-white/5`}
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
            src={PUBLIC_URL + '/assets/Signature.png'}
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
