import { IconMail, IconSend } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

// ── Replace with your Formspree endpoint ──────────────────────────────────────
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy the endpoint (e.g. https://formspree.io/f/xyzabc)
// 3. Paste it below
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500/70 focus:bg-slate-800/70 transition-all duration-200';

  return (
    <section id="contact" className="w-full py-16 px-4">
      <div
        ref={ref}
        className="max-w-xl mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center text-sm mb-10">
          Have a project in mind or just want to say hi? Drop a message below.
        </p>

        <div className="bg-indigo-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center">
                <IconMail size={28} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Message sent!</h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-indigo-400 text-sm hover:text-indigo-300 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Eliezer Chirino"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Eliezer, I'd love to work with you on..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)] border border-indigo-500/50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <IconSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
