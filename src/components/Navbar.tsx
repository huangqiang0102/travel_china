import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Menu, Mountain, Search, User, X, type LucideIcon } from 'lucide-react';

export type NavKey = 'home' | 'explore' | 'popular' | 'smart' | 'trips';

const NAV_ITEMS: { key: NavKey; label: string; icon?: LucideIcon }[] = [
  { key: 'home', label: '首页', icon: Home },
  { key: 'explore', label: '探索中国' },
  { key: 'popular', label: '热门景点' },
  { key: 'smart', label: '智能旅行' },
  { key: 'trips', label: '我的行程' },
];

interface NavbarProps {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
  onSearchClick: () => void;
}

export default function Navbar({ active, onNavigate, onSearchClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (key: NavKey) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold-300/10 bg-ink-900/85 shadow-[0_12px_40px_rgba(2,8,20,0.55)] backdrop-blur-xl'
          : 'bg-ink-900/25 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="group flex items-center gap-3 text-left"
          aria-label="中国之旅 首页"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-300/30 bg-ink-800/60 transition-transform duration-500 group-hover:-translate-y-0.5">
            <Mountain className="h-6 w-6 text-gold-300" strokeWidth={1.6} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wider text-gold-200 md:text-xl">中国之旅</span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-gold-300/80">CHINA TRAVEL</span>
          </span>
        </button>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="主导航">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => navigate(item.key)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center gap-2 py-2 text-[15px] transition-colors duration-300 ${
                  isActive ? 'font-medium text-gold-300' : 'text-warm-white/85 hover:text-gold-200'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" strokeWidth={1.8} />}
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-gold-300 shadow-[0_0_14px_rgba(233,209,154,0.9)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onSearchClick}
            aria-label="搜索目的地"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-warm-white transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-300"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="用户中心"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/40 bg-gradient-to-br from-ice-400/40 to-ink-700 transition-all duration-300 hover:shadow-[0_0_18px_rgba(127,211,242,0.45)]"
          >
            <User className="h-[18px] w-[18px] text-warm-white" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-gold-300/10 bg-ink-900/95 backdrop-blur-xl lg:hidden"
            aria-label="移动端导航"
          >
            <ul className="flex flex-col px-5 py-3">
              {NAV_ITEMS.map((item) => {
                const isActive = item.key === active;
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => navigate(item.key)}
                      className={`flex w-full items-center justify-between border-b border-gold-300/10 py-4 text-left text-base transition-colors ${
                        isActive ? 'text-gold-300' : 'text-warm-white/85 hover:text-gold-200'
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold-300 shadow-[0_0_10px_rgba(233,209,154,0.9)]" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
