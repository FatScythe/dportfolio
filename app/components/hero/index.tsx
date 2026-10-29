import { PortableText, PortableTextComponents } from "@portabletext/react";

// utils...
import { cn } from "@/app/libs/utils";
// hooks
import { usePortfolio } from "@/hook/usePortfolio";

const heroComponents: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="italic text-background/85 font-normal">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-accent not-italic">{children}</strong>
    ),
  },
  block: {
    normal: ({ children }) => <span>{children}</span>,
  },
};

/**
 * truncates Portable Text content if total word count across all children spans exceeds `maxWords`....
 */
function truncatePortableText(content: any[], maxWords: number = 3) {
  if (!Array.isArray(content)) return content;

  let totalWords = 0;
  let truncated = false;

  return content.map((block) => {
    if (block._type !== "block" || !Array.isArray(block.children)) return block;

    const newChildren = [];
    for (const child of block.children) {
      if (truncated) break;

      const words = (child.text || "").split(/\s+/).filter(Boolean);

      if (totalWords + words.length > maxWords) {
        const remainingAllowed = maxWords - totalWords;
        const keptWords = words.slice(0, remainingAllowed);
        const newText = keptWords.join(" ") + "...";
        totalWords += remainingAllowed;
        truncated = true;

        newChildren.push({ ...child, text: newText });
      } else {
        totalWords += words.length;
        newChildren.push(child);
      }
    }

    return { ...block, children: newChildren };
  });
}

export default function HeroBanner() {
  const { heroLines } = usePortfolio();

  return (
    <section
      className={cn(
        "bg-secondary overflow-hidden py-8 px-4 sm:px-6 md:px-12",
        "min-h-[60vh] flex items-center justify-center",
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        <div
          className={cn(
            "font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-background",
            "leading-[0.88] tracking-tight text-center selection:bg-accent/20 w-full flex flex-col items-center",
          )}
        >
          {heroLines.map((line) => {
            const formattedContent = truncatePortableText(line.content, 3);

            return (
              <div
                key={line._key}
                className="block truncate max-w-full px-2 py-1 my-0"
                title={line.content?.[0]?.children?.[0]?.text}
              >
                <PortableText
                  value={formattedContent}
                  components={heroComponents}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
