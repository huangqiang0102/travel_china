import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Bot, Send } from 'lucide-react';

interface AIChatPanelProps {
  initialDraft: string;
  onClose: () => void;
}

interface ChatMessage {
  id: number;
  role: 'user' | 'system';
  text: string;
}

const GREETING = '你好！我是你的AI旅行助手，有什么想去的地方吗？';
const PENDING_NOTICE = 'AI 对话服务尚未接入，接入后将在这里为你回复。';

export default function AIChatPanel({ initialDraft, onClose }: AIChatPanelProps) {
  const [draft, setDraft] = useState(initialDraft);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const timestamp = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: timestamp, role: 'user', text },
      { id: timestamp + 1, role: 'system', text: PENDING_NOTICE },
    ]);
    setDraft('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      role="dialog"
      aria-modal="true"
      aria-label="AI旅行助手对话"
      className="fixed inset-0 z-[70] flex flex-col bg-ink-900/92 backdrop-blur-2xl"
    >
      <header className="flex h-20 flex-none items-center justify-between border-b border-gold-300/15 px-5 md:px-10">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-gold-300/30 px-4 py-2 text-sm text-gold-100 transition-all duration-300 hover:-translate-x-0.5 hover:border-gold-300/70 hover:shadow-[0_0_20px_rgba(233,209,154,0.3)]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </button>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ice-400/40 bg-ice-600/15">
            <Bot className="h-5 w-5 text-ice-300" strokeWidth={1.7} />
          </span>
          <div className="leading-tight">
            <p className="font-serif text-base font-medium text-gold-100">AI旅行助手</p>
            <p className="text-xs text-ice-300">智能规划 · 即将接入</p>
          </div>
        </div>
      </header>

      <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-8 md:px-10">
        <ul className="mx-auto flex max-w-3xl flex-col gap-4">
          <li className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-ice-400/30 bg-ink-800/70 px-5 py-3 text-[15px] leading-[1.5] text-warm-white">
              {GREETING}
            </div>
          </li>
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.li
                key={message.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
              >
                {message.role === 'user' ? (
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-gold-200 to-gold-500 px-5 py-3 text-[15px] leading-[1.5] text-ink-900">
                    {message.text}
                  </div>
                ) : (
                  <div className="max-w-[80%] rounded-2xl border border-gold-300/25 bg-ink-800/50 px-5 py-3 text-sm leading-[1.5] text-gold-200">
                    {message.text}
                  </div>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="flex-none border-t border-gold-300/15 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-ice-400/35 bg-ink-800/70 py-2 pl-6 pr-2 shadow-[0_0_30px_rgba(79,189,230,0.15)] focus-within:border-ice-300/70">
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="告诉我你想去哪里，或想怎样旅行..."
            aria-label="输入消息"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-warm-white placeholder:text-warm-white/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!draft.trim()}
            aria-label="发送"
            className="btn-ice flex h-11 w-11 flex-none items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-40 disabled:filter-none"
          >
            <Send className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
