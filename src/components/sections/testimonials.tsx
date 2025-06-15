import { testimonials } from '@/lib/data';
import { TestimonialItem } from '@/components/ui/testimonial-item';
import { AnimatedSection } from '@/components/ui/animated-section';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">What Others Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from colleagues and clients I&apos;ve had the pleasure of working with.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 150}>
              <TestimonialItem testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
