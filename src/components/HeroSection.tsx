import type { RefObject } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Compass } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import type { Destination } from '@/data/destinations';

interface HeroSectionProps {
  searchInputRef: RefObject<HTMLInputElement>;
  onSearchSelect: (destination: Destination) => void;
  onExplore: () => void;
  onOpenAssistant: () => void;
}

export default function HeroSection({
  searchInputRef,
  onSearchSelect,
  onExplore,
  onOpenAssistant,
}: HeroSectionProps) {
  return (
    <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center pt-6 text-center lg:items-start lg:pt-10 lg:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="font-calligraphy text-[clamp(3.75rem,9vw,7.5rem)] leading-[1.2] text-gold-100 drop-shadow-[0_6px_24px_rgba(0,0,0,0.65)]"
      >
        遇见中国
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
        className="font-calligraphy -mt-2 text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.2] text-gold-200 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] lg:ml-[12%]"
      >
        遇见更大的世界
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-6 text-base text-warm-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-lg"
      >
        山河壮丽 · 人文璀璨 · 开启你的中国之旅
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        className="mt-10 flex w-full flex-col items-center gap-6 lg:items-start"
      >
        <SearchBar inputRef={searchInputRef} onSelect={onSearchSelect} />

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <motion.button
            type="button"
            onClick={onExplore}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold group flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-[15px] font-medium sm:w-auto"
          >
            <Compass className="h-[18px] w-[18px]" strokeWidth={1.8} />
            探索中国
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            type="button"
            onClick={onOpenAssistant}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gold-300/70 bg-ink-800/35 px-8 text-[15px] font-medium text-gold-100 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(233,209,154,0.45)] sm:w-auto"
          >
            <Bot className="h-[18px] w-[18px] text-gold-300" strokeWidth={1.8} />
            AI 智能导游
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
