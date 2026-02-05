'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      <header>
        <nav>
          <div className="logo">
            <Link href="/">
              <Image src="/mblogo.jpg" alt="Logo" height={50} width={50} />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="active"><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/cv">CV</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="mode-toggle-container">
            <button 
              id="mode-toggle" 
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content section-animate">
          <h1>Hello</h1>
          <div className="h2-btn-container">
            <h2>Welcome to my website. Meet me and my work.</h2>
            <Link href="/portfolio" className="btn">Browse My Work</Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image section-animate">
              <Image src="/foto.jpg" alt="My Photo" width={400} height={400} />
            </div>
            <div className="bio-content section-animate">
              <h2>About Me</h2>
              <p><b>BIO: </b>Passionate designer from PL to DK</p>
              <p><b>What I do: </b>product design, web development, sustainable design</p>
              <p><b>Mission: </b>I aim to drive innovation in user-centered design.</p>
              <Link href="/cv" className="btn hover-lift">Go to my CV</Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section className="work-section">
        <div className="container">
          <h2>My Work</h2>
          <div className="work-grid">
            <div className="work-item hover-lift section-animate">
              <Link href="/projects/1" className="work-item-link">
                <div className="work-image">
                  <Image src="/proj.jpg" alt="Project 1" width={300} height={200} />
                  <div className="work-overlay">
                    <div className="work-view-text">
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="work-info">
                  <h3>Project One</h3>
                  <p>A brief description of the project and what it entails.</p>
                </div>
              </Link>
            </div>
            
            <div className="work-item hover-lift section-animate">
              <Link href="/projects/2" className="work-item-link">
                <div className="work-image">
                  <Image src="/placeholder.svg" alt="Project 2" width={300} height={200} />
                  <div className="work-overlay">
                    <div className="work-view-text">
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="work-info">
                  <h3>Project Two</h3>
                  <p>A brief description of the project and what it entails.</p>
                </div>
              </Link>
            </div>
            
            <div className="work-item hover-lift section-animate">
              <Link href="/projects/3" className="work-item-link">
                <div className="work-image">
                  <Image src="/placeholder.svg" alt="Project 3" width={300} height={200} />
                  <div className="work-overlay">
                    <div className="work-view-text">
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="work-info">
                  <h3>Project Three</h3>
                  <p>A brief description of the project and what it entails.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="center-btn">
            <Link href="/portfolio" className="btn">See More From My Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-image section-animate">
              <Image src="/contact_image.jpg" alt="Contact Image" width={400} height={400} />
            </div>
            <div className="contact-form-container section-animate">
              <form id="mini-contact-form">
                <div className="form-group">
                  <label htmlFor="contact">How do I contact you back?</label>
                  <input type="text" id="contact" name="contact" placeholder="Email, phone, or social media" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="How can we work together?" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <h3>Malgorzata Bilejszys</h3>
            <p>Email: <a href="mailto:malgorzata.bilejszys@gmail.com">malgorzata.bilejszys@gmail.com</a></p>
          </div>
          
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/cv">CV</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Malgorzata Bilejszys. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
