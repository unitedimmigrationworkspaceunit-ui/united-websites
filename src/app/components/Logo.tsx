import logoImage from '@/imports/logo.png';

const sizes = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
  xl: 'h-20 w-20',
} as const;

type LogoProps = {
  size?: keyof typeof sizes;
  variant?: 'light' | 'dark';
  className?: string;
};

export function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  const ringClass =
    variant === 'light'
      ? 'ring-1 ring-[#0B1F3A]/8 shadow-[0_2px_12px_rgba(11,31,58,0.12)]'
      : 'ring-1 ring-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.35)]';

  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden flex-shrink-0 bg-white ${ringClass} ${className}`}
    >
      <img
        src={logoImage}
        alt="United Immigration Services"
        className="h-full w-full object-cover scale-[1.02]"
        draggable={false}
      />
    </div>
  );
}
