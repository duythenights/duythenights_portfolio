import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Categorized skills
const categorizedSkills = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React.js",
    "Next.js",
    "Vue",
  ],
  "State Management": [
    "Zustand",
    "Redux",
    "TanStack Query (React Query)",
    "Pinia",
  ],
  "UI & Styling": ["Tailwind CSS", "Ant Design", "Material UI", "shadcn/ui"],
  "Utilities & Libraries": [
    "React Router",
    "Axios",
    "i18n",
    "react-oauth/google",
    "azure/msal-react",
    "Firebase (FCM)",
    "Recharts",
    "DnD",
    "GSAP",
  ],
  "Testing & QA": ["Cypress", "Jest", "React Testing Library (RTL)"],
  "Tools & Platforms": [
    "Windows",
    "Linux",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "AWS (EC2)",
    "Azure (SSO)",
    "VSCode",
    "Figma",
  ],
  "Practices & Concepts": [
    "Agile (Scrum)",
    "Core Web Vitals",
    "SEO",
    "Web Workers",
    "Service Workers",
    "Websocket",
    "Multilingual (i18n)",
    "FCM",
    "Microsite",
    "Google Analytics",
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
