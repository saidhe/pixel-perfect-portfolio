import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg grid place-items-center text-primary-foreground font-bold" style={{ background: "var(--gradient-primary)" }}>X</span>
          <span className="font-bold text-foreground">Xhris Dior</span>
          <span>— Fullstack Developer</span>
        </div>
        <div className="flex items-center gap-1.5">
          © {new Date().getFullYear()} — Made with <Heart size={14} className="fill-primary text-primary" /> au Cameroun
        </div>
      </div>
    </footer>
  );
}