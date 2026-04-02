// utils...
import { cn } from "@/app/libs/utils";

// hook...
import { usePortfolioData } from "@/hook/usePortfolioData";

export default async function HeroBanner() {
  const { heroLines } = await usePortfolioData();
  return (
    <section
      className={cn(
        "bg-secondary overflow-hidden py-4 px-6 sm:px-12",
        "min-h-[70vh] flex items-center justify-center",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex flex-col items-center justify-center",
        )}
      >
        <div
          className={cn(
            "font-serif text-[42.5px] leading-tight sm:leading-normal sm:text-7xl lg:text-8xl text-background",
            "selection:bg-accent/20 text-center",
          )}
        >
          {heroLines.map((line, index) => (
            <span key={index} className={cn("block whitespace-nowrap")}>
              {line.text}
              <span
                className={cn(line.isItalic && "italic text-background/85")}
              >
                {line.highlight}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
