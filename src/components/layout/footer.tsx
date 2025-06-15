import Link from 'next/link';
import { footerSocialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          {footerSocialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.Icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Abdallh. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Crafted with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
