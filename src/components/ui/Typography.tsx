// src/components/ui/Typography.tsx
import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  fontType?: 'heading' | 'body';
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  fontType,
  className = '',
  children,
  ...props
}) => {
  const Component = variant;

  // Default behavior: headings get the heading font, everything else gets body font.
  const isHeading = variant.startsWith('h');
  
  // Resolve which font class to apply, prioritizing manual overrides
  const appliedFontClass = fontType === 'heading' || (isHeading && fontType !== 'body')
    ? 'font-heading'
    : 'font-body';

  return (
    <Component className={`${appliedFontClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};