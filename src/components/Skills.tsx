import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Categorized skills
const categorizedSkills = {
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Redux",
    "Zustand",
    "Tanstack Query",
    "Ant Design",
    "MUI",
    "shadcn/ui",
  ],
  "Optimization & SEO": ["SEO", "Core Web Vitals"],
  "Testing & QA": ["Jest", "Cypress"],
  "Development Tools": ["Git", "Jira", "Docker"],
  "Development Practices": ["Agile", "Scrum"],
  "Design Tool": ["Figma", "Zeplin"],
  "Experience & Specialization": [
    "Web socket",
    "Socket.io",
    "CRM",
    "CMS",
    "Admin Panel",
    "i18n - Multilanguage",
    "React Native",
  ],
};

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-700">{category}:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="px-2 py-1 text-xs font-medium rounded-md"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
