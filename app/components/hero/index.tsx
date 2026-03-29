// utils...
import { cn } from "@/app/libs/utils";

const heroLines = [
  { text: "Lagos based", highlight: "" },
  { text: "designer, passionate", highlight: "", isItalic: true },
  { text: "about ", highlight: "Suya, tea", isItalic: true },
  {
    text: "and solving",
    highlight: "",
    isItalic: false,
  },
  {
    text: "complex problems.",
    highlight: "",
    isItalic: true,
  },
];

export default function HeroBanner() {
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
