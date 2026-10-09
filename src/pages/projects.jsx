 import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

import { usePageTitle } from '../hooks/usePageTitle'
import './Projects.css'
export default function Projects() {
  usePageTitle('Projects')

  return (
    <div className="container">
      <PageHeader
        eyebrow="Projects"
        title="Things I have built."
        text="Websites and software I made for clients and for class."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}