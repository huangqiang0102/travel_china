import { useState, type FormEvent, type RefObject } from 'react';
import { MapPin, Search } from 'lucide-react';
import { destinations, type Destination } from '@/data/destinations';

interface SearchBarProps {
  inputRef: RefObject<HTMLInputElement>;
  onSelect: (destination: Destination) => void;
}

export default function SearchBar({ inputRef, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keyword = query.trim();
    if (!keyword) {
      setMessage('请输入想去的城市名称');
      return;
    }
    const match = destinations.find((item) => keyword.includes(item.city) || item.city.includes(keyword));
    if (!match) {
      setMessage('暂未收录该目的地，可以试试北京、杭州、桂林、拉萨或西安');
      return;
    }
    setMessage('');
    setQuery('');
    onSelect(match);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="w-full max-w-[520px]">
      <div className="animate-glow-pulse group relative flex h-[55px] items-center rounded-full border border-gold-300/30 bg-ink-700/55 backdrop-blur-xl transition-all duration-300 focus-within:border-gold-300/70 focus-within:bg-ink-700/75">
        <MapPin className="pointer-events-none absolute left-5 h-5 w-5 text-gold-300" strokeWidth={1.8} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            if (message) setMessage('');
          }}
          placeholder="搜索目的地，如：北京、杭州、桂林..."
          aria-label="搜索目的地"
          aria-invalid={message ? true : undefined}
          className="h-full w-full rounded-full bg-transparent pl-14 pr-16 text-[15px] text-warm-white placeholder:text-warm-white/55 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="搜索"
          className="absolute right-[6px] flex h-[43px] w-[43px] items-center justify-center rounded-full border border-gold-200/60 bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-ink-900 shadow-[0_0_20px_rgba(233,209,154,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(233,209,154,0.75)] active:scale-95"
        >
          <Search className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>
      </div>
      {message && (
        <p role="alert" className="mt-3 pl-5 text-sm text-gold-200">
          {message}
        </p>
      )}
    </form>
  );
}
