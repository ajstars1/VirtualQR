
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
// import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'default', 
    size = 'md', 
    isLoading = false, 
    to, 
    icon, 
    iconPosition = 'right',
    className, 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
      className
    );

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3 text-base'
    };

    // Variant styles
    const variantStyles = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/40',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground focus:ring-primary/40',
      ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground focus:ring-primary/40',
      link: 'bg-transparent text-primary underline-offset-4 hover:underline focus:ring-primary/40',
      primary: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 focus:ring-blue-500/40',
      secondary: 'glassmorphism text-foreground hover:bg-white/80 dark:hover:bg-black/80 focus:ring-primary/40'
    };

    const buttonStyles = cn(baseStyles, sizeStyles[size], variantStyles[variant]);

    const content = (
      <>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        )}
        <div className={cn("flex items-center gap-2", isLoading ? "invisible" : "")}>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </div>
      </>
    );

    if (to) {
      return (
        <Link
          href={to}
          className={buttonStyles}
          aria-disabled={disabled}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;