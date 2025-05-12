
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  variant?: 'default' | 'large' | 'small';
}

const Banner = ({ 
  imageUrl, 
  title, 
  subtitle, 
  actionLabel, 
  variant = 'default',
  className,
  ...props 
}: BannerProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden group border-none", 
        variant === 'large' ? 'col-span-2 row-span-2' : '',
        variant === 'small' ? 'col-span-1 row-span-1' : '',
        className
      )}
      {...props}
    >
      <CardContent className="p-0 relative h-full">
        <AspectRatio ratio={variant === 'large' ? 21/9 : 16/9} className="bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className={cn(
              "font-bold", 
              variant === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'
            )}>
              {title}
            </h3>
            {subtitle && (
              <p className={cn(
                "mt-1 opacity-90",
                variant === 'large' ? 'text-base' : 'text-sm'
              )}>
                {subtitle}
              </p>
            )}
            {actionLabel && (
              <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                {actionLabel}
              </button>
            )}
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default Banner;
