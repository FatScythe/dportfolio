"use client";

import Image from "next/image";
import { Project, SectionItem } from "@/types/portfolio";
import PageHeader from "@/app/components/utils";
import { cn } from "@/app/libs/utils";

function WorkSections({ sections }: { sections: SectionItem[] }) {
  return (
    <div className="space-y-40">
      {sections.map((section, idx) => {
        const subTextEntries = Array.isArray(section.subText)
          ? Object.fromEntries(
              section.subText.map((item: any) => [item.key, item.value]),
            )
          : section.subText;

        const activeQuote = section.quoteBlock;

        const activeImages = section.images;

        return (
          <div key={section._key || idx} className="space-y-20">
            {section.items && (
              <div
                className={cn(
                  "grid gap-12 w-full items-start",
                  Array.isArray(section.items) && section.items.length > 1
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 max-w-4xl",
                )}
              >
                {section.items.map((item: any, i: number) => (
                  <div key={i} className={cn("space-y-6")}>
                    <h3
                      className={cn(
                        "uppercase tracking-[0.2em] font-bold text-accent text-xs md:text-sm",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-gray-600 leading-relaxed text-base md:text-lg font-light",
                      )}
                    >
                      {item.paragraph}
                    </p>
                    {item.list && item.list.length > 0 && (
                      <ul className={cn("space-y-3 pt-2")}>
                        {item.list.map((bullet: string, bIdx: number) => (
                          <li
                            key={bIdx}
                            className={cn(
                              "flex items-start gap-3 text-sm md:text-base text-gray-500",
                            )}
                          >
                            <span
                              className={cn(
                                "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark/40",
                              )}
                            />
                            <span className={cn("leading-relaxed")}>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {(activeQuote || subTextEntries) && (
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-gray-100 pt-12",
                )}
              >
                <div className={cn("md:col-span-7")}>
                  {subTextEntries && (
                    <div className={cn("grid grid-cols-2 gap-y-6 gap-x-10")}>
                      {Object.entries(subTextEntries).map(
                        ([key, val]: [string, any]) => (
                          <div key={key}>
                            <span
                              className={cn(
                                "font-bold text-gray-900 uppercase tracking-widest text-[10px] block mb-2",
                              )}
                            >
                              {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className={cn("text-gray-500 text-sm")}>
                              {val}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div className={cn("md:col-span-5")}>
                  {activeQuote && (
                    <div className={cn("space-y-8")}>
                      {(Array.isArray(activeQuote)
                        ? activeQuote
                        : [activeQuote]
                      ).map((q, i) => (
                        <div
                          key={i}
                          className={cn("border-l-2 border-accent pl-6")}
                        >
                          <p
                            className={cn(
                              "text-gray-700 italic text-base leading-relaxed",
                            )}
                          >
                            "{q.text}"
                          </p>
                          <cite
                            className={cn(
                              "block mt-3 not-italic text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",
                            )}
                          >
                            — {q.author}
                          </cite>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeImages && (
              <div className={cn("w-full pt-10")}>
                <div
                  className={cn(
                    "flex flex-col md:flex-row gap-6 w-full",
                    "*:flex-1",
                  )}
                >
                  {(Array.isArray(activeImages)
                    ? activeImages
                    : [activeImages]
                  ).map((img, i) => (
                    <div
                      key={i}
                      className={cn(
                        "group relative aspect-video bg-gray-50 overflow-hidden rounded-sm",
                      )}
                    >
                      {img.url && (
                        <Image
                          src={img.url}
                          alt={img.title || "Project Image"}
                          fill
                          className={cn(
                            "object-cover transition-transform duration-1000 group-hover:scale-105",
                          )}
                        />
                      )}
                      {img.canViewFullSize && (
                        <div
                          className={cn(
                            "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8",
                          )}
                        >
                          <span
                            className={cn(
                              "text-[10px] text-white bg-black/40 backdrop-blur-md px-4 py-2 uppercase tracking-[0.3em]",
                            )}
                          >
                            Fullsize
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function WorkClient({ project }: { project: Project }) {
  const { portfolioWork } = project;

  return (
    <main className={cn("max-w-6xl mx-auto px-6 py-20")}>
      <PageHeader
        title={portfolioWork.title}
        subtitle={portfolioWork.subtitle}
        className="my-10"
      />

      {portfolioWork.headerImg && (
        <div className="relative aspect-25/11 w-full mb-16 overflow-hidden">
          <Image
            src={portfolioWork.headerImg}
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-xl leading-relaxed font-light text-gray-700">
          {portfolioWork.headerText}
        </h2>
      </div>

      <hr className="border-gray-200 mb-20" />
      <WorkSections sections={portfolioWork.sections || []} />
    </main>
  );
}
