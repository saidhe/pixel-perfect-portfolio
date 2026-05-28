import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, MessageCircle, Music2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Je reviens vers vous sous 24h.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const infos = [
    { icon: Mail, label: "Email", value: "diorrebero84@gmail.com" },
    { icon: MapPin, label: "Localisation", value: "Douala, Cameroun 🇨🇲" },
    { icon: Phone, label: "Téléphone", value: "+237 6XX XX XX XX" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Travaillons ensemble
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Prenons{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              contact
            </span>
          </h2>
          <p className="text-muted-foreground">
            Un projet en tête ? Je suis disponible pour collaborer. Écrivez-moi !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="relative overflow-hidden rounded-3xl p-7 text-primary-foreground shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-sm font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.80_0.18_150)] animate-pulse" />
                  Disponible maintenant
                </div>
                <h3 className="text-2xl font-bold mt-3">Prêt pour votre projet</h3>
                <p className="text-sm text-white/85 mt-2 leading-relaxed">
                  Open à des missions freelance, collaborations et opportunités full-time. Réponse sous 24h.
                </p>
              </div>
            </div>

            {infos.map((i) => (
              <div key={i.label} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-primary hover:-translate-y-0.5 transition-all">
                <div className="h-12 w-12 rounded-xl bg-accent text-primary grid place-items-center">
                  <i.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">{i.label}</div>
                  <div className="font-semibold">{i.value}</div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[Github, MessageCircle, Music2].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 rounded-xl border border-border bg-card grid place-items-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-7 lg:p-8 shadow-[var(--shadow-card)] space-y-5"
          >
            <h3 className="text-2xl font-bold">Envoyez-moi un message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nom complet" required>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Votre nom" className="input" />
              </Field>
              <Field label="Email" required>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="votre@email.com" className="input" />
              </Field>
            </div>
            <Field label="Sujet" required>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required placeholder="Ex: Développement d'une application web" className="input" />
            </Field>
            <Field label="Message" required>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={6} placeholder="Décrivez votre projet ou votre demande..." className="input resize-none" />
            </Field>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 text-primary-foreground px-6 py-4 rounded-xl font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform" style={{ background: "var(--gradient-primary)" }}>
              <Send size={18} /> Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}