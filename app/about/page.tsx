import Image from "next/image";

// util...
import { cn } from "@/app/libs/utils";

// icons...
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { socialLinks } from "../components/utils";

export default function About() {
  return (
    <section className="bg-background min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-2 overflow-hidden rounded-sm bg-secondary/10">
            <Image
              src="https://placehold.co/600x400"
              alt="Daniel Onyenobi"
              width={600}
              height={400}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 overflow-hidden rounded-sm bg-secondary/10">
            <Image
              src="https://placehold.co/300x400"
              alt="Workspace"
              width={300}
              height={400}
              className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 overflow-hidden rounded-sm bg-secondary/10">
            <Image
              src="https://placehold.co/300x400"
              alt="Lagos Inspiration"
              width={300}
              height={400}
              className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">
          <div className="space-y-8 font-serif text-lg leading-relaxed text-foreground/70 text-[16px]">
            <p>
              Hi, I’m Daniel — a designer based in Lagos. I spend my time
              exploring the space where human behavior meets digital
              interaction, crafting experiences that feel as intentional as they
              are intuitive.
            </p>

            <p>
              My approach is rooted in the belief that design is a collaborative
              evolution. I lean into the insights of those around me to solve
              complex problems, aiming to create work that resonates on a
              functional and emotional level. You can always reach me at{" "}
              <a
                href="mailto:dannyonyenobi@gmail.com"
                className="text-accent border-b border-accent/30 hover:border-accent transition-colors"
              >
                dannyonyenobi@gmail.com
              </a>
              .
            </p>

            <p>
              Whether I'm refining a core interface or exploring new visual
              directions, I'm driven by the quiet details that make a product
              feel right. If you share a passion for these details or want to
              discuss a potential project, feel free to get in touch.
            </p>

            <p>
              When I’m away from the screen, I’m usually looking for inspiration
              in the city’s food, coffee, and local culture.
            </p>
          </div>

          <div className="pt-10 border-t border-foreground/10">
            <div className="tracking-normal text-foreground/70 mb-6 font-sans">
              You can also find me on social media:
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={link.name}
                  className="p-4 border border-accent/70 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
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
