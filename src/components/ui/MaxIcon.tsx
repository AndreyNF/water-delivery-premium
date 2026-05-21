type MaxIconProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function MaxIcon({ size = 24, className, style }: MaxIconProps) {
  const id = `max-grad-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B4CFF" />
          <stop offset="1" stopColor="#9B5CFF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="7" fill={`url(#${id})`} />
      <path
        d="M7.2 16.5V7.5H9.45L12.15 12.45L14.85 7.5H17.1V16.5H15.15V10.35L12.6 15H11.7L9.15 10.35V16.5H7.2Z"
        fill="white"
      />
    </svg>
  );
}
