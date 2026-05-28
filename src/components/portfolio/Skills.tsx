import { motion } from "framer-motion";
import { Palette, Server, Rocket } from "lucide-react";

const groups = [
  {
    icon: Palette,
    title: "Frontend",
    grad: "linear-gradient(135deg, oklch(0.65 0.22 285), oklch(0.70 0.20 320))",
    skills: [
      ["HTML / CSS", 95],
      ["JavaScript", 90],
      ["React / Next.js", 88],
      ["Tailwind CSS", 92],
      ["TypeScript", 78],
    ],
  },
  {
    icon: Server,
    title: "Backend",
    grad: "linear-gradient(135deg, oklch(0.70 0.18 150), oklch(0.75 0.18 165))",
    skills: [
      ["Node.js / Express", 87],
      ["PostgreSQL", 82],
      ["MySQL", 80],
      ["Supabase", 85],
      ["Firebase", 75],
    ],
  },
  {
    icon: Rocket,
    title: "DevOps & Tools",
    grad: "linear-gradient(135deg, oklch(0.65 0.22 320), oklch(0.70 0.20 350))",
    skills: [
      ["Git / GitHub", 90],
      ["Vercel / Railway", 88],
      ["Docker (bases)", 60],
      ["Linux / VPS", 72],
      ["REST API / JWT", 90],
    ],
  },
];

const ecosystem = ["React","Next.js","Vue.js","Node.js","Express","TypeScript","PostgreSQL","MySQL","Supabase","Firebase","Prisma","Tailwind CSS","Framer Motion","JWT","REST API","Git","Vercel","Railway"];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Mes compétences
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Technologies &{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Outils
            </span>
          </h2>
          <p className="text-muted-foreground">
            Les technologies que j'utilise pour créer des expériences web exceptionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-card border border-border rounded-3xl p-7 shadow-[var(--shadow-card)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl grid place-items-center text-white" style={{ background: g.grad }}>
                  <g.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.skills.length} compétences</p>
                </div>
              </div>
              <ul className="space-y-4">
                {g.skills.map(([name, value]) => (
                  <li key={name as string}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{name}</span>
                      <span className="font-bold text-primary">{value}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)]"
        >
          <p className="text-center text-xs font-bold tracking-[0.25em] text-muted-foreground mb-6">
            ÉCOSYSTÈME COMPLET
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {ecosystem.map((e) => (
              <span key={e} className="px-4 py-2 rounded-full bg-accent text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {e}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}