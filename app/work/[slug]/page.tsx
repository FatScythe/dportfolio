import { Metadata } from "next";
import Link from "next/link";

// hooks...
import { usePortfolioData } from "@/hook/usePortfolioData";

// component...
import WorkClient from "./work-client";

export function ProjectNotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="space-y-4 max-w-md">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          404 — Not Found
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900">
          Project Not Found
        </h1>
        <p className="text-gray-500 font-light text-base leading-relaxed">
          The case study or project you are looking for doesn’t exist or has
          been moved.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-block border border-accent text-accent px-6 py-3 text-xs tracking-widest uppercase font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Back to Overview
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await usePortfolioData();
  const project = projects[slug];

  return {
    title: project?.name || "Project",
    description: project?.portfolioWork?.title,
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const { projects } = await usePortfolioData();
  const project = projects[slug];

  if (!project) return <ProjectNotFound />;

  return <WorkClient project={project} />;
}
