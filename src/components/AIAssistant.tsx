import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

interface AIAssistantProps {
  onOpen: () => void;
}

function RobotMascot() {
  return (
    <motion.svg
      viewBox="0 0 140 150"
      className="h-28 w-28 drop-shadow-[0_0_24px_rgba(127,211,242,0.7)] md:h-32 md:w-32"
      aria-hidden="true"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="robot-body" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#bfe9ff" />
        </linearGradient>
        <linearGradient id="robot-visor" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1d4f7c" />
          <stop offset="100%" stopColor="#0a2440" />
        </linearGradient>
      </defs>
      <path d="M70 6 L70 22" stroke="#7fd3f2" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="6" r="6" fill="#7fd3f2" />
      <rect x="22" y="22" width="96" height="78" rx="34" fill="url(#robot-body)" stroke="#7fd3f2" strokeWidth="2" />
      <rect x="34" y="42" width="72" height="40" rx="18" fill="url(#robot-visor)" />
      <circle cx="54" cy="62" r="7" fill="#7fd3f2" />
      <circle cx="86" cy="62" r="7" fill="#7fd3f2" />
      <path d="M60 74 Q70 80 80 74" stroke="#a8e2fa" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="44" y="104" width="52" height="30" rx="12" fill="url(#robot-body)" stroke="#7fd3f2" strokeWidth="2" />
      <circle cx="70" cy="119" r="4" fill="#4fbde6" />
      <path d="M22 60 Q6 70 14 94" stroke="#7fd3f2" strokeWidth="2" fill="none" />
      <path d="M118 60 Q134 70 126 94" stroke="#7fd3f2" strokeWidth="2" fill="none" />
    </motion.svg>
  );
}

export default function AIAssistant({ onOpen }: AIAssistantProps) {
  return (
    <aside className="glass relative mt-16 w-full rounded-[22px] border-ice-400/25 p-6 shadow-[0_0_40px_rgba(79,189,230,0.18)] lg:mt-0 lg:w-[300px] lg:flex-none">
      <div className="absolute -top-14 right-2 md:-top-16 md:right-4">
        <RobotMascot />
      </div>

      <div className="max-w-[60%] pt-2">
        <div className="rounded-2xl rounded-tl-sm border border-ice-400/30 bg-ink-800/70 px-4 py-3 shadow-[0_0_20px_rgba(79,189,230,0.15)]">
          <p className="text-[15px] font-medium leading-[1.5] text-warm-white">
            你好！我是你的
            <br />
            <span className="text-ice-300">AI旅行助手</span>
          </p>
          <p className="mt-1 text-sm leading-[1.5] text-slate-300">有什么想去的地方吗？</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="btn-ice group mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-medium"
      >
        <Send className="h-4 w-4" strokeWidth={2} />
        开始对话
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </aside>
  );
}
