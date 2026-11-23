type NavbarProps = {
  name: string
  email: string
}

function Navbar({ name, email }: NavbarProps) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        {name}<span>.</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-cta" href={`mailto:${email}`}>
        Let's talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar