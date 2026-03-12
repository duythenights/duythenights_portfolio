"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import projectsData from "@/data/projects.json";

export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  techIcons: string[];
  imageUrl: string;
  link: string;
}

const TECH_ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,
  Docker: SiDocker,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
};

const TECH_COLORS: Record<string, string> = {
  React: "#61DAFB",
  "Node.js": "#339933",
  Node: "#339933",
  Docker: "#2496ED",
  Python: "#3776AB",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  JavaScript: "#F7DF1E",
};

function TechIconBar({ techIcons }: { techIcons: string[] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-4 bg-[#E0E7FF] dark:bg-slate-800/50 min-w-[52px]">
      {techIcons.map((name) => {
        const Icon = TECH_ICON_MAP[name];
        const color = TECH_COLORS[name];
        if (!Icon) return null;
        return (
          <Icon
            key={name}
            className="size-6"
            style={color ? { color } : undefined}
            title={name}
          />
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="group"
    >
      <Link href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined}>
        <article
          className="flex flex-col overflow-hidden rounded-xl bg-[#F9F9F9] dark:bg-card shadow-md transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/50 dark:group-hover:shadow-slate-900/50"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex min-h-0">
            <div className="flex flex-1 flex-col gap-2 p-4 min-w-0">
              <span className="text-xs font-medium text-muted-foreground">
                {project.category}
              </span>
              <h3 className="font-bold text-foreground line-clamp-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <TechIconBar techIcons={project.techIcons} />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function PersonalProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = projectsData as Project[];

  return (
    <section ref={ref} className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-primary">Personal Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
