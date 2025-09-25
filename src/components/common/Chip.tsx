interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'purple' | 'pink' | 'indigo' | 'red' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: 'bg-gray-100 text-gray-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  pink: 'bg-pink-100 text-pink-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-green-100 text-green-700',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-sm',
};

export default function Chip({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  onClick 
}: ChipProps) {
  const baseStyles = 'rounded-full font-medium hover:scale-110 transform transition-all duration-300';
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const clickableStyle = onClick ? 'cursor-pointer' : '';

  return (
    <span 
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${clickableStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
