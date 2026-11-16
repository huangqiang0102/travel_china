import { motion } from 'framer-motion';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import { destinations, type Destination } from '@/data/destinations';

interface DestinationCardsProps {
  onSelect: (destination: Destination) => void;
  onViewMore: () => void;
}

export default function DestinationCards({ onSelect, onViewMore }: DestinationCardsProps) {
  return (
    <div className="glass w-full min-w-0 rounded-[24px] p-5 md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-300/40 bg-ink-800/60">
            <Compass className="h-[18px] w-[18px] text-gold-300" strokeWidth={1.6} />
          </span>
          <h2 className="font-serif text-xl font-medium text-gold-100 md:text-2xl">热门目的地</h2>
        </div>
        <button
          type="button"
          onClick={onViewMore}
          className="group flex items-center gap-1.5 text-sm text-gold-200 transition-colors hover:text-gold-100"
        >
          查看更多
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <ul className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0">
        {destinations.map((destination, index) => (
          <motion.li
            key={destination.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className="w-[70vw] max-w-[260px] flex-none snap-start md:w-auto md:max-w-none"
          >
            <button
              type="button"
              onClick={() => onSelect(destination)}
              aria-label={`查看${destination.city}详情`}
              className="group relative block h-[190px] w-full overflow-hidden rounded-[14px] border border-gold-300/15 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-[0_0_28px_rgba(233,209,154,0.35)] md:h-[200px]"
            >
              <img
                src={destination.image}
                alt={destination.city}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="flex items-center gap-1.5 text-lg font-medium text-white">
                  <MapPin className="h-4 w-4 text-gold-300" strokeWidth={2} />
                  {destination.city}
                </p>
                <p className="mt-1 text-xs text-slate-300">{destination.tagline}</p>
              </div>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
