import { Metadata } from "next";

// hooks...
import { usePortfolioData } from "@/hook/usePortfolioData";

// component...
import WorkClient from "./work-client";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await usePortfolioData();
  const project = projects[slug];

  return {
    title: project?.name || "Project",
    description: project?.portfolioWork?.headerText,
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const { projects } = await usePortfolioData();
  const project = projects[slug];

  if (!project) return <div>Project not found</div>;

  return <WorkClient project={project} />;
}
