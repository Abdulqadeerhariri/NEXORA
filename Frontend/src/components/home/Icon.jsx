const iconPaths = {
  home: <><path d="M3.5 10.7 12 3.8l8.5 6.9" /><path d="M5.7 9.8v10h4.2v-6h4.2v6h4.2v-10" /></>,
  video: <><rect x="3" y="5" width="13" height="14" rx="2.5" /><path d="m16 10 5-3v10l-5-3z" /><path d="m8.4 9.2 4.4 2.8-4.4 2.8z" fill="currentColor" stroke="none" /></>,
  playCircle: <><circle cx="12" cy="12" r="10" fill="rgb(17 24 39 / 45%)" stroke="rgb(255 255 255 / 85%)" strokeWidth="1.4" /><path d="m10 8.5 5.5 3.5-5.5 3.5z" fill="#fff" stroke="none" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.6" /><path d="m15.7 15.7 4.5 4.5" /></>,
  bell: <><path d="M18.2 9a6.2 6.2 0 0 0-12.4 0c0 6.1-2.3 7.1-2.3 8.5h17c0-1.4-2.3-2.4-2.3-8.5Z" /><path d="M9.5 20a2.8 2.8 0 0 0 5 0" /></>,
  bookmark: <path d="M6.2 4.5A1.7 1.7 0 0 1 7.9 2.8h8.2a1.7 1.7 0 0 1 1.7 1.7v16.7L12 17.1l-5.8 4.1z" />,
  user: <><circle cx="12" cy="12" r="9.3" /><circle cx="12" cy="9.2" r="3.2" /><path d="M5.9 18.8a6.7 6.7 0 0 1 12.2 0" /></>,
  settings: <><path d="m19.1 13.7 1.2.9-1.6 2.8-1.4-.6a7.8 7.8 0 0 1-1.8 1l-.2 1.5h-3.2l-.2-1.5a7.8 7.8 0 0 1-1.8-1l-1.4.6-1.6-2.8 1.2-.9a7.5 7.5 0 0 1 0-2l-1.2-.9 1.6-2.8 1.4.6a7.8 7.8 0 0 1 1.8-1l.2-1.5h3.2l.2 1.5a7.8 7.8 0 0 1 1.8 1l1.4-.6 1.6 2.8-1.2.9a7.5 7.5 0 0 1 0 2Z" /><circle cx="13.7" cy="12.7" r="2.5" /></>,
  more: <><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none" /></>,
  photo: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><circle cx="8.5" cy="9" r="1.6" /><path d="m4 18 5.5-5.5 3.4 3.4 2.7-2.7 4.4 4.4" /></>,
  play: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m10 8.4 5.8 3.6-5.8 3.6z" fill="currentColor" stroke="none" /></>,
  like: <path d="M7.4 10.5 11.2 4c.6-1 2.1-.6 2.1.6v4.5h4.8a2 2 0 0 1 1.9 2.5l-1.7 7a2 2 0 0 1-1.9 1.5H7.4m0-9.6H4.8a1.8 1.8 0 0 0-1.8 1.8v5.9A1.8 1.8 0 0 0 4.8 20h2.6z" />,
  heart: <path d="M20.2 5.8a5 5 0 0 0-7.1 0L12 6.9l-1.1-1.1a5 5 0 0 0-7.1 7.1l1.1 1.1L12 21l7.1-7 1.1-1.1a5 5 0 0 0 0-7.1Z" />,
  comment: <><path d="M20.5 11.2a7.5 7.5 0 0 1-7.5 7.5H7l-3.5 2v-5.1A7.5 7.5 0 1 1 20.5 11.2Z" /><circle cx="8.3" cy="11.5" r=".8" fill="currentColor" stroke="none" /><circle cx="12" cy="11.5" r=".8" fill="currentColor" stroke="none" /><circle cx="15.7" cy="11.5" r=".8" fill="currentColor" stroke="none" /></>,
  share: <><path d="M12 15.5v-4.2a5.8 5.8 0 0 1 5.8-5.8H20" /><path d="m16.2 2.8 4 2.7-4 2.7" /><path d="M6 8.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1" /></>,
  send: <><path d="m21 3-7.2 18-3.9-7.9L2 9.2 21 3Z" /><path d="m21 3-11.1 10.1" /></>,
  smile: <><circle cx="12" cy="12" r="9.2" /><path d="M8.2 14.1a4.8 4.8 0 0 0 7.6 0" /><path d="M8.8 9.5h.01M15.2 9.5h.01" /></>,
  chevron: <path d="m9 5.5 6.5 6.5L9 18.5" />,
  trend: <><path d="m3.5 17.5 5.2-5.2 3.8 3.8 8-8" /><path d="M14.8 8.1h5.7v5.7" /></>,
  globe: <><circle cx="12" cy="12" r="9.3" /><path d="M2.9 12h18.2M12 2.7a15.5 15.5 0 0 1 0 18.6M12 2.7a15.5 15.5 0 0 0 0 18.6" /></>,
  eye: <><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.7" /></>,
  filter: <><path d="M4 6h16M7 12h10m-7 6h4" /><circle cx="8" cy="6" r="1.5" fill="white" /><circle cx="15" cy="12" r="1.5" fill="white" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" /></>,
  mapPin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h.9A4.9 4.9 0 0 0 22 9.8C22 6 17.5 3 12 3Z" /><path d="M7.5 11.5h.01M10 7.5h.01M15 7.5h.01M17 11h.01" /></>,
  help: <><circle cx="12" cy="12" r="9.3" /><path d="M9.5 9a2.6 2.6 0 1 1 4.6 1.7c-.9 1-2.1 1.2-2.1 3M12 17h.01" /></>,
  logout: <><path d="M10 17l5-5-5-5m5 5H3" /><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" /></>,
}

const filledHome = <path d="m21.5 10.4-8.8-7.1a1.1 1.1 0 0 0-1.4 0l-8.8 7.1a1.2 1.2 0 0 0 1.5 1.8l.8-.6v7.5c0 .7.5 1.2 1.2 1.2h4.4v-6.1h3.8v6.1h4.4c.7 0 1.2-.5 1.2-1.2v-7.5l.8.6a1.2 1.2 0 0 0 1.5-1.8Z" />

function Icon({ name, size = 18, className = '', fill = 'none' }) {
  const isFilledHome = name === 'home' && className.split(' ').includes('filled')

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={isFilledHome ? 'none' : 'currentColor'}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isFilledHome ? filledHome : iconPaths[name]}
    </svg>
  )
}

export default Icon
