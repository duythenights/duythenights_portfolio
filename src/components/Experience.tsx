import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobs = [
  {
    role: "Intern, Fresher & Junior Frontend Developer",
    company: "ESTUARY JOINT STOCK COMPANY.",
    logo: "/est.png",
    duration: "05/2023 - Present",
    description: [
      "Built and maintained <span class='font-semibold'>web apps</span> using <span class='font-semibold'>React.js</span>, <span class='font-semibold'>Next.js</span>, and <span class='font-semibold'>Vite</span>.",
      "Migrated from <span class='font-semibold'>Webpack</span> to <span class='font-semibold'>Vite</span>, boosting <span class='font-semibold'>startup</span> and <span class='font-semibold'>HMR</span> speed by ~70%.",
      "Upgraded codebase to <span class='font-semibold'>React 18</span> for <span class='font-semibold'>performance</span> and <span class='font-semibold'>developer experience</span> improvements.",
      "Developed <span class='font-semibold'>scalable</span>, <span class='font-semibold'>responsive UIs</span> with <span class='font-semibold'>multilingual (i18n)</span> support.",
      "Used <span class='font-semibold'>Zustand</span> and <span class='font-semibold'>TanStack Query</span> for efficient <span class='font-semibold'>state</span> and <span class='font-semibold'>data management</span>.",
      "Integrated <span class='font-semibold'>third-party libraries</span> and <span class='font-semibold'>OAuth</span> (Google, Microsoft).",
      "Collaborated in <span class='font-semibold'>Agile teams</span> and participated in <span class='font-semibold'>sprint rituals</span>.",
      "Worked with <span class='font-semibold'>Product Owners</span> to define and prioritize <span class='font-semibold'>features</span>.",
      "Automated <span class='font-semibold'>deployments</span> via <span class='font-semibold'>GitLab CI/CD pipelines</span>.",
      "Managed <span class='font-semibold'>multiple projects</span> under <span class='font-semibold'>tight deadlines</span>.",
    ],
    link: "https://estuary.solutions/",
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {Array.isArray(j.description) &&
                    j.description.map((point, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: point }}
                        className="leading-relaxed"
                      />
                    ))}
                </ul>
                <Link
                  href={j.link}
                  target="_blank"
                  className="text-sm flex items-center justify-left text-blue-500 hover:underline mt-2"
                >
                  Visit Company Site
                  <ExternalLink className="size-4 ml-2" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
