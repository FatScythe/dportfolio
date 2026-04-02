"use client";

// utils...
import { cn } from "@/app/libs/utils";
import { ClassValue } from "clsx";

// hooks...
import { useSocialLinks } from "@/hook/useSocialLinks";

export default function Footer({ className = "" }: { className?: ClassValue }) {
  const socialLinks = useSocialLinks();
  return (
    <footer
      className={cn("w-full bg-background px-4 sm:px-8 py-12", className)}
    >
      <div className={cn("max-w-7xl mx-auto flex flex-col items-center gap-8")}>
        <hr className={cn("w-full border-t border-foreground/40")} />

        <nav className={cn("flex items-center justify-center gap-6")}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={cn(
                "text-foreground/80 hover:text-accent transition-all duration-300",
                "hover:-translate-y-1",
              )}
            >
              {link.icon}
            </a>
          ))}
        </nav>

        <div
          className={cn(
            "text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-sans",
          )}
        >
          © {new Date().getFullYear()}{" "}
          {process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "John Doe"}
        </div>
      </div>
    </footer>
  );
}
