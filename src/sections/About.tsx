import {
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si'

import {
  FaDatabase,
  FaCode,
} from 'react-icons/fa'
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>
          A developer who builds
          <span> with purpose.</span>
        </h2>
      </div>

      <div className="about-grid">

        <div className="about-story">
          <h3>Hi, I'm Shobit Kumar.</h3>

          <p>
    I'm a Software Developer with 8 months of professional
    experience as a Full Stack Developer at
    <strong> Mojija E-Commerce Pvt. Ltd.</strong>
  </p>

  <p>
    During my time there, I worked on Kaira Billing Software,
    a jewellery retail management application designed to
    simplify daily billing, stock tracking, and inventory
    management.
  </p>

  <p>
    My primary contribution was enhancing the existing
    application by developing business-focused modules,
    including Low Stock Management, Karigar Repair Management,
    Old Repair Metal Management, Kitty Management, and CRM.
  </p>

  <p>
    I enjoy understanding business requirements, solving
    practical problems, and turning ideas into reliable
    software solutions.
  </p>
        </div>

        <aside className="about-card">
        <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>

  <div className="experience-number">08</div>
  <p>Months of professional experience</p>

  <h3>Full Stack Developer</h3>

  <p><strong>Mojija E-Commerce Pvt. Ltd.</strong></p>

  <p>Product: Kaira Billing Software</p>

  <h4>TECHNOLOGIES USED</h4>

  <div className="about-tags">
  <span>
    <SiDotnet className="tech-icon" color="#512BD4" />
    .NET Framework
  </span>

  <span>
    <SiMysql className="tech-icon" color="#4479A1" />
    MySQL
  </span>

  <span>
    <FaDatabase className="tech-icon" />
    Dapper
  </span>

  <span>
    <FaCode className="tech-icon" />
    REST APIs
  </span>
</div>
        </aside>

      </div>

      <div className="learning-card">
         <h3>Exploring the MERN Stack</h3>

  <p>
    I'm currently expanding my full-stack development
    skills by learning MongoDB, Express.js, React,
    and Node.js. I'm also strengthening my TypeScript
    skills through hands-on projects and practical
    application development.
  </p>

  <div className="about-tags">
  <span>
    <SiMongodb className="tech-icon" color="#47A248" />
    MongoDB
  </span>

  <span>
    <SiExpress className="tech-icon" />
    Express.js
  </span>

  <span>
    <SiReact className="tech-icon" color="#61DAFB" />
    React
  </span>

  <span>
    <SiNodedotjs className="tech-icon" color="#5FA04E" />
    Node.js
  </span>

  <span>
    <SiTypescript className="tech-icon" color="#3178C6" />
    TypeScript
  </span>
</div>

      </div>

    </section>
  )
}

export default About