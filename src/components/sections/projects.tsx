import { projects } from '@/lib/data';
import { ProjectItem } from '@/components/ui/project-item';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on, demonstrating my skills in Flutter and mobile development.
          </p>
        </AnimatedSection>
        
        {/* TODO: Add filter controls here if desired in the future */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150}>
              <ProjectItem project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
