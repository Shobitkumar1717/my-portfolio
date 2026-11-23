import './App.css'
import About from './sections/About'
import Skills from './sections/Skills'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import Contact from './sections/Contact'


function App() {
  return (
    <div className="portfolio" id="home">

     
      <Navbar
        name="SHOBIT KUMAR"
        email="your.yadavshobhit84@gmail.com"
      />
     

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              DEVELOPER PORTFOLIO
            </p>

            <h1>
              Building reliable
              <br />
              software, <span>one idea</span>
              <br />
              <span>at a time.</span>
            </h1>

            <p className="hero-description">
              I'm a developer interested in building reliable
              backend systems and modern web experiences
              using C#, .NET, React and TypeScript.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-secondary" href="#about">
                About me
              </a>
            </div>

            <div className="tech-summary">
              <div>
                <span className="summary-label">BACKEND</span>
                <span className="summary-value">C# · .NET · REST APIs</span>
              </div>

              <div>
                <span className="summary-label">FRONTEND</span>
                <span className="summary-value">React · TypeScript</span>
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <div className="card-topline">
              <span className="status-dot"></span>
              CURRENT FOCUS
            </div>

            <div className="card-monogram">SHOBIT KUMAR<span>.</span></div>

            <h2>
              Curious by nature.
              <br />
              Developer by practice.
            </h2>

            <p>
              Learning by building real projects
              and improving with every iteration.
            </p>

            <div className="tech-tags">
              <span>C#,Java</span>
              <span>.NET, Spring Boot</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
          </aside>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
          
        <section className="approach-strip" >
          <span>MY APPROACH</span>
          <p>Understand the problem. Build with purpose. Keep learning.</p>
        </section>

      </main>
    </div>
  )
}

export default App