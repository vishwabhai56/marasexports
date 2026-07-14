export default function Logo({ className = 'h-11 w-11', mark = 'navy' }) {
  const ink = mark === 'white' ? '#FFFFFF' : '#0B1F3A'

  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="MARA's Overseas Exports logo">
      <circle cx="52" cy="46" r="34" fill="none" stroke={ink} strokeWidth="2.5" />
      <g fill={ink}>
        <path d="M24 34c6-6 12-8 16-9-4 5-6 10-7 16H21c0-3 1-5 3-7z" opacity="0.85" />
        <path d="M20 46h13c.4 6 2 12 5 18-8-2-14-6-16-11a17 17 0 0 1-2-7z" opacity="0.85" />
        <path d="M45 15c6-1 12-1 17 1-3 2-9 3-12 8-2-3-4-6-5-9z" opacity="0.85" />
        <path d="M62 18c5 2 9 6 11 10-4 1-9 0-13-2 1-3 1-6 2-8z" opacity="0.85" />
        <path d="M60 34c5 1 9 4 11 8-4 2-10 2-14-1 1-2 2-5 3-7z" opacity="0.7" />
      </g>
      <path
        d="M14 58c10 10 22 15 34 15s24-5 34-15"
        fill="none"
        stroke="#C6952F"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g stroke="#C6952F" strokeWidth="3.5" strokeLinecap="round" fill="none">
        <path d="M84 40 L104 24" />
        <path d="M100 27 L108 20 L112 24 L106 32 Z" fill="#C6952F" stroke="none" />
      </g>
      <text
        x="60"
        y="62"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontWeight="700"
        fontSize="38"
        fill={ink}
      >
        MR
      </text>
      <g transform="translate(30 88)">
        <path d="M2 14 L58 14 L52 22 L8 22 Z" fill={ink} />
        <rect x="12" y="4" width="9" height="10" fill="#C6952F" />
        <rect x="23" y="4" width="9" height="10" fill={ink} />
        <rect x="34" y="4" width="9" height="10" fill="#C6952F" />
        <path d="M0 22 L60 22 L60 25 L0 25 Z" fill={ink} opacity="0.9" />
      </g>
    </svg>
  )
}
