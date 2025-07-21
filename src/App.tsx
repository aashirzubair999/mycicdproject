import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Code, Database, Cloud, Terminal, Github, Linkedin, Mail, MapPin, User, Briefcase, Award, Phone, Menu, X, ChevronDown, Zap, Cpu, Server, Globe, Shield, Star, Sparkles, Rocket, CloudLightning as Lightning, Brain, Eye, Heart, Target, Layers, Hexagon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techStack = {
    languages: [
      { name: 'C#', level: 95, icon: '💎', color: '#239120' },
      { name: 'SQL', level: 90, icon: '🗃️', color: '#336791' },
      { name: 'C++', level: 85, icon: '⚡', color: '#00599C' },
      { name: 'HTML', level: 90, icon: '🌐', color: '#E34F26' },
      { name: 'CSS', level: 85, icon: '🎨', color: '#1572B6' }
    ],
    frameworks: [
      { name: '.NET Core 7', level: 95, icon: '🔧', color: '#512BD4' },
      { name: 'Blazor', level: 90, icon: '⚡', color: '#512BD4' },
      { name: 'Web API', level: 90, icon: '🔗', color: '#61DAFB' },
      { name: 'Bootstrap', level: 85, icon: '📱', color: '#7952B3' }
    ],
    databases: [
      { name: 'MS SQL Server', level: 90, icon: '🏢', color: '#CC2927' },
      { name: 'MySQL', level: 80, icon: '🐬', color: '#4479A1' }
    ],
    cloud: [
      { name: 'AWS EC2', level: 75, icon: '☁️', color: '#FF9900' },
      { name: 'AWS S3', level: 70, icon: '📦', color: '#FF9900' },
      { name: 'Linux', level: 80, icon: '🐧', color: '#FCC624' },
      { name: 'CI/CD', level: 75, icon: '🔄', color: '#2088FF' }
    ]
  };

  const projects = [
    {
      title: "University Content Management System",
      description: "Full-stack academic platform with role-based access control and advanced analytics",
      tech: [".NET Core", "Blazor", "SQL Server", "Bootstrap"],
      status: "Production",
      icon: <Brain size={24} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable online shopping solution with payment integration and real-time inventory",
      tech: ["Web API", "Bootstrap", "MySQL", "AWS"],
      status: "Completed",
      icon: <Target size={24} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD deployment using AWS services with monitoring and scaling",
      tech: ["AWS EC2", "S3", "Linux", "Docker"],
      status: "Active",
      icon: <Rocket size={24} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const SkillBar = ({ name, level, icon, color }: { name: string; level: number; icon: string; color: string }) => (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <span className="skill-icon me-2" style={{ color }}>{icon}</span>
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-fill" 
          style={{ 
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}40, ${color})`
          }}
        ></div>
      </div>
    </div>
  );

  const TechCard = ({ icon: Icon, title, skills, gradient }: { 
    icon: any; 
    title: string; 
    skills: Array<{name: string, level: number, icon: string, color: string}>; 
    gradient: string;
  }) => (
    <div className="col-lg-6 col-xl-3 mb-4">
      <div className="tech-card ultra-glass-card h-100">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="tech-icon-wrapper" style={{ background: gradient }}>
              <Icon size={24} />
            </div>
            <h5 className="card-title mb-0 ms-3 text-white">{title}</h5>
          </div>
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} icon={skill.icon} color={skill.color} />
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div className="col-lg-4 mb-4">
      <div className="project-card ultra-glass-card h-100 project-hover-effect" style={{ animationDelay: `${index * 0.2}s` }}>
        <div className="project-glow" style={{ background: project.gradient }}></div>
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="project-icon" style={{ background: project.gradient }}>
              {project.icon}
            </div>
            <span className={`status-badge ultra-badge ${project.status.toLowerCase()}`}>
              <Sparkles size={12} className="me-1" />
              {project.status}
            </span>
          </div>
          <h5 className="project-title text-white mb-3">{project.title}</h5>
          <p className="project-description text-light-gray mb-4">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech: string, techIndex: number) => (
              <span key={techIndex} className="tech-tag ultra-tech-tag me-2 mb-2">
                <Star size={10} className="me-1" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ultra-futuristic-portfolio">
      {/* Dynamic Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      {/* Ultra Animated Background */}
      <div className="ultra-animated-bg">
        <div className="neural-network">
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
          <div className="neural-node"></div>
        </div>
        <div className="floating-particles">
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
          <div className="particle ultra-particle"></div>
        </div>
        <div className="energy-waves">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      {/* Ultra Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top ultra-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand ultra-brand" href="#home">
            <div className="brand-icon">
              <Hexagon size={24} />
            </div>
            <div className="brand-content">
              <span className="brand-text">Muhammad Aashir</span>
              <span className="brand-subtitle">.NET Developer</span>
            </div>
          </a>
          
          <button 
            className="navbar-toggler ultra-toggler border-0" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="toggler-icon">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#home">
                  <div className="nav-icon"><User size={16} /></div>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#about">
                  <div className="nav-icon"><Eye size={16} /></div>
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#skills">
                  <div className="nav-icon"><Zap size={16} /></div>
                  <span>Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#projects">
                  <div className="nav-icon"><Briefcase size={16} /></div>
                  <span>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#experience">
                  <div className="nav-icon"><Award size={16} /></div>
                  <span>Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ultra-nav-link" href="#contact">
                  <div className="nav-icon"><Phone size={16} /></div>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Ultra Hero Section */}
      <section id="home" className="ultra-hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge ultra-badge mb-4">
                  <MapPin size={16} className="me-2" />
                  <span>Islamabad, Pakistan</span>
                  <div className="badge-glow"></div>
                </div>
                <h1 className="ultra-hero-title mb-4">
                  <span className="title-line">Hi, I'm</span>
                  <span className="title-name ultra-gradient-text">Muhammad Aashir</span>
                  <div className="title-decoration">
                    <Lightning size={40} />
                  </div>
                </h1>
                <h2 className="ultra-hero-subtitle mb-4">
                  <span className="typing-effect">.NET Developer & Full-Stack Engineer</span>
                </h2>
                <p className="ultra-hero-description mb-5">
                  Building <span className="highlight-text">robust</span> and <span className="highlight-text">scalable</span> web applications with .NET Core, Blazor, and modern technologies. 
                  Transforming ideas into <span className="highlight-text">powerful digital solutions</span>.
                </p>
                <div className="ultra-hero-actions">
                  <a href="#about" className="ultra-btn ultra-btn-primary btn-lg me-3">
                    <div className="btn-icon"><Zap size={20} /></div>
                    <span>Explore My Work</span>
                    <div className="btn-glow"></div>
                  </a>
                  <a href="#contact" className="ultra-btn ultra-btn-outline btn-lg">
                    <div className="btn-icon"><Mail size={20} /></div>
                    <span>Get In Touch</span>
                    <div className="btn-glow"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ultra-hero-visual">
                <div className="hologram-container">
                  <div className="hologram-ring"></div>
                  <div className="hologram-ring"></div>
                  <div className="hologram-ring"></div>
                  <div className="central-core">
                    <Cpu size={60} />
                  </div>
                </div>
                <div className="floating-tech-elements">
                  <div className="tech-orb" style={{ '--delay': '0s' } as React.CSSProperties}>
                    <Database size={30} />
                    <span>.NET Core</span>
                  </div>
                  <div className="tech-orb" style={{ '--delay': '1s' } as React.CSSProperties}>
                    <Server size={30} />
                    <span>SQL Server</span>
                  </div>
                  <div className="tech-orb" style={{ '--delay': '2s' } as React.CSSProperties}>
                    <Cloud size={30} />
                    <span>AWS</span>
                  </div>
                  <div className="tech-orb" style={{ '--delay': '3s' } as React.CSSProperties}>
                    <Shield size={30} />
                    <span>Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ultra-scroll-indicator">
            <div className="scroll-line"></div>
            <ChevronDown size={24} />
            <div className="scroll-text">Scroll to explore</div>
          </div>
        </div>
      </section>

      {/* Ultra About Section */}
      <section id="about" className="ultra-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ultra-section-header text-center mb-5">
                <div className="section-icon">
                  <Heart size={40} />
                </div>
                <h2 className="ultra-section-title">👋 About Me</h2>
                <p className="ultra-section-subtitle">Passionate developer crafting digital experiences</p>
                <div className="section-decoration"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="ultra-about-card ultra-glass-card">
                <div className="card-glow"></div>
                <div className="card-body p-5">
                  <div className="about-content">
                    <p className="ultra-about-text mb-4">
                      Hi, I'm <span className="highlight-text">Muhammad Aashir</span>, a passionate and results-driven .NET Developer based in Islamabad, Pakistan. 
                      I specialize in building <span className="highlight-text">robust and scalable</span> web applications using .NET Core 7, Blazor, and MS SQL Server, 
                      following clean 3-tier architecture principles.
                    </p>
                    <p className="ultra-about-text mb-4">
                      I've developed a range of <span className="highlight-text">full-stack projects</span>—from university academic content management systems to 
                      e-commerce platforms—with a strong focus on <span className="highlight-text">performance, security, and user experience</span>. My work integrates 
                      role-based access control, RESTful APIs, and responsive UIs using Bootstrap.
                    </p>
                    <p className="ultra-about-text mb-0">
                      Beyond development, I'm actively exploring <span className="highlight-text">DevOps tools</span> like AWS EC2, S3, and CI/CD pipelines, and I'm 
                      comfortable working in Linux-based environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Skills Section */}
      <section id="skills" className="ultra-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ultra-section-header text-center mb-5">
                <div className="section-icon">
                  <Layers size={40} />
                </div>
                <h2 className="ultra-section-title">🔧 Tech Stack</h2>
                <p className="ultra-section-subtitle">Technologies I work with</p>
                <div className="section-decoration"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <TechCard 
              icon={Code} 
              title="Languages" 
              skills={techStack.languages}
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
            <TechCard 
              icon={Terminal} 
              title="Frameworks & Tools" 
              skills={techStack.frameworks}
              gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />
            <TechCard 
              icon={Database} 
              title="Databases" 
              skills={techStack.databases}
              gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            />
            <TechCard 
              icon={Cloud} 
              title="Cloud & DevOps" 
              skills={techStack.cloud}
              gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            />
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="ultra-tools-section ultra-glass-card">
                <div className="card-glow"></div>
                <div className="card-body p-4">
                  <h3 className="text-center mb-4 text-white">Other Tools & Technologies</h3>
                  <div className="ultra-tools-grid">
                    {['Visual Studio', 'VS Code', 'Git', 'SSMS', 'Postman', 'GitHub'].map((tool, index) => (
                      <div key={index} className="ultra-tool-item" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="tool-glow"></div>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Projects Section */}
      <section id="projects" className="ultra-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ultra-section-header text-center mb-5">
                <div className="section-icon">
                  <Target size={40} />
                </div>
                <h2 className="ultra-section-title">💼 Featured Projects</h2>
                <p className="ultra-section-subtitle">Some of my recent work</p>
                <div className="section-decoration"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Experience Section */}
      <section id="experience" className="ultra-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ultra-section-header text-center mb-5">
                <div className="section-icon">
                  <Award size={40} />
                </div>
                <h2 className="ultra-section-title">🏆 Experience & Expertise</h2>
                <p className="ultra-section-subtitle">My professional journey</p>
                <div className="section-decoration"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="ultra-experience-timeline">
                <div className="timeline-line"></div>
                
                <div className="ultra-timeline-item ultra-glass-card">
                  <div className="timeline-glow"></div>
                  <div className="timeline-content p-4">
                    <div className="ultra-timeline-badge">
                      <Server size={20} />
                      <div className="badge-pulse"></div>
                    </div>
                    <h4 className="text-white mb-2">Full-Stack Development</h4>
                    <p className="text-light-gray mb-3">
                      Specialized in building end-to-end web applications using .NET Core 7, Blazor, and modern web technologies.
                    </p>
                    <div className="ultra-timeline-skills">
                      <span className="ultra-skill-badge">3-Tier Architecture</span>
                      <span className="ultra-skill-badge">RESTful APIs</span>
                      <span className="ultra-skill-badge">Role-Based Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="ultra-timeline-item ultra-glass-card">
                  <div className="timeline-glow"></div>
                  <div className="timeline-content p-4">
                    <div className="ultra-timeline-badge">
                      <Globe size={20} />
                      <div className="badge-pulse"></div>
                    </div>
                    <h4 className="text-white mb-2">Web Development</h4>
                    <p className="text-light-gray mb-3">
                      Creating responsive and user-friendly interfaces with Bootstrap, focusing on performance and accessibility.
                    </p>
                    <div className="ultra-timeline-skills">
                      <span className="ultra-skill-badge">Responsive Design</span>
                      <span className="ultra-skill-badge">UI/UX</span>
                      <span className="ultra-skill-badge">Performance</span>
                    </div>
                  </div>
                </div>
                
                <div className="ultra-timeline-item ultra-glass-card">
                  <div className="timeline-glow"></div>
                  <div className="timeline-content p-4">
                    <div className="ultra-timeline-badge">
                      <Cloud size={20} />
                      <div className="badge-pulse"></div>
                    </div>
                    <h4 className="text-white mb-2">DevOps & Cloud</h4>
                    <p className="text-light-gray mb-3">
                      Exploring modern DevOps practices with AWS services, CI/CD pipelines, and Linux environments.
                    </p>
                    <div className="ultra-timeline-skills">
                      <span className="ultra-skill-badge">AWS EC2</span>
                      <span className="ultra-skill-badge">CI/CD</span>
                      <span className="ultra-skill-badge">Linux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Contact Section */}
      <section id="contact" className="ultra-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ultra-section-header text-center mb-5">
                <div className="section-icon">
                  <Rocket size={40} />
                </div>
                <h2 className="ultra-section-title">🚀 Get In Touch</h2>
                <p className="ultra-section-subtitle">Let's build something amazing together</p>
                <div className="section-decoration"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ultra-contact-card ultra-glass-card">
                <div className="card-glow"></div>
                <div className="card-body p-5 text-center">
                  <p className="ultra-contact-text mb-5">
                    I'm always open to discussing <span className="highlight-text">new opportunities</span>, interesting projects, or just having a chat about technology!
                  </p>
                  <div className="ultra-contact-actions">
                    <a href="mailto:muhammad.aashir@example.com" className="ultra-contact-btn">
                      <div className="contact-icon">
                        <Mail size={24} />
                      </div>
                      <span>Email Me</span>
                      <div className="contact-glow"></div>
                    </a>
                    <a href="https://linkedin.com/in/muhammad-aashir" className="ultra-contact-btn">
                      <div className="contact-icon">
                        <Linkedin size={24} />
                      </div>
                      <span>LinkedIn</span>
                      <div className="contact-glow"></div>
                    </a>
                    <a href="https://github.com/muhammad-aashir" className="ultra-contact-btn">
                      <div className="contact-icon">
                        <Github size={24} />
                      </div>
                      <span>GitHub</span>
                      <div className="contact-glow"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Footer */}
      <footer className="ultra-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-content">
                <div className="footer-icon">
                  <Heart size={20} />
                </div>
                <p className="ultra-footer-text">&copy; 2025 Muhammad Aashir. Crafted with passion and code.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;