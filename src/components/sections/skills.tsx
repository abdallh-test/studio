import { skillCategories } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle2 } from 'lucide-react';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A breakdown of my expertise across different areas of development, from frontend to backend and tools.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 150}>
              <Card className="h-full transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                  <category.Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-2xl text-foreground">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
