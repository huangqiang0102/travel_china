import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, X } from 'lucide-react';
import type { Destination } from '@/data/destinations';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanWithAI: (destination: Destination) => void;
}

export default function DestinationModal({ destination, onClose, onPlanWithAI }: DestinationModalProps) {
  const isOpen = destination !== null;

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          key="destination-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            key={destination.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[20px]"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-t-[20px] md:h-72">
              <img src={destination.image} alt={destination.city} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭详情"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 bg-ink-900/60 text-warm-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:text-gold-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="flex items-center gap-2 text-sm text-gold-300">
                <MapPin className="h-4 w-4" strokeWidth={1.8} />
                {destination.region}
              </p>
              <h2 id="destination-title" className="mt-2 font-serif text-3xl font-bold text-gold-100 md:text-4xl">
                {destination.city}
              </h2>
              <p className="mt-2 text-base text-gold-200/90">{destination.tagline}</p>
              <p className="mt-5 text-[15px] leading-[1.5] text-slate-200">{destination.description}</p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-gold-200">必游看点</p>
                <ul className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-ice-400/40 bg-ice-600/15 px-3.5 py-1.5 text-sm text-ice-100"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                <Calendar className="h-4 w-4 text-ice-300" strokeWidth={1.8} />
                最佳季节：{destination.bestSeason}
              </div>

              <button
                type="button"
                onClick={() => onPlanWithAI(destination)}
                className="btn-ice mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-medium"
              >
                <Sparkles className="h-[18px] w-[18px]" strokeWidth={1.8} />
                让 AI 旅行助手规划行程
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
