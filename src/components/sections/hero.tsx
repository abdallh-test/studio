
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { heroData } from '@/lib/data'; 
// Removed MoveRight, Download as they will come from heroData if defined

export function HeroSection() {
  const {
    profileImageUrl,
    profileImageAlt,
    profileImageHint,
    greeting,
    name,
    title,
    description,
    primaryButtonText,
    primaryButtonLink,
    primaryButtonIcon: PrimaryButtonIcon,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonIcon: SecondaryButtonIcon,
    cvButtonText,
    cvButtonLink,
    cvButtonIcon: CvButtonIcon,
    cvFileName
  } = heroData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background to-card overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or effect if desired */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection delay={100} className="max-w-3xl mx-auto">
          <div className="mb-8">
             <Image 
                src={profileImageUrl}
                alt={profileImageAlt}
                width={150} 
                height={150} 
                className="rounded-full mx-auto shadow-xl border-4 border-primary"
                data-ai-hint={profileImageHint}
                unoptimized
              />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6">
            <span className="block">{greeting} {name}</span>
            <span className="block text-primary">{title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href={primaryButtonLink}>
                {primaryButtonText}
                {PrimaryButtonIcon && <PrimaryButtonIcon className="ml-2 h-5 w-5" />}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href={secondaryButtonLink}>
                {secondaryButtonText}
                {SecondaryButtonIcon && <SecondaryButtonIcon className="ml-2 h-5 w-5" />}
              </Link>
            </Button>
            {cvButtonText && cvButtonLink && CvButtonIcon && (
              <Button variant="secondary" size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
                <a href={cvButtonLink} download={cvFileName || true}>
                  {cvButtonText} <CvButtonIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary opacity-50">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
