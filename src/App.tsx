import { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SceneBackground from '@/components/SceneBackground';
import Navbar, { type NavKey } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationCards from '@/components/DestinationCards';
import DestinationModal from '@/components/DestinationModal';
import AIAssistant from '@/components/AIAssistant';
import AIChatPanel from '@/components/AIChatPanel';
import Footer from '@/components/Footer';
import type { Destination } from '@/data/destinations';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function App() {
  const [activeNav, setActiveNav] = useState<NavKey>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatDraft, setChatDraft] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const scrollToDestinations = useCallback(() => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const focusSearch = useCallback(() => {
    scrollToTop();
    window.setTimeout(() => searchInputRef.current?.focus({ preventScroll: true }), 450);
  }, []);

  const openChat = useCallback((draft = '') => {
    setChatDraft(draft);
    setChatOpen(true);
  }, []);

  const closeDestination = useCallback(() => setSelectedDestination(null), []);

  const handleNavigate = (key: NavKey) => {
    setActiveNav(key);
    if (key === 'home') scrollToTop();
    if (key === 'explore' || key === 'popular') scrollToDestinations();
    if (key === 'smart' || key === 'trips') openChat();
  };

  const handlePlanWithAI = (destination: Destination) => {
    setSelectedDestination(null);
    openChat(`我想去${destination.city}旅行，请帮我规划行程`);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-warm-white">
      <SceneBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar active={activeNav} onNavigate={handleNavigate} onSearchClick={focusSearch} />

        <main className="flex flex-1 flex-col gap-14 px-5 pb-12 pt-28 md:px-10 md:pt-32 lg:px-14">
          <HeroSection
            searchInputRef={searchInputRef}
            onSearchSelect={setSelectedDestination}
            onExplore={scrollToDestinations}
            onOpenAssistant={() => openChat()}
          />

          <section
            id="destinations"
            className="mx-auto flex w-full max-w-[1440px] scroll-mt-28 flex-col gap-6 lg:flex-row lg:items-end"
          >
            <div className="min-w-0 flex-1">
              <DestinationCards onSelect={setSelectedDestination} onViewMore={focusSearch} />
            </div>
            <AIAssistant onOpen={() => openChat()} />
          </section>
        </main>

        <Footer />
      </div>

      <DestinationModal
        destination={selectedDestination}
        onClose={closeDestination}
        onPlanWithAI={handlePlanWithAI}
      />

      <AnimatePresence>
        {chatOpen && (
          <AIChatPanel key="ai-chat" initialDraft={chatDraft} onClose={() => setChatOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
