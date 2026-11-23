type Project = {
  id: number
  title: string
  category: string
  description: string
  contributions: string[]
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kaira Billing Software",
    category: "Jewellery Retail Management",

    description:
      "A jewellery retail management application designed to simplify daily billing, stock tracking and inventory operations.",

    contributions: [
      "Low Stock Management",
      "Karigar Repair Management",
      "Old Repair Metal Management",
      "Kitty Management",
      "CRM Module"
    ],

    technologies: [
      ".NET Framework",
      "MySQL",
      "Dapper",
      "REST APIs"
    ]
  }
]

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">
        <p className="eyebrow">03 / SELECTED WORK</p>

        <h2>Things I've worked on.</h2>

        <p>
          Building practical solutions through software development.
        </p>
      </div>

      <div className="projects-grid">

        {/* OUTER MAP: Projects */}

        {projects.map((project) => (

          <article className="project-card" key={project.id}>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <h4>MY CONTRIBUTIONS</h4>

            {/* INNER MAP: Contributions */}

            <ul className="contribution-list">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>TECHNOLOGIES</h4>

            {/* INNER MAP: Technologies */}

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Projects