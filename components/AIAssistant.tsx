
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Wand2, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Greetings! I am the Leigh Group Digital Scholar. I can explain the 'magic' of molecular knotting, the mechanics of our walkers, and our latest research at the University of Manchester. How can I assist your synthesis today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the AI Lab Assistant for the David Leigh Research Group at the University of Manchester. Your expertise is in Topological Chemistry, Molecular Knots (Trefoil, Pentafoil, 819), Molecular Walkers, and Molecular Motors. You often use the analogy that chemistry is like magic. Your tone is witty, brilliant, and sophisticated. You should mention Manchester and Prof. David Leigh's pioneering role when appropriate."
        }
      });

      const assistantContent = response.text || "Apologies, the molecular simulation failed. Please try your prompt again.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection interrupted. Our molecular information processor is busy. Try again soon." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 border border-purple-500/20 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-full ring-1 ring-white/5">
      <div className="p-6 border-b border-purple-500/10 flex justify-between items-center bg-purple-900/10 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#660099] rounded-2xl flex items-center justify-center -rotate-6 shadow-inner">
            <Wand2 className="text-white w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base tracking-tight serif italic">Molecular Scholar</h4>
            <p className="text-yellow-400 text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span> Manchester Intelligence
            </p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-none">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                m.role === 'user' 
                  ? 'bg-yellow-400 text-slate-900 font-bold' 
                  : 'bg-slate-900 text-slate-200 border border-purple-500/20'
              }`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 p-4 bg-purple-950/20 rounded-2xl w-fit border border-purple-500/10">
            <Loader2 className="animate-spin text-purple-400" size={18} />
            <span className="text-xs text-purple-300 italic font-bold">Synthesizing magic...</span>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-950 border-t border-purple-500/10">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Trefoil Knots or Molecular Walkers..."
            className="w-full bg-slate-900 text-white border border-purple-500/30 rounded-2xl px-6 py-5 pr-16 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-600 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#660099] text-white rounded-xl hover:bg-purple-500 disabled:opacity-50 transition-all shadow-lg"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
