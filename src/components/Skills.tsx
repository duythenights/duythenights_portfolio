import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "Redux",
  "Antd",
  "MUI",
  "shadcn/ui",
  "i18n",
  "Zustand",
  "Tanstack-query",
  "Docker",
  "Git",
  "SEO",
  "Core Web Vitals",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
