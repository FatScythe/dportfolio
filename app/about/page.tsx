"use client";

import Image from "next/image";

// util...
import { cn } from "@/app/libs/utils";

// hooks...
import { usePortfolio } from "@/hook/usePortfolio";
import { useSocialLinks } from "@/hook/useSocialLinks";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const aboutPortableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic font-normal text-foreground/90">{children}</em>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-accent border-b border-accent/30 hover:border-accent transition-colors font-medium"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
  },
};

export default function About() {
  const { portfolioName, aboutPage } = usePortfolio();
  const socialLinks = useSocialLinks();

  return (
    <section className={cn("bg-background min-h-screen py-20 px-4 sm:px-8")}>
      <div
        className={cn(
          "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
        )}
      >
        <div className={cn("lg:col-span-5 grid grid-cols-2 gap-4")}>
          <div
            className={cn(
              "col-span-2 lg:col-span-2 overflow-hidden rounded-sm bg-secondary/10",
            )}
          >
            {aboutPage.image1 && (
              <Image
                src={aboutPage.image1}
                alt={portfolioName}
                width={600}
                height={400}
                className={cn(
                  "w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out",
                )}
              />
            )}
          </div>
          <div
            className={cn(
              "col-span-2 lg:col-span-1 overflow-hidden rounded-sm bg-secondary/10",
            )}
          >
            {aboutPage.image2 && (
              <Image
                src={aboutPage.image2}
                alt="About 2"
                width={300}
                height={400}
                className={cn(
                  "w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700",
                )}
              />
            )}
          </div>
          <div
            className={cn(
              "col-span-2 lg:col-span-1 overflow-hidden rounded-sm bg-secondary/10",
            )}
          >
            {aboutPage.image3 && (
              <Image
                src={aboutPage.image3}
                alt="About 3"
                width={300}
                height={400}
                className={cn(
                  "w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700",
                )}
              />
            )}
          </div>
        </div>

        <div
          className={cn("lg:col-span-6 lg:col-start-7 flex flex-col gap-10")}
        >
          <div
            className={cn(
              "space-y-6 font-serif text-lg leading-relaxed text-foreground/70 text-[16px]",
            )}
          >
            {aboutPage.paragraphs?.map((para: any[], index: number) => (
              <PortableText
                key={index}
                value={para}
                components={aboutPortableTextComponents}
              />
            ))}
          </div>

          <div className={cn("pt-10 border-t border-foreground/10")}>
            <div
              className={cn(
                "tracking-normal text-foreground/70 mb-6 font-sans",
              )}
            >
              You can also find me on social media:
            </div>

            <div className={cn("flex items-center gap-4")}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={link.name}
                  className={cn(
                    "p-4 border border-accent/70 rounded-full hover:bg-foreground hover:text-background transition-all duration-300",
                  )}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
