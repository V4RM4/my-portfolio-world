import { useGameStore } from "../store";
import { useEffect, useState } from "react";
import "./TextDisplay.css";

export const TextDisplay = () => {
    const showMenuText = useGameStore((state) => state.showMenuText);
    const activeMenuItem = useGameStore((state) => state.activeMenuItem);
    
    const [isVisible, setIsVisible] = useState(false);
    const [displayTitle, setDisplayTitle] = useState("");

    useEffect(() => {
        if (showMenuText) {
            setDisplayTitle(activeMenuItem);
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [showMenuText, activeMenuItem]);

    // Prevent scroll events from propagating to the background
    const handleWheel = (e) => {
        e.stopPropagation();
    };

    const handleTouchMove = (e) => {
        e.stopPropagation();
    };

    // Function to render content based on menu item
    const renderContent = () => {
        switch (activeMenuItem) {
            case "About Me":
                return (
                    <div>
                        <p><strong>Vaisakh Suresh</strong></p>
                        <p>Toronto, ON</p>
                        <p><a href="https://linkedin.com/in/vaisakhsvarma" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/V4RM4" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        <br />
                        <p>I'm a passionate Full Stack Developer with extensive experience in mobile and web development. Currently pursuing a Post Graduate Certificate in Information Technology Solutions at Humber Polytechnic with a 92.3% GPA.</p>
                        <p>My journey spans from leading backend initiatives in healthcare to developing wellness mobile apps, with expertise in React Native, Ruby on Rails, AWS, and modern web technologies.</p>
                        <p>I'm driven by creating innovative solutions and bringing ideas to life through clean, efficient code.</p>
                    </div>
                );
            
            case "Education":
                return (
                    <div>
                        <p><strong>Post Graduate Certificate, Information Technology Solutions (2024-2025)</strong><br />
                        Humber Polytechnic, Toronto ON | GPA: 92.3% | Academic Standing: Honors</p>
                        <br />
                        <p><strong>Bachelor of Science, Computer Science (2016-2019)</strong><br />
                        University of Kerala, India</p>
                        <br />
                        <p>My educational journey has provided me with a strong foundation in computer science principles, advanced IT solutions, and practical development skills that I apply in real-world projects.</p>
                    </div>
                );
            
            case "Experience":
                return (
                    <div>
                        <p><strong>Tabi Wellness App | Mobile App Developer (Co-op)</strong> (May 2025-Aug 2025)</p>
                        <ul>
                            <li>Developing wellness mobile app using React Native, Expo, and Firebase</li>
                            <li>Implementing core features and UI/UX from Figma design specifications</li>
                            <li>Comprehensive testing on physical and simulated devices</li>
                            <li>Collaborating in agile framework using ClickUp with weekly standups</li>
                            <li>Working on release pipeline from beta to Google Play Store Early Access</li>
                        </ul>
                        <br />
                        <p><strong>GeoSnapShot | Full Stack Engineer</strong> (2022-2023)</p>
                        <ul>
                            <li>Led full-stack development for SaaS sports photography platform</li>
                            <li>Utilized Ruby on Rails, PostgreSQL, React, JavaScript, TypeScript, AWS</li>
                            <li>Successfully upgraded Ruby on Rails from version 4 to 7</li>
                            <li>Managed Docker images and GitHub Actions for AWS deployment</li>
                            <li>Conducted comprehensive testing using RSpec</li>
                        </ul>
                        <br />
                        <p><strong>Ontash | Junior Software Programmer</strong> (2020-2022)</p>
                        <ul>
                            <li>Led backend engineering using Ruby on Rails for American healthcare</li>
                            <li>Designed RESTful APIs for Electronic Data Interchange (EDI)</li>
                            <li>Ensured HIPAA compliance for sensitive data management</li>
                            <li>Developed web scraping APIs using Selenium and Rails</li>
                            <li>Led team of 3 developers, received Best Employee Award 2022</li>
                        </ul>
                    </div>
                );
            
            case "Skills":
                return (
                    <div>
                        <p><strong>Development Technologies:</strong><br />
                        HTML, CSS, JavaScript, TypeScript, React, Next.js, Express.js, Ruby on Rails, React Native, Android Development (Kotlin), iOS Development (SwiftUI), Python, REST APIs, JSON, MVC, AWS, Docker</p>
                        <br />
                        <p><strong>Databases:</strong><br />
                        PostgreSQL, MySQL, Microsoft SQL Server, Oracle DB, No-SQL, RDBMS, PL/SQL</p>
                        <br />
                        <p><strong>Tools & Methodologies:</strong><br />
                        Agile, Atlassian (Jira, Confluence, Bitbucket), Expo, Figma, Firebase, GitHub Actions, Postman, RSpec, RubyGems, SDLC, Tableau Desktop, Weka for ML, ClickUp</p>
                        <br />
                        <p><strong>Business & Soft Skills:</strong><br />
                        Creative Problem Solving, Teamwork, Leadership, Multi-tasking, Physical & Digital Marketing, Mailchimp, CRM (SugarCRM, Leadsquared), Communication & Networking, HIPAA compliance</p>
                    </div>
                );
            
            case "Projects":
                return (
                    <div>
                        <p><strong>Featured Projects:</strong></p>
                        <ul>
                            <li><strong>3D Portfolio World</strong> - Interactive portfolio using Three.js and React</li>
                            <li><strong>Tabi Wellness App</strong> - React Native mobile app with Firebase backend</li>
                            <li><strong>GeoSnapShot Platform</strong> - Full-stack SaaS for sports photography</li>
                            <li><strong>Healthcare EDI APIs</strong> - Ruby on Rails APIs for healthcare data interchange</li>
                            <li><strong>Editrix Ruby Gem</strong> - Healthcare EDI parser with 2,600+ downloads on RubyGems.org</li>
                        </ul>
                        <br />
                        <p><strong>Open Source Impact:</strong></p>
                        <p>My Ruby gem "editrix" for parsing Healthcare Eligibility Response (271) ASC X12 EDI data has achieved significant adoption in the healthcare industry with over 2,600 downloads, demonstrating real-world impact and community trust.</p>
                        <p>Explore more of my projects and contributions on <a href="https://github.com/V4RM4" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        <br />
                        <p>Each project demonstrates different aspects of my technical skills including mobile development, web applications, API design, and system architecture. I focus on creating scalable, maintainable solutions that solve real-world problems.</p>
                    </div>
                );
            
            case "Achievements":
                return (
                    <div>
                        <p><strong>Academic Excellence:</strong></p>
                        <ul>
                            <li>Dean's Honor Roll – Winter & Summer 2024, Winter 2025 | Humber Polytechnic</li>
                            <li>DMG Mori Leadership Scholarship, 2025</li>
                            <li>Current GPA: 92.3% with Honors Standing</li>
                        </ul>
                        <br />
                        <p><strong>Professional Recognition:</strong></p>
                        <ul>
                            <li>Best Employee Award – 2022 | Junior Software Programmer, Ontash</li>
                            <li>Successful Ruby on Rails version upgrade (4 to 7)</li>
                            <li>Published "Editrix" Ruby Gem - 2,600+ downloads on RubyGems.org</li>
                            <li>Led team of 3 developers with successful project deliveries</li>
                        </ul>
                        <br />
                        <p><strong>Open Source Impact:</strong></p>
                        <ul>
                            <li>Editrix gem: Healthcare EDI parser trusted by 2,600+ developers</li>
                            <li>Contributing to healthcare technology infrastructure</li>
                        </ul>
                        <br />
                        <p><strong>Volunteer Leadership:</strong></p>
                        <ul>
                            <li>Vice President (Operations) – Humber Society of Accounting Students (HSAS), 2024-</li>
                            <li>Multiple volunteer roles at Science Rendezvous, University of Guelph-Humber</li>
                            <li>Peer Mentoring & Student Life Volunteer, Humber Polytechnic</li>
                        </ul>
                    </div>
                );
            
            case "Contact":
                return (
                    <div>
                        <p>Let's connect! I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology and development.</p>
                        <br />
                        <p><strong>Get in touch:</strong></p>
                        <ul>
                            <li><a href="https://linkedin.com/in/vaisakhsvarma" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                            <li><a href="https://github.com/V4RM4" target="_blank" rel="noopener noreferrer">github.com/V4RM4</a></li>
                            <li>Toronto, ON, CA</li>
                        </ul>
                        <br />
                        <p><strong>Or send me a message directly:</strong></p>
                        <div style={{ 
                            margin: '20px 0', 
                            border: '1px solid #ddd', 
                            borderRadius: '8px', 
                            overflow: 'hidden',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLScK_f7DF_fPqwIct3uniV8sSnMfpGychuEr9WjXAm1l6yCVVA/viewform?embedded=true" 
                                width="100%" 
                                height="600"
                                title="Contact Form"
                                style={{ border: 'none' }}
                            >
                                Loading contact form...
                            </iframe>
                        </div>
                    </div>
                );
            
            default:
                return <p>Explore this section to learn more!</p>;
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`text-display ${isVisible ? 'visible' : ''}`}>
            <div 
                className="text-display-content"
                onWheel={handleWheel}
                onTouchMove={handleTouchMove}
            >
                <div className="text-display-header">
                    <h3 className="text-display-title">{displayTitle}</h3>
                </div>
                <div className="text-display-description">
                    {renderContent()}
                </div>
                <div className="text-display-prompt">
                    <span className="prompt-text">Move away to continue exploring</span>
                    <span className="prompt-blink">_</span>
                </div>
            </div>
        </div>
    );
};
