import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Award, Briefcase, Lightbulb, Users } from 'lucide-react';

const AboutStat = ({ Icon, value, label }: { Icon: React.ElementType, value: string, label: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-card/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <Icon className="h-10 w-10 text-primary mb-2" />
    <p className="text-2xl font-bold text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover my journey into Flutter development, my professional background, and what drives my passion for creating innovative mobile solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <Image
              src="https://placehold.co/500x600.png"
              alt="Abdallh working"
              width={500}
              height={600}
              className="rounded-xl shadow-2xl object-cover aspect-[5/6]"
              data-ai-hint="developer coding"
              unoptimized
            />
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="space-y-6">
            <h3 className="font-headline text-3xl font-semibold text-foreground">My Story & Experience</h3>
            <p className="text-muted-foreground leading-relaxed">
              From a young age, I was captivated by technology and its potential to solve real-world problems. My journey into software development began with a curiosity for how applications are built, which quickly evolved into a passion for mobile development. Discovering Flutter was a game-changer; its ability to create natively compiled applications for mobile, web, and desktop from a single codebase resonated deeply with my desire for efficiency and beautiful UIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the past <span className="text-primary font-semibold">[Number]</span> years, I&apos;ve honed my skills in Dart and Flutter, working on diverse projects ranging from e-commerce platforms to social networking apps. I thrive in collaborative environments and am always eager to learn new technologies and best practices to deliver top-notch mobile experiences. My focus is not just on writing code, but on understanding user needs and translating them into intuitive and engaging applications.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <AboutStat Icon={Briefcase} value="3+" label="Years Experience" />
                <AboutStat Icon={Award} value="15+" label="Projects Completed" />
                <AboutStat Icon={Lightbulb} value="99%" label="Client Satisfaction" />
                <AboutStat Icon={Users} value="5+" label="Happy Clients" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
