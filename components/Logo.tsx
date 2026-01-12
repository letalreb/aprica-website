export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mountain peaks */}
      <path
        d="M30 45L15 25L20 20L30 10L40 20L45 25L30 45Z"
        fill="currentColor"
        className="text-mountain-pine"
      />
      <path
        d="M50 45L38 28L43 23L50 15L57 23L62 28L50 45Z"
        fill="currentColor"
        className="text-mountain-wood"
        opacity="0.8"
      />
      
      {/* Sun/Moon circle */}
      <circle cx="70" cy="15" r="6" fill="currentColor" className="text-mountain-sunset" />
      
      {/* Text */}
      <text
        x="85"
        y="25"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="currentColor"
        className="text-mountain-pine"
      >
        Aprica
      </text>
      <text
        x="85"
        y="42"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="12"
        fontWeight="400"
        fill="currentColor"
        className="text-mountain-stone"
      >
        Mountain Lodge
      </text>
    </svg>
  );
}
