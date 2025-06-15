import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/data';
import { Quote } from 'lucide-react';

interface TestimonialItemProps {
  testimonial: Testimonial;
}

export function TestimonialItem({ testimonial }: TestimonialItemProps) {
  const authorInitials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="h-full flex flex-col justify-between bg-background p-6 shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
      <CardContent className="p-0 relative">
        <Quote className="absolute top-0 left-0 h-12 w-12 text-primary opacity-20 transform -translate-x-2 -translate-y-2" />
        <blockquote className="text-lg text-foreground italic mb-6 relative z-10">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarHint || "person face"} />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
