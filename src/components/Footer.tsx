import { motion } from 'framer-motion';
import { Landmark, Mountain, MapPin } from 'lucide-react';

const STATS = [
  { icon: Mountain, value: '56+', label: '热门景点' },
  { icon: Landmark, value: '34+', label: '世界遗产' },
  { icon: MapPin, value: '31', label: '省级行政区' },
];

const SKYLINE_BUILDINGS: { x: number; width: number; height: number }[] = [
  { x: 0, width: 18, height: 40 },
  { x: 22, width: 14, height: 62 },
  { x: 40, width: 22, height: 34 },
  { x: 66, width: 12, height: 80 },
  { x: 82, width: 20, height: 52 },
  { x: 106, width: 16, height: 96 },
  { x: 126, width: 26, height: 44 },
  { x: 156, width: 12, height: 70 },
  { x: 172, width: 18, height: 110 },
  { x: 194, width: 14, height: 58 },
  { x: 212, width: 22, height: 36 },
  { x: 238, width: 16, height: 74 },
];

export default function Footer() {
  return (
    <footer className="relative mx-auto mt-auto w-full max-w-[1440px] px-5 pb-8 pt-10 md:px-14">
      <div className="grid items-end gap-8 lg:grid-cols-3">
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-6 lg:justify-start">
          {STATS.map(({ icon: Icon, value, label }, index) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <Icon className="h-9 w-9 text-gold-300 drop-shadow-[0_0_10px_rgba(233,209,154,0.5)]" strokeWidth={1.4} />
              <div className="leading-tight">
                <p className="font-serif text-3xl font-bold text-gold-100">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="flex items-center justify-center gap-4 text-center text-base tracking-[0.2em] text-gold-200">
          <span className="hidden h-px w-14 bg-gradient-to-r from-transparent to-gold-300 sm:block" />
          探索中国 · 感受文化 · 发现美好
          <span className="hidden h-px w-14 bg-gradient-to-l from-transparent to-gold-300 sm:block" />
        </p>

        <svg
          viewBox="0 0 250 120"
          className="pointer-events-none mx-auto hidden h-24 w-full max-w-[300px] justify-self-end text-gold-300/70 lg:block"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <line x1="0" y1="119" x2="250" y2="119" />
          {SKYLINE_BUILDINGS.map((building) => (
            <rect
              key={building.x}
              x={building.x}
              y={119 - building.height}
              width={building.width}
              height={building.height}
            />
          ))}
          <path d="M172 9 L172 1" />
          <path d="M66 39 L66 30 L72 39" />
        </svg>
      </div>
    </footer>
  );
}
