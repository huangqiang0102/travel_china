import { motion } from 'framer-motion';

const LANDSCAPE_IMAGE =
  'https://images.pexels.com/photos/39087604/pexels-photo-39087604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const TEMPLE_IMAGE =
  'https://images.pexels.com/photos/37333073/pexels-photo-37333073.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop';

const MASK_STYLE = {
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 72%)',
  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 72%)',
};

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-900" aria-hidden="true">
      <img
        src={LANDSCAPE_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55 saturate-[0.75]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-ink-900/70" />
      <div className="absolute left-[30%] top-[10%] h-[70%] w-[50%] rounded-full bg-gold-300/10 blur-3xl" />

      <img
        src={TEMPLE_IMAGE}
        alt=""
        style={MASK_STYLE}
        className="absolute right-[2%] top-[6%] hidden h-[62%] w-[52%] object-cover opacity-80 md:block"
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gold-trail" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c9a355" stopOpacity="0" />
            <stop offset="45%" stopColor="#f3e0b0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7fd3f2" stopOpacity="0.5" />
          </linearGradient>
          <filter id="trail-glow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        {[
          { d: 'M 420 640 C 700 540, 980 600, 1440 440', width: 10, blur: true, duration: 14 },
          { d: 'M 420 640 C 700 540, 980 600, 1440 440', width: 2.2, blur: false, duration: 14 },
          { d: 'M 880 110 C 1010 200, 1120 240, 1240 340', width: 1.4, blur: false, duration: 18 },
          { d: 'M 60 770 C 360 730, 620 790, 980 740', width: 1.6, blur: false, duration: 22 },
        ].map((trail, index) => (
          <motion.path
            key={index}
            d={trail.d}
            fill="none"
            stroke="url(#gold-trail)"
            strokeWidth={trail.width}
            strokeLinecap="round"
            strokeDasharray="260 1400"
            filter={trail.blur ? 'url(#trail-glow)' : undefined}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -1660 }}
            transition={{ duration: trail.duration, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>

      <svg className="absolute left-[2%] top-[14%] h-40 w-48 text-gold-300/30" viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 120 C40 60, 90 40, 140 20 S 190 60, 170 110" />
        <path d="M30 150 C60 110, 110 100, 150 60" />
        <circle cx="150" cy="40" r="10" />
        <path d="M150 30 C160 20, 175 26, 170 38 C166 46, 156 44, 158 36" />
      </svg>

      <svg className="absolute bottom-[4%] right-[1%] h-40 w-64 text-gold-300/25 md:w-80" viewBox="0 0 320 160" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 150 C60 90, 120 80, 160 40 S 260 20, 300 60" />
        <path d="M40 120 C80 100, 110 120, 130 150" />
        <path d="M200 140 C230 110, 260 120, 280 150" />
        <circle cx="262" cy="50" r="8" />
      </svg>
    </div>
  );
}
