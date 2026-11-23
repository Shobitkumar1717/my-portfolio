
import type { IconType } from 'react-icons'

import {
  SiSharp,
  SiDotnet,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si'

import {
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaCode,
} from 'react-icons/fa'

// Step 1: Define skill data structure

type Skill = {
  name: string
  icon: IconType
  color: string
}

type SkillGroup = {
  title: string
  skills: Skill[]
}

// Step 2: Store all skill categories and their data

const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C#', icon: SiSharp, color: '#9B4F96' },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: '.NET Framework', icon: SiDotnet, color: '#512BD4' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    ],
  },
  {
    title: 'Database & APIs',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Dapper', icon: FaDatabase, color: '#B7F397' },
      { name: 'REST APIs', icon: FaNetworkWired, color: '#B7F397' },
    ],
  },
  {
    title: 'Currently Learning - MERN',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        icon: FaCode,
        color: '#B7F397',
      },
    ],
  },
]

// Step 3: Create Skills component

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-heading">
        <p className="eyebrow">02 / TECHNICAL SKILLS</p>
        <h2>Tools I work with.</h2>
        <p>Technologies and tools I use to build software and solve problems.</p>
      </div>

      <div className="skills-grid">

        {/* Outer map: Render skill categories */}

        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skill-items">

              {/* Inner map: Render individual technologies */}

              {group.skills.map((skill) => {
                const Icon = skill.icon

                return (
                  <div className="skill-item" key={skill.name}>
                    <Icon size={24} color={skill.color} />
                    <span>{skill.name}</span>
                  </div>
                )
              })}

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

// Step 4: Export component

export default Skills
