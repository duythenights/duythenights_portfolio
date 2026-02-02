import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categorizedSkills: Record<string, string[]> = {
  "Core Tech": [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "TanStack Query",
  ],
  Architecture: [
    "Monorepo (Turborepo)",
    "Micro-frontends",
    "Hybrid Rendering (SSR/ISR)",
  ],
  "Payment & Security": [
    "PCI DSS Compliance",
    "3D-Secure",
    "Stripe/Airwallex",
    "WebSocket/SSE",
    "reCAPTCHA",
    "Cloudflare Turnstile",
  ],
  "Infrastructure & Testing": [
    "GitHub CI/CD",
    "PM2",
    "Docker",
    "Git",
    "Jest/Cypress",
  ],
  "UI & Performance": [
    "Tailwind CSS",
    "Core Web Vitals",
    "GSAP",
    "Pixel-perfect Implementation",
  ],
  Languages: ["English (Professional Technical)"],
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
            <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-300">
              {category}
            </h3>
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
