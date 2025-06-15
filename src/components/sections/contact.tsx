import Link from 'next/link';
import { contactLinks } from '@/lib/data';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={200}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-headline text-foreground">Let&apos;s Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactLinks.map((linkInfo) => (
                  <Button 
                    key={linkInfo.name} 
                    variant="outline" 
                    className="w-full justify-start p-6 text-lg hover:bg-primary/10 hover:text-primary group"
                    asChild
                  >
                    <Link href={linkInfo.href} target="_blank" rel="noopener noreferrer">
                      <linkInfo.Icon className="mr-4 h-7 w-7 text-primary group-hover:text-primary transition-colors" />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{linkInfo.name}</span>
                        <span className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">{linkInfo.text}</span>
                      </div>
                    </Link>
                  </Button>
                ))}
                <p className="text-center text-muted-foreground pt-4">
                  Feel free to reach out through any of these channels. I look forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
